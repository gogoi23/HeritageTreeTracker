/**
 * achievements.js
 * Function to handle achievements.
 * NOTE: I have no idea how to test this.
 * 
 * Author: Dylan Kramis
 * Version: 3/29/2020
 */

exports.version = '0.0.1';

/**
 * displayAchievements
 * Displays a user's achievements
 * 
 * @param {any} visitedList
 */
exports.displayAchievements = function (visitedList) {

  // if this function is called, it is assumed that the user is logged in
  document.getElementById("login-message").style.display = 'none';

  // check if object given is an array
  if (visitedList instanceof Array) {

    // check if array has a length greater than zero
    if (visitedList.length > 0) {

      // achievement count for count-based achievements
      var count = 0;

      // adds achievements based on list length
      x = visitedList.length;
      switch (true) {
        case (x == 318):
          document.getElementById('tree-all').style.display = 'block';
          count++;
        case (x >= 300):
          document.getElementById('tree-300').style.display = 'block';
          count++;
        case (x >= 250):
          document.getElementById('tree-250').style.display = 'block';
          count++;
        case (x >= 200):
          document.getElementById('tree-200').style.display = 'block';
          count++;
        case (x >= 150):
          document.getElementById('tree-150').style.display = 'block';
          count++;
        case (x >= 100):
          document.getElementById('tree-100').style.display = 'block';
          count++;
        case (x >= 75):
          document.getElementById('tree-75').style.display = 'block';
          count++;
        case (x >= 50):
          document.getElementById('tree-50').style.display = 'block';
          count++;
        case (x >= 25):
          document.getElementById('tree-25').style.display = 'block';
          count++;
        case (x >= 20):
          document.getElementById('tree-20').style.display = 'block';
          count++;
        case (x >= 15):
          document.getElementById('tree-15').style.display = 'block';
          count++;
        case (x >= 10):
          document.getElementById('tree-10').style.display = 'block';
          count++;
        case (x >= 5):
          document.getElementById('tree-5').style.display = 'block';
          count++;
        case (x >= 3):
          document.getElementById('tree-3').style.display = 'block';
          count++;
        case (x >= 1):
          document.getElementById('tree-1').style.display = 'block';
          count++;
      }

      // adds achievements for getting certain numbers of achievements
      if (count >= 5) {
        document.getElementById('achieve-5').style.display = 'block';
        count++;
      }
      if (count >= 10) {
        document.getElementById('achieve-10').style.display = 'block';
        count++;
      }
      if (count >= 17) {
        document.getElementById('achieve-all').style.display = 'block';
        count++;
      }

    } else {

      // show message if no trees in list
      document.getElementById('no-visited-message').style.display = 'block';

    }
  } else {

    // show error message, ideally this shouldn't happen
    document.getElementById('error-message').style.display = 'block';

  }
};