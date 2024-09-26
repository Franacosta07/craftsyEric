const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const indexRoutes = require('./routes/index.routes');
const productsRoutes = require('./routes/products.routes')
const userRoutes = require('./routes/users.routes')

//Seteo recursos estaticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//seteo motor de plantillas
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/', indexRoutes);
app.use('/products',productsRoutes)

app.use('/users', userRoutes)
app.use('/login', userRoutes)




app.listen(PORT, () => 'Servidor corriendo en http://localhost:' + PORT)