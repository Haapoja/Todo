const functions = require('firebase-functions');
const app = require('express')();
//All the api calls on this route will execute via getalltodos function
const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require("./APIs/todos")

app.post("/todo", postOneTodo)

app.delete("/todo/:todoId", deleteTodo);

app.put("/todo/:todoId", editTodo);

app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);