/**
 * achievements.test.js
 * Tests functions in achievements.js.
 * 
 * @jest-environment jsdom
 */

const achievements = require('../public/javascripts/achievements.js');

// sets up html elements for each test, copied from visited.html
beforeEach(() => {
  var testDiv = document.createElement("div");
  testDiv.innerHTML =
      '<span title="Visited 1 Tree" id="tree-1" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 3 Trees" id="tree-3" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 5 Trees" id="tree-5" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 10 Trees" id="tree-10" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"' 
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 15 Trees" id="tree-15" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 20 Trees" id="tree-20" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 25 Trees" id="tree-25" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 50 Trees" id="tree-50" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 75 Trees" id="tree-75" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 100 Trees" id="tree-100" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 150 Trees" id="tree-150" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 200 Trees" id="tree-200" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 250 Trees" id="tree-250" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited 300 Trees" id="tree-300" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Visited all Trees" id="tree-all" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Gained 5 Achievements" id="achieve-5" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Gained 10 Achievements" id="achieve-10" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<span title="Gained all Achievements" id="achieve-all" style="display:none">'
    +   '<img id="achievement" src="https://www.freeiconspng.com/thumbs/leaf-icon/leaf-icon-24.png"'
    +     'width="75" height="75">'
    + '</span>'
    + '<p id="error-message" style="display:none">Oops, there appears to be a problem.</p>'
    + '<p id="no-visited-message" style="display:none">Start visiting trees to get achievements.</p>'
    + '<p id="login-message">Log in to view achievements.</p>';
  document.body.appendChild(testDiv);
});

// error handling tests
test('tries to count achievements from a non-array object', () => {
  achievements.displayAchievements("not an array");
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("error-message").style.display).toBe("block");
});


test('tries to count achievements from an empty array', () => {
  achievements.displayAchievements([]);
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("no-visited-message").style.display).toBe("block");
});

// functionality tests
test('array length = 1', () => {
  var test1 = [0];
  achievements.displayAchievements(test1)
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("tree-1").style.display).toBe("block");
  expect(document.getElementById("tree-3").style.display).toBe("none");
});

test('array length = 7', () => {
  var test2 = [0, 1, 2, 3, 4, 5, 6];
  achievements.displayAchievements(test2)
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("tree-5").style.display).toBe("block");
  expect(document.getElementById("tree-10").style.display).toBe("none");
});

test('5 achievements, array length = 15', () => {
  var test3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  achievements.displayAchievements(test3)
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("tree-15").style.display).toBe("block");
  expect(document.getElementById("achieve-5").style.display).toBe("block");
});


test('all achievements, array length = 318', () => {
  var test3 = [];
  for (let i = 0; i < 318; i++) test3.push(i);
  achievements.displayAchievements(test3)
  expect(document.getElementById("login-message").style.display).toBe("none");
  expect(document.getElementById("tree-1").style.display).toBe("block");
  expect(document.getElementById("tree-3").style.display).toBe("block");
  expect(document.getElementById("tree-5").style.display).toBe("block");
  expect(document.getElementById("tree-10").style.display).toBe("block");
  expect(document.getElementById("tree-15").style.display).toBe("block");
  expect(document.getElementById("tree-20").style.display).toBe("block");
  expect(document.getElementById("tree-25").style.display).toBe("block");
  expect(document.getElementById("tree-50").style.display).toBe("block");
  expect(document.getElementById("tree-75").style.display).toBe("block");
  expect(document.getElementById("tree-100").style.display).toBe("block");
  expect(document.getElementById("tree-150").style.display).toBe("block");
  expect(document.getElementById("tree-200").style.display).toBe("block");
  expect(document.getElementById("tree-250").style.display).toBe("block");
  expect(document.getElementById("tree-300").style.display).toBe("block");
  expect(document.getElementById("tree-all").style.display).toBe("block");
  expect(document.getElementById("achieve-5").style.display).toBe("block");
  expect(document.getElementById("achieve-10").style.display).toBe("block");
  expect(document.getElementById("achieve-all").style.display).toBe("block");
});
