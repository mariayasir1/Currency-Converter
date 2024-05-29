#! /usr/bin/env node
import inquirer from "inquirer";
// import chalk from "chalk";
console.log("\n\tWelcome to Currency Converter By 'Maria Yasir'\n");
//define the list of currencies with their exchsnge rate
let exchangeRate = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency
    "JYP": 113, //Japenese (yen)
    "CAD": 1.3, //Canadian dollar
    "AUD": 1.65, //australian dollar
    "PKR": 280
};
let answer = await inquirer.prompt([
    {
        name: "currencyFrom",
        message: " Select the currency to convert from",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "tocurrency",
        message: " Select the currency to convert into",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
let fromAmount = exchangeRate[answer.currencyFrom];
let toAmount = exchangeRate[answer.tocurrency];
let amount = answer.amount;
//conversion formula
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//display the converted amount
console.log(chalk.bold.yellowBright(`converted amount = ${convertedAmount}`));
