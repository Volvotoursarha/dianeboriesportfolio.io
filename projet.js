
var divQuiJeSuis = document.getElementById("quijesuis");
var displayQuiJeSuis = false; // initialisé à false pour indiquer que la div est cachée au départ

function hideShowQuiJeSuis() {
  if (displayQuiJeSuis) { // si displayQuiJeSuis est true, cacher la div
    divQuiJeSuis.style.display = "none";
    displayQuiJeSuis = false; // met à jour l'état de displayQuiJeSuis
  } else { // si displayQuiJeSuis est false, montrer la div
    divQuiJeSuis.style.display = "block";
    displayQuiJeSuis = true; // met à jour l'état de displayQuiJeSuis
  }
}

var divContactPage = document.getElementById("contactpage");
var displayContactPage = false; // initialisé à false pour indiquer que la div est cachée au départ

function hideShowContactPage() {
  if (displayContactPage) { // si displayContactPage est true, cacher la div
    divContactPage.style.display = "none";
    displayContactPage = false; // met à jour l'état de displayContactPage
  } else { // si displayContactPage est false, montrer la div
    divContactPage.style.display = "block";
    displayContactPage = true; // met à jour l'état de displayContactPage
  }
}


