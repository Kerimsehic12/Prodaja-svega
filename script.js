function filtriraj(kategorija) {
  const oglasi = document.querySelectorAll('.oglas');
  oglasi.forEach(oglas => {
    if (kategorija === 'sve' || oglas.classList.contains(kategorija)) {
      oglas.style.display = 'block';
    } else {
      oglas.style.display = 'none';
    }
  });
}

function dodajOglas() {
  alert("Dodavanje oglasa uskoro dostupno!");
}
