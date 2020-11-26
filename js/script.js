// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


var randomNumbers = [];
for (var i = 0; i < 5; i++) {
  var numbers = Math.floor(Math.random() * 100) + 1;
  if(randomNumbers.indexOf(numbers) === -1) randomNumbers.push(numbers);
}

alert("Memorizza questi numeri " + randomNumbers)
