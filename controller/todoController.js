import { name } from "ejs";
import { Todo } from "../Model/model.js"






const todoController =  (app) => {


    app.get('/todo', function(req, res) {
        Todo.find().sort({createdAt: -1})
           .then(doc => {
            res.render('todo', {todos: doc})
           })
    });

    app.post('/todo', (req, res) =>  {
       const todo = new Todo(req.body)

       todo.save()
          .then(() => {
            res.redirect('/todo')
          })
    });

    app.delete('/todo/:id', (req, res) => {

        const id = req.params.id

        Todo.findByIdAndDelete(id)
          .then((doc) => {
            res.json({redirect: '/todo'})
          }).catch(err => console.log(err))
    })
   
};

export default todoController;