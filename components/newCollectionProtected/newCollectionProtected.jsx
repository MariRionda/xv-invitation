"use client";
import * as XLSX from 'xlsx';

const NewCollectionProtected = () => {

  const convertFileToJson = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    convertFileToJson(file);
  };



  return (
    <div>
      <h1>Convertir archivo Excel a JSON</h1>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default NewCollectionProtected;