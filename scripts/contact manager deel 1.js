let personen = [];

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.voornaam = document.getElementById("txtVoornaam").value.trim();

    persoon.familienaam = document.getElementById("txtFamilienaam").value.trim();

    persoon.geboorteDatum = new Date(document.getElementById("txtGeboorteDatum").value.trim());

    persoon.email = document.getElementById("txtEmail").value.trim();

    persoon.aantalKinderen = parseInt(document.getElementById("txtAantalKinderen").value.trim());
};

const vulUserInterfaceOpBasisVanPersoon = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;

    document.getElementById("txtFamilienaam").value = persoon.familienaam;

    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum.toISOString().substring(0, 10);

    document.getElementById("txtEmail").value = persoon.email;

    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
};

const updatePersoonInLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
};

const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();

    let elements = document.getElementsByClassName("invalid");
    if (elements.length === 0) {
        let persoon = {};
        if (lstPersonen.selectedIndex === -1) {
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon);
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
};

const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";

    lstPersonen.selectedIndex = -1;

    clearAllErrors();
};

const bewerkGeselecteerdePersoon = (e) => {
    let index = e.target.selectedIndex;
    let persoon = personen[index];
    vulUserInterfaceOpBasisVanPersoon(persoon);

    clearAllErrors();
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);
};

window.addEventListener("load", setup);