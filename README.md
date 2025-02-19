hi there are 2 apis 


add pookemon:-
url:- http://localhost:3200/api/users/
type:- post
sample payload:-

{
    "name":"pikachu",
    "image":"https://res.cloudinary.com/ddm2yqyjd/image/upload/v1739956063/pikachu_e3leew.jpg",
    "ability":"electric",
    "type":"electric",
    "damage":"6"
}

**Note:- here for image you have to paas url of image i've saved some random image in cloudinary for testing purpose**
get pokemon:-
url:- http://localhost:3200/api/users/:pokemon_name
type:- get
sample response payload:-



{"_id":"67b5a796044f3749e62f95be",
"name":"pikachu",
"image":"https://res.cloudinary.com/ddm2yqyjd/image/upload/v1739956063/pikachu_e3leew.jpg",
"ability":"electric",
"type":"electric",
"damage":"6"
}


database url:- mongodb+srv://vim:HUy42EbDUOJKvDFp@cluster0.lgxd6.mongodb.net/proshop?retryWrites=true&w=majority
**Note:- try connecting this in compass i've already added 5 pokemons for testing purpose**
