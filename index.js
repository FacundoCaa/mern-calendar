const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config()


//* Crear servidor de express 
const app = express();

// Base de datos
dbConnection() 

// Directorio Público
app.use( express.static('public') );

// * Lectura y perseo del body
app.use( express.json() )


//* Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


//  TODO: CRUD: Eventos


//* Escuchar Peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT  }`)
} );

app.get("/", (req, res) => {
    res.send("La pagina de inicio funciona")
})