var fs = require("fs");
var inquirer = require("inquirer");

var basic = require("./BasicCard.js");
var cloze = require("./ClozeCard.js");
var count = 0;

//call the questions function as long as the count is below
// a specified number (for now, set to 5);

questions();        //first call here

function questions(){   //this is recursive.  Only needs one call.
    count ++;
    console.log("questions has been called");

    //ask the questions and score answers. Then call function again.


    if (count < 5){     //reset the # for how many questions
        console.log("The count is: "+count+'\n');
        questions();
    }

}