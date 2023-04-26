const setup = () => {
    let geboortedatum = new Date(2001, 2, 1);
    let verschil = new Date() - geboortedatum;
    let dagen = verschil / 86400000;
    console.log(parseInt(dagen) + " dagen");
}
window.addEventListener("load", setup);