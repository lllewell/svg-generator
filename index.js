const inquirer = require('inquirer');
const fs = require('fs');

const templateSVG = (response) => {
    if (response.shape === 'circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="80" fill="${response.bgColor}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
        
        </svg>`
        } else if (response.shape === 'square') {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="115" height="100" x="10" y="10" rx="20" ry="20" fill="${response.bgColor}" />

  <text x="70" y="80" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  
</svg>`
        } else if (response.shape === 'triangle') {
            return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">

  <polygon points="0,100 200,100 100,0 0,100" fill="${response.bgColor}" />

  <text x="100" y="80" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

</svg>`
}}

inquirer
    .prompt([
        {
            type: "input",
            message: "Which 3 letters do you want in your logo? (text can be no longer than 3 letters)",
            name: "text",
            validate(value){
                return value.length <= 3;
            }
        },
        {
            type: "input",
            message: "What color do you want the text to be?",
            name: "textColor",
        },
        {
            type: "input",
            message: "What color do you want the background to be?",
            name: "bgColor",
        },
        {
            type: "list",
            message: "Pick a shape for your logo",
            name: "shape",
            choices: ['circle', 'triangle', 'square'],
        }
    ])
    .then((response) => {
        const result = templateSVG(response);
        fs.writeFileSync('logo.svg', result,
            console.log(`Generated logo.svg!`)
        );
    })

