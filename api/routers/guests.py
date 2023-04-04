from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from google.cloud import firestore
from typing import List

router = APIRouter(prefix="/guest",
                   tags=["guest"])

# Inicializa la conexión a Firestore
db = firestore.Client.from_service_account_json('firebase.json')

# Define un modelo Pydantic para validar los datos del invitado
class Guest(BaseModel):
    name: str
    state: str
    phone: str
class GuestGet(BaseModel):
    id: int
    name: str
    state: str
    phone: str

# Define la ruta POST para crear un nuevo invitado
@router.post("/")
async def create_guest(guest: Guest):
    try:
        # Obtiene el número máximo actual de los documentos en la colección de invitados
        query = db.collection('guests').order_by('id', direction=firestore.Query.DESCENDING).limit(1)
        docs = query.stream()
        last_id = 0
        for doc in docs:
            last_id = doc.get('id')
            break

        # Suma 1 al número máximo para obtener el nuevo ID
        new_id = last_id + 1

        # Formatea el nuevo ID como una cadena de 3 dígitos con ceros a la izquierda
        id_str = str(new_id)

        # Crea el nuevo documento en Firestore con el ID y los datos del invitado
        doc_ref = db.collection('guests').document(id_str)
        doc_ref.set({
            'id': new_id,
            'name': guest.name,
            'state': guest.state,
            'phone': guest.phone
        })
        return {'msg': 'El invitado ha sido creado correctamente'}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Define la ruta GET para obtener todos los invitados
@router.get("/all", response_model=List[GuestGet])
async def get_guests():
    try:
        # Obtiene todos los documentos en la colección de invitados
        query = db.collection('guests')
        docs = query.stream()
        guests = []
        for doc in docs:
            data = doc.to_dict()
            guest = GuestGet(**data)
            guests.append(guest)
        return guests
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
# Define la ruta DELETE para eliminar un invitado por su ID
@router.delete("/{guest_id}")
async def delete_guest(guest_id: str):
    try:
        # Verifica si el invitado existe en Firestore
        doc_ref = db.collection('guests').document(guest_id)
        doc = doc_ref.get()
        if not doc.exists:
            raise HTTPException(status_code=404, detail='El invitado no existe')

        # Elimina el documento del invitado
        doc_ref.delete()
        return {'msg': 'El invitado ha sido eliminado correctamente'}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

