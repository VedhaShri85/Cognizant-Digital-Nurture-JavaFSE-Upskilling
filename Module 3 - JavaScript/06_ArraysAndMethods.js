let events = [];

events.push(
    "Music Event"
);

events.push(
    "Workshop on Baking"
);

console.log(events);

let musicEvents =
events.filter(event =>
event.includes("Music")
);

console.log(musicEvents);

let cards =
events.map(event =>
`Event Card:
${event}`
);

console.log(cards);