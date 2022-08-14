 const express = require("express")
 //create an app that allows us to set up our entire server
 const app = express()
 
 //takes the name of the folder where our static files are
 //serve all the files from public folder as we want
 app.use(express.static("public"))
 //allows us to access information from forms
 app.use(express.urlencoded({extended: true}))
 //post json information to the server
 app.use(express.json())
 
 app.set("view engine", "ejs")

 //define this at the top of the page if you want to use for all of your routes
 //app.use(logger)

 /*
 //to make our server run: app listening on port 3000 for different requests
 app.listen(3000) 
 */

 //set up routes: 
 //main methods: get, post, put, delete, patch
 app.get("/",  (req, res) =>{
    console.log("Here")
    //send info to user: .send is generic and for testing purposes
    //res.send('Hi')

    //we can send down a status
    //res.sendStatus(500) //refer to status codes
    //500 --> error, 200 --> success

    //we can send down a status chained along with a message
    //res.status(500).send("Hi")

    //res.status(500).json({message: "Error"})

    //send down a file for the user to download
    //res.download('server.js')

    //Rendering a file
    res.render('index', {text: "World"})
 })

const userRouter = require("./routes/users")


 //anything that starts with /users, add all these different routes to the end of it
app.use('/users', userRouter) 

//only use next when you create middleware
//middleware runs from top to bottom
function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)

