// import express 
const express = require("express"); 

// import the path module
const path = require("path");

const port = 8000;

// define app
const app = express(); 

// tell the express template engine is EJS
app.set("view engine", "ejs"); 

// set the directory for ejs files
app.set("views", path.join(__dirname, "views")); 

// use parsing the data
app.use(express.urlencoded());

// access the static files
app.use(express.static('assets'));


// contact list Array
var ContactList = [
    {
        name: 'Nilesh Patil',
        phone: '8789545631'
    },
    
    {
        name: 'manu Patil',
        phone: '2314569878'
    },

     {
        name: 'Dipak Patil',
        phone: '2315569878'
    }

]

// rendering the ejs home.ejs file
app.get("/", function (req, res) {
  return res.render("home", { 
    title: "My ContactList",
    contact_list: ContactList
 }); 
});

app.get("/practice", function (req, res) {
  return res.render("practice", { title: "Play With EJS" });
});

app.post('/create-contact', function(req, res){

    // ContactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    ContactList.push(req.body);

    return res.redirect('back');
})

// deleting the contact
app.get('/delete-contact/', function(req, res){

  console.log(req.query);
  // get the query from the url
  let phone = req.query.phone;

  let contactIndex = ContactList.findIndex(contact => contact.phone == phone);

  if (contactIndex != -1){
    ContactList.splice(contactIndex, 1);
  }

  return res.redirect('back')
})

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${err}`);
  }

  console.log(`my Express server is up and running on port: ${port}`);
});
