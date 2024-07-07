import e from 'express'
import todoController  from './controller/todoController.js';
import dbConnection from './db.js';

// initializing the express core

const app = e();

// setting the view engine

app.set('view engine', 'ejs');

// rendering static file

app.use(e.static('./public'));

// Using Express Built-in Middleware to get the submitted input value

app.use(e.urlencoded({extended: false}))


// Making  a connection to oour database 

   dbConnection()
     .then(() => {
      // Firing Up The Controller

      todoController(app);

      // Listening to a port
      app.listen(3000, () => {
      console.log('Listening to port ')
   });
     })













