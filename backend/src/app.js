
const express = require('express'); 
const cors = require('cors'); 

const app = express(); 

const bodyParser = require('body-parser'); 
app.use(bodyParser.json({ limit: '15mb' }));

const PORT = 5000;

app.use(express.json()); 
app.use(cors()); 


const Router = require("./routes/routes")
app.use(Router);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
}); 




