#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// create classes of player and opponent
class Player {
    name;
    power = 100;
    constructor(name) {
        this.name = name;
    }
    powerDecrease() {
        let power = this.power - 25;
        this.power = power;
    }
    powerIncrease() {
        this.power = 100;
    }
}
class Opponent {
    name;
    power = 100;
    constructor(name) {
        this.name = name;
    }
    powerDecrease() {
        let power = this.power - 25;
        this.power = power;
    }
}
// get player name and selection of opponent
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter your Name :"
});
// console.log(player.userName)
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Enemy",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// console.log(opponent.select)
// gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
// console.log(p1)
do {
    if (opponent.select == "Skeleton") { }
    let ask = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Select your Option",
        choices: ["Attack", "Energy Drink", "Quit The Game!"]
    });
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.powerDecrease();
            console.log(chalk.bold.red(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.green(`${o1.name} Power is ${o1.power}`));
            if (p1.power <= 0) {
                console.log(chalk.bold.red.italic("You Lose! Better luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.powerDecrease();
            console.log(chalk.bold.green(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.red(`${o1.name}  Power is ${o1.power}`));
            if (o1.power <= 0) {
                console.log(chalk.bold.green.italic("You Win"));
                process.exit();
            }
        }
    }
    if (ask.option == "Energy Drink") {
        p1.powerIncrease();
        console.log(chalk.bold.yellow(`Taken Energy.... Your Life is ${p1.power}`));
    }
    if (ask.option == "Quit The Game!") {
        console.log(chalk.bold.red.italic("You Quit! Better luck Next Time"));
    }
    process.exit();
    if (opponent.select == "Assassin") { }
    ask = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Select your Option",
        choices: ["Attack", "Energy Drink", "Quit The Game!"]
    });
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.powerDecrease();
            console.log(chalk.bold.red(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.green(`${o1.name} Power is ${o1.power}`));
            if (p1.power <= 0) {
                console.log(chalk.bold.red.italic("You Lose! Better luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.powerDecrease();
            console.log(chalk.bold.green(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.red(`${o1.name}  Power is ${o1.power}`));
            if (o1.power <= 0) {
                console.log(chalk.bold.green.italic("You Win"));
                process.exit();
            }
        }
    }
    if (ask.option == "Energy Drink") {
        p1.powerIncrease();
        console.log(chalk.bold.yellow(`Taken Energy.... Your Life is ${p1.power}`));
    }
    if (ask.option == "Quit The Game!") {
        console.log(chalk.bold.red.italic("You Quit! Better luck Next Time"));
        process.exit();
    }
    if (opponent.select == "Zombie") { }
    ask = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Select your Option",
        choices: ["Attack", "Energy Drink", "Quit The Game!"]
    });
    if (ask.option == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.powerDecrease();
            console.log(chalk.bold.red(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.green(`${o1.name} Power is ${o1.power}`));
            if (p1.power <= 0) {
                console.log(chalk.bold.red.italic("You Lose! Better luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.powerDecrease();
            console.log(chalk.bold.green(`${p1.name}  !Your Health Power is ${p1.power}`));
            console.log(chalk.bold.red(`${o1.name}  Power is ${o1.power}`));
            if (o1.power <= 0) {
                console.log(chalk.bold.green.italic("You Win"));
                process.exit();
            }
        }
    }
    if (ask.option == "Energy Drink") {
        p1.powerIncrease();
        console.log(chalk.bold.yellow(`Taken Energy.... Your Life is ${p1.power}`));
    }
    if (ask.option == "Quit The Game!") {
        console.log(chalk.bold.red.italic("You Quit! Better luck Next Time"));
        process.exit();
    }
} while (true);
