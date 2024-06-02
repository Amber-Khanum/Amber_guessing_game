#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number from 1 to 10: ",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congrats! You guessed it right.");
} else {
  console.log("Sorry! You guessed it wrong.");
};
