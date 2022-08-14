Backend Server for **Swippet** project submission

The following **required** functionality is complete:

* [x] User register a username and password into the database to login for future use
* [x] User can navigate through different pages and upload a picture for their profile page
* [ ] Tinder profile picture swipe along with like / dislike buttons. 

If given more time, the following features would be implemented: 
* [ ] chat feature enabled for matched profiles
* [ ] User's liked and/or matched profiles appear below their profile page

Website Walkthrough: https://swipet.netlify.app/
<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

* index.js is the main server file using Express.js
* routes show the paths dealing with http requests from the frontend using Express Router
    - bcryptjs used for password hashing 
* models defines user info and connects the SQL database to the backend
* middleware defines the JWT for authorizations. 



