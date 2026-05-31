const event = {

    name:"Music Fest",

    city:"Mumbai"
};

const {
    name,
    city
} = event;

console.log(name);
console.log(city);

const events = [
    "Music",
    "Sports"
];

const clone = [
    ...events
];

console.log(clone);