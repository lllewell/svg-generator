const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: "input",
            message: "Which 3 letters do you want in your log?",
            name: "text",
        },
        {
            type: "input",
            message: "What color do you want the text to be?",
            name: "textColor",
        },
        {
            type: "list",
            message: "Pick a shape for your logo",
            choices: ['circle', 'triangle', 'square'],
        }
    ])
    .then(response => console.log(response));
