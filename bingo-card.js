window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }
  else {
    alert("Your browser does not support this script.");
  }
}

function newCard() {
  for (var i = 0; i < 24; i++) {
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currentSquare = "square" + thisSquare;
  var colPlace = new Array(0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;

  // JavaScript array

  // var data = Array.prototype.map.call(document.querySelectorAll('#items tr'), function (tr) {
  //   return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
  //     return td.innerHTML;
  //   });
  // });

  var data = Array.prototype.map.call(document.querySelectorAll('#items tr'), function (tr) {
    return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
      return td.innerHTML;
    });
  });


  // Get the list container element
  let list =
    document.getElementById('myList');

  // Create the unordered list element
  //and set its inner HTML using map() and join()
  // let ul = `<ul>${data.map(data =>
  //   `<li>${data}</li>`).join('')}
  //                 </ul>`;

  let ul = `<ul>${data.map(data => data.map(x => `<li> ${x} </li>`).join('')
  ).join('')}
                  </ul>`;

  // Set the inner HTML of the list container
  list.innerHTML = ul;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++) {
    usedNums[i] = false;
  };

  newCard();
  return false;
}