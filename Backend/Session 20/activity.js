let friends = [];

function showFriends() {
    if(friends.length <= 0) {
        console.log("You have no friends yet.");
    } else {
        console.log("Your friends: " + friends);
    }
}

function addFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());
    friends.push(name.toUpperCase());
    console.log(name + " has been added to your friend list.");
}

function removeFriend(name) {
    let index = friends.indexOf(name.toUpperCase());
    if(index !== -1) {
        friends.splice(index, 1);
        console.log(name + " has been removed from your friend list.");
    } else {
        console.log(name + " is not in your friend list.");
    }
}



//Remove Specific friends -> using their name
function removeFriend(name) {
    let index = friends.indexOf(name.toUpperCase());
    if(index !== -1) {
        friends.splice(index, 1);
        console.log(name + " has been removed from your friend list.");
    } else {
        console.log(name + " is not in your friend list.");
    }
}

