function prikaziFormu() {
  document.getElementById("formaOglasa").style.display = "block";
}

function dodajOglas() {
  const naziv = document.getElementById("naziv").value.trim();
  const kategorija = document.getElementById("kategorija").value;
  const cijena = document.getElementById("cijena").value.trim();
  const slika = document.getElementById("slika").value.trim();

  if (naziv === "" || cijena === "" || slika === "") {
    alert("Popuni sva polja: naziv, cijena i slika.");
    return;
  }

  const noviOglas = document.createElement("div");
  noviOglas.className = `oglas ${kategorija}`;

  noviOglas.innerHTML = `
    <img src="${slika}" alt="${naziv}" />
    <h3>${naziv}</h3>
    <p class="cijena">€${cijena}</p>
  `;

  document.getElementById("oglasi").appendChild(noviOglas);

  // Očisti formu i sakrij
  document.getElementById("naziv").value = "";
  document.getElementById("kategorija").value = "auta";
  document.getElementById("cijena").value = "";
  document.getElementById("slika").value = "";
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
