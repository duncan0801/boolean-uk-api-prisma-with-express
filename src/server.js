const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))
app.use(express.json())

const booksRouter = require("./resources/books/router")

app.use("/books", booksRouter)

app.get("*", (req, res) => {
    res.json({msg: "All good buddy!"})
})

const port = 4000
app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})