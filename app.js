const Express = require("express");
const Mongoos = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/person", async (request, response) => { })
app.get("/people", async (request, response) => { });
app.get("/person/:id", async (request, response) => { });
app.put("/person/:id", async (request, response) => { });
app.delete("/person/:id", async (request, response) => { });

app.listen(3000, () => {
    console.log("listening 3000")
})