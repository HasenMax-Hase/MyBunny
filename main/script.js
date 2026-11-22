const bilder = {
    hund: "../bilder/hund.png",
    katze: "../bilder/katze.webp",
    hamster: "../bilder/hamster.png",
    pferd: "../bilder/pferd.png",
    fuchs: "../bilder/fuchs.webp",
    panda: "../bilder/panda.png",
    waschbaer: "../bilder/waschbaer.png",
    frettchen: "../bilder/frettchen.webp",
    bunny: "../bilder/bunny.webp",
    reh: "../bilder/reh.png"
};
const tier = localStorage.getItem("tier") || "hund";
document.getElementById("tier_id").src = bilder[tier];
let liebe = Number(localStorage.getItem("liebe")) || 0;
let multi = Number(localStorage.getItem("multi")) || 1;
document.getElementById("liebe_wert_id").textContent = liebe;

function liebe_wert() {
    liebe = liebe + 1 * multi;
    localStorage.setItem("liebe", liebe);
    document.getElementById("liebe_wert_id").textContent = liebe;
}
function go_shop() {
    location.href = "../shop/shop.html";
}

function go_menue() {
    location.href = "../index.html";
}