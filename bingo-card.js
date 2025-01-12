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


  let bbb = [
    "Answer the phone",
    "Sell an entire outfit",
    "OFS an addon item",
    "Someone's birthday is this month",
    "Sold extreme/ultra item",
    "Won incentive",
    "Sell a coat",
    "Make a £200+ sale",
    "Sell 5+ items in one transaction",
    "Sell an umbrella on a rainy day",
    "OFS a shoe",
    "Cover a shift",
    "Put out the wet floor sign when raining",
    "Delivery was over 20 boxes",
    "Customer asks why other colour is more pricy",
    "Sell alternative to something we don't have",
    "Customer is thankful for advice",
    "Customer tries to use next month discount",
    "Customer wants an item on hold",
    "Choose doorbuster item",
    "Top Addons on the board",
    "Top Emails on the board",
    "Top ATV on the board",
    "Top IPC on the board",
    "Change an incorrect price sticker",
    "Sell an OFS in stock at CMR",
    "Clean mirrors 3x",
    "Sell a Neon Sheep item",
    "Find a requested item from the stockroom",
    "Sell the same item you're wearing on uniform",
    "Replen section from stockroom",
    "Sell an out of season item",
    "Save a sale with Web Price Match"
  ];

  do {
    newNum = colBasis + getNewNum() + 1;
  } while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;

  // JavaScript array

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

  bbb.sort(() => Math.random() - 0.5).slice(0, 20);

  const combine = data
    .flatMap(a => a
      .filter(x => x !== "Free"))
    .map((x, i) => [x, bbb[i]])

  console.log(combine)

  let ul = `<ul>${combine
    .map(x => `<li> ${x[0]} : ${x[1]} </li>`)
    .join('')}
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
