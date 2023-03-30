//declaraciones
const servidorHTTP= require('express'); 
const app=servidorHTTP(); 
const port=process.env.port || 3000;

//configuraciones - respuestas para el cliente 

/*app.get == Solicitamos un recurso del servidor
app.post == Creamos un recurso en el servidor
app.delete ==Eliminamos un recurs del servidor
app.put == Actualizamos un recurso en el servidor */

app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor en Node.js'); 
})
app.get('*',(req,res)=>{
    res.send('404 | Página no encontrada');
})

//procesos - respuestas para el desarrollador 
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: ',port); 
})