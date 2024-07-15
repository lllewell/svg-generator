class Shape {
    constructor(type, color = 'green', textColor = 'white', text) {
        if (logoName.length > 3) {
            throw new Error('Text must only contain 3 letters');
        }
        this.color = color;
        this.type = type;
        this.textColor = textColor;
        this.text = text;
        this.logoName = logoName;
    }  
    
    render() {
        if (this.type === 'circle') {
           return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
        } else if (this.type === 'square') {
            return `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">

  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>`
        }
    }
}

module.exports = Shape;