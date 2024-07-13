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
    });
    // describe('Square', () => {
    //     it('renders a square', () => {
    //         const shape = new Shape();
    //         expect().toBe();
    //     });
    // });
    // describe('Triangle', () => {
    //     it('renders a triangle', () => {
    //         const shape = new Shape();
    //         expect().toBe();

    //     });
    // });
});