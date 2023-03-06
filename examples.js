const lightswitch = {
    switchState: "on",
    flipSwitch() {
        if (this.switchState === "on") {
            this.switchState = "off";
        } else {
            this.switchState = "on";
        }
    }
};

//-or-

lightswitch.flipswitch = function() {
    (this.switchState === "on") ? this.switchState = "off' : this.switchState = "on";
}
//this is a shortcut for an "if" statement called a Ternary Operator

//Another example:

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// canVote(16)
//false
//canVote (52)
//true

//here is another way to write it:

function canVote(age) {
    return (age >=18) ? true : false;
}

// canVote(16)
//false
//canVote (52)
//true
