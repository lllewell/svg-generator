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
            const circle = new Shape('circle', 'red');
            expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="red" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`);
        });
        it('renders a square', () => {
            const square = new Shape('square');
            expect(circle.render()).toBe(`<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">

  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
</svg>`);
        });
    });

    describe('Logo Name Length', () => {
        it('should throw an error when the logo name is more than 3 characters')
            const cb = () => new Shape('LMLL');
            const err = new Error('Logo name must only contain 3 letters');
            expect(cb).toThrow(err);
    })
});