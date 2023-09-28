import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "What's your num1"
    },
    {
        name: "num2",
        type: "number",
        message: "What's your num2"
    },
    {
        name: "operation",
        type: "list",
        message: "What's your choice",
        choices: ["*", "+", "-", "/", "**", "%"]
    }]);
const { num1, num2, operation } = answer;
let result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "//":
        result = num1 % num2;
        break;
    case "**":
        result = num1 ** num2;
        break;
    default:
        console.log("invalid operation");
}
console.log("your result is", result);
