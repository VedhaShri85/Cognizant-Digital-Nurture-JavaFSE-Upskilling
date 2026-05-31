const events = [
    { name: "Music Fest", seats: 10 },
    { name: "Workshop", seats: 0 }
];

events.forEach(event => {

    if (event.seats > 0) {
        console.log(event.name);
    }
});

try {

    let seats = 0;

    if (seats <= 0) {
        throw "No Seats Available";
    }

}
catch(error) {

    console.log(error);
}