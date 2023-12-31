const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/todos", function (req, res) {
  fs.readFile("todos.json", "utf8", function (err, data) {
    if (!err) {
      const todos = JSON.parse(data);
      res.send({ code: 200, status: "success", data: todos });
    } else {
      console.log(err);
      res.send({ code: 500, status: err });
    }
  });
});

app.get("/todos/:id", function (req, res) {
  const id = Number(req.params.id);
  fs.readFile("todos.json", "utf8", function (err, data) {
    if (!err) {
      const todos = JSON.parse(data);
      if (id <= todos.length) {
        res.status(200).json(todos[id - 1]);
      } else {
        res.status(404).send("id doesn't exist");
      }
    } else {
      console.log(err);
      res.send({ code: 500, status: err });
    }
  });
});

app.put("/todos/:id", function (req, res) {
  const id = Number(req.params.id);
  fs.readFile("todos.json", "utf8", function (err, data) {
    if (!err) {
      const todos = JSON.parse(data);
      if (id <= todos.length) {
        todos[id - 1] = req.body;
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
          if (!err) {
            res.status(200).json(todos[id - 1]);
          } else {
            console.error(err);
            res.status(500).send("Server error.");
          }
        });
      } else {
        res.status(404).send("id doesn't exist");
      }
    } else {
      console.log(err);
      res.send({ code: 500, status: err });
    }
  });
});

app.delete("/todos/:id", function (req, res) {
    const id = Number(req.params.id);
    fs.readFile("todos.json", "utf8", function (err, data) {
      if (!err) {
        const todos = JSON.parse(data);
        if (id <= todos.length) {
         const newtodos=todos.filter((obj,ind)=>{
            return ind+1!=id
         })

          fs.writeFile("todos.json", JSON.stringify(newtodos), (err) => {
            if (!err) {
              res.status(200).send("successfully deleted");
            } else {
              console.error(err);
              res.status(500).send("Server error.");
            }
          });
        } else {
          res.status(404).send("id doesn't exist");
        }
      } else {
        console.log(err);
        res.send({ code: 500, status: err });
      }
    });
  });

app.post("/todos", function (req, res) {
  const { title, completed, description } = req.body;

  fs.readFile("todos.json", "utf8", function (err, data) {
    if (!err) {
      console.log(typeof data);
      const todos = JSON.parse(data);
      const newTodo = [...todos, { title, completed, description }];
      fs.writeFile("todos.json", JSON.stringify(newTodo), function (err) {
        if (!err) {
          res.send({ code: 200, status: "success" });
        } else {
          console.log(err);
          res.send({ code: 500, status: err });
        }
      });
    } else {
      console.log(err);
      res.send({ code: 500, status: err });
    }
  });
});

app.listen(3000, function () {
  console.log("server is listening");
});

module.exports = app;
