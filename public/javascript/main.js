var RESULT = '';
var ALLOWEDKEYS = [
  // 0 ~ 9
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
  // +, -, *, /, =, esc, enter, dot, backspace
  187, 189, 56, 191, 187, 27, 13, 190, 8
];

// Mouse click
$('td.cell').on('click', function(e) {
  var value = $(this).text();
  if (value !== '=') {
    storeCalculation(value);
  } else {
    calculateResult();
  }
});

// Keydown
$(document).keydown(function(e) {
  if(ALLOWEDKEYS.includes(e.keyCode)) {
    // Not pressed Enter
    if(e.keyCode !== 13) {
      storeCalculation(e.key);
    } else {
      // pressed Enter;
      calculateResult();
    }
  }
});

// Clear all
$('td.clear').on('click', function(e) {
  resetResult();
});
// Clear all on esc button 
$(document).keydown(function(e) {
  var value = e.keyCode;
  if (value === 27) {
    resetResult();
  }
});

function storeCalculation(value) {
  if (value == '<-' || value == 'Backspace') {
    // backspace => remove the last one
    RESULT = RESULT.toString().slice(0, -1);
    $('td#result').text(RESULT);
  } else {
    RESULT += value;
    $('td#result').text(RESULT);
  }
}

function calculateResult() {
  // Calculation is now finished
  // Display result
  $('td#result').text(eval(RESULT)); 
  // Reset RESULT
  RESULT = eval(RESULT);
}

function resetResult() {
  RESULT = '';
  $('td#result').text('0');
}
