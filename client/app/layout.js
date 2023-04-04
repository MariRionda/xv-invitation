import '../styles/globals.modules.css' 
import Link from 'next/link'

const links=[{
  label:'DRFullCodeLogin',
  route:'/'
},{
  label:'CreateGuests',
  route:'/createGuests'
},{
  label:'Admin',
  route:'/admin'
},{
  label:'Login',
  route:'/login'
},{
  label:'Invitation',
  route:'/invitation'
}]
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <title>XV-invitation</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
