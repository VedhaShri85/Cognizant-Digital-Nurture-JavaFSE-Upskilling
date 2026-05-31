const user = {

    name:"Lulu",

    email:"lulu@mail.com"
};

setTimeout(() => {

fetch(
"https://jsonplaceholder.typicode.com/posts",

{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify(user)
}
)

.then(response =>
response.json())

.then(data =>
console.log(
"Success",
data
))

.catch(error =>
console.log(
"Failed",
error
));

},2000);