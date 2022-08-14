const express = require('express')
//works the same as an app
const router = express.Router()

router.get('/', (req,res) =>{
    //given query parameter, access info from query string
    console.log(req.query.name)
    
    res.send('User List')
 })

router.get('/new', (req,res) =>{
    //res.send('User New Form')
    res.render("users/new")
}) 

//create a user
router.post('/', (req,res) =>{
    //what to do for valid/invalid responsses
    const isValid = true
    if (isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }
    else{
        console.log(`Error`)
        res.render(`users/new`, {firstName: req.body.firstName})
    }

    /*
    //res.send('Create User')
    console.log(req.body.firstName)
    res.send("hi")
    */
})

//exactly the same as lines 33-45
//only had to define our route in one location and all other requests match that route
router.route("/:id").get((req,res) =>{
    console.log(req.user)
    res.send(`Get User WIth ID ${req.params.id}`)
}).put((req,res) =>{
    req.params.id
    res.send(`Update User WIth ID ${req.params.id}`)
}).delete((req,res) =>{
    req.params.id
    res.send(`Delete User WIth ID ${req.params.id}`)
})

/*
// access an individual user
//use dynamic parameter
//make sure to put dynamic routes at the bottom
router.get('/:id', (req,res) =>{
    req.params.id
    res.send(`User Get WIth ID ${req.params.id}`)
})

router.put('/:id', (req,res) =>{
    req.params.id
    res.send(`Update User WIth ID ${req.params.id}`)
})

router.delete('/:id', (req,res) =>{
    req.params.id
    res.send(`Delete User WIth ID ${req.params.id}`)
})
*/


const users = [{ name: "Kyle"}, {name: "Sally"}]
//runs any time it finds a param that matches the name you pass in
//middleware: code that runs between the start and end of the request
router.param("id", (req,res, next, id) =>{
    req.user = users[id]
    next()
})

module.exports = router 