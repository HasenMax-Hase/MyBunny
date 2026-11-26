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
const click_sound = new Audio("../sound/button_sound.mp3");
const tier = localStorage.getItem("tier") || "hund";
document.getElementById("tier_id").src = bilder[tier];
let liebe = Number(localStorage.getItem("liebe")) || 0;
let multi = Number(localStorage.getItem("multi")) || 1;
document.getElementById("liebe_wert_id").textContent = liebe;

const start_title_music = new Audio("../sound/Main_backround.mp3");
start_title_music.play();
start_title_music.loop = true;
start_title_music.volume = 0.8;

function liebe_wert() {
    liebe = liebe + 1 * multi;
    localStorage.setItem("liebe", liebe);
    document.getElementById("liebe_wert_id").textContent = liebe;
    click_sound.currentTime = 0;
    click_sound.play();

}
function go_shop() {
    location.href = "../shop/shop.html";
}

function go_menue() {
    location.href = "../index.html";
}