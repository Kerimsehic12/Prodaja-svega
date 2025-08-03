function prikaziFormu() {
  document.getElementById("formaOglasa").style.display = "block";
}

function dodajOglas() {
  const naziv = document.getElementById("naziv").value.trim();
  const kategorija = document.getElementById("kategorija").value;

  if (naziv === "") {
    alert("Unesi naziv oglasa.");
    return;
  }

  const noviOglas = document.createElement("div");
  noviOglas.className = `oglas ${kategorija}`;
  noviOglas.innerText = naziv;

  document.getElementById("oglasi").appendChild(noviOglas);

  // Očisti formu i sakrij
  document.getElementById("naziv").value = "";
  document.getElementById("kategorija").value = "auta";
  document.getElementById("formaOglasa").style.display = "none";
}

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
