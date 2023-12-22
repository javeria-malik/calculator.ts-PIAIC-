# calculator.ts-PIAIC-.
Import the inquirer library: The code starts by importing the inquirer library, which is used to create interactive command-line prompts for user input.

Use inquirer.prompt() to Gather User Input: The inquirer.prompt() function is used to pres.ent a series of questions to the user. The responses provided by the user are collected in an answer object.

Define the Questions: The code defines a list of questions to ask the user. These questions include asking for two numbers (num1 and num2) and allowing the user to select an operation (operation) from a predefined list of choices.

Destructure the answer Object: The answer object is destructured to extract the values of num1, num2, and operation. This makes it easier to work with these values later in the code.

Perform Calculations Based on the Selected Operation: A switch statement is used to check the value of the operation variable. Depending on the selected operation, such as addition, subtraction, multiplication, division, exponentiation, or modulus, the code performs the corresponding calculation.

Display the Result: The result of the calculation is displayed to the user. If the selected operation is not recognized, the code prints "invalid operation" to the console.





