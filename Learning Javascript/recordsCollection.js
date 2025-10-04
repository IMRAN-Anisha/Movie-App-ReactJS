//records collection 
let records = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"       
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the original records object for tests
let originalRecords = JSON.parse(JSON.stringify(records));

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete records[id][prop];
    } else if (prop === "tracks") {
        records[id][prop] = records[id][prop] || [];
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}
//How this works:
/*********************************** 
If value is an empty string, delete the given prop property from the album.
If prop isn't "tracks" and value isn't an empty string, update or set the value for that record album's prop.
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't an empty string, push the value onto the end of the album's existing tracks array.
************************************/

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "Livin' on a Prayer");
updateRecords(1245, "album", "Riptide");

// Only change code above this line

console.log(records);
module.exports = { updateRecords, records, originalRecords };           
