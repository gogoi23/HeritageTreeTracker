var fs = require('fs');
test('test html exists', () => {
//Read the index.html file into a string
var html = fs.readFileSync('public/visited.html', 'utf8');
expect(html).toEqual(expect.anything()); //any non-null value is okay


});

test('jquery assets working', () => {
    const $ = require('jquery');
});

if(document.getElementById('visitedButton').checked) {
    expect(expectedData).toBe(null);
}

test ('temp', () => {
    expect(expectedData).not.toBe(null);
});