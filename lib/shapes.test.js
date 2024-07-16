const Shape = require('./shapes.js')

describe('Shape', () => {
    describe('Circle', () => {
        it('renders a circle', () => {
            const circle = new Shape('circle');
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`);
        });
        it('renders a red circle', () => {
            const circle = new Shape('circle', 'SVG', 'red');
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="red" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`);
        });
        it('renders a square', () => {
            const square = new Shape('square');
            expect(square.render()).toBe(`<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">

  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
</svg>`);
        });
        it('renders a triangle', () => {
            const triangle = new Shape('triangle');
            expect(triangle.render()).toBe(`<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">

  <polygon points="100,10 150,190 50,190" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`)
        })
    });

    describe('Text length', () => {
        it('should throw an error when the text length is more than 3 characters', () => {
            expect(() => new Shape('circle', 'LMLL')).toThrow(Error);
        })
    })
});