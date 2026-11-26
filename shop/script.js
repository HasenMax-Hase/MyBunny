let liebe = Number(localStorage.getItem("liebe")) || 0;
let multi = Number(localStorage.getItem("multi")) || 1;
document.getElementById("liebe_wert_id").textContent = liebe;
const tiere = ["katze", "hamster", "pferd", "fuchs", "panda", "waschbaer", "frettchen", "bunny", "reh", "brief"];
const buy_sound = new Audio("../sound/buy_shop_sound.mp3");

const start_title_music = new Audio("../sound/shop_backround.mp3");
start_title_music.play();
start_title_music.loop = true;
start_title_music.volume = 0.2;

function zeige_gekauft(name) {
    document.getElementById("button_buy_" + name + "_id").disabled = true;
    document.getElementById("gekauft_" + name).style.display = "block";
}

function backgame() {
    location.href = "../main/game.html";
}

function preis_katze() {
    if (liebe >= 100 && multi == 1) {
        liebe -= 100;
        multi = 2;
        localStorage.setItem("liebe", liebe);
        localStorage.setItem("multi", multi);
        document.getElementById("liebe_wert_id").textContent = liebe;
        localStorage.setItem("gekauft_katze", "ja");
        document.getElementById("button_buy_katze_id").disabled = true;
        document.getElementById("gekauft_katze").style.display = "block";
        localStorage.setItem("tier", "katze");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_hamster() {
    if (liebe >= 500 && multi == 2) {
        liebe -= 500;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 10;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_hamster", "ja");
        document.getElementById("button_buy_hamster_id").disabled = true;
        document.getElementById("gekauft_hamster").style.display = "block";
        localStorage.setItem("tier", "hamster");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_pferd() {
    if (liebe >= 2000 && multi == 10) {
        liebe -= 2000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 20;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_pferd", "ja");
        document.getElementById("button_buy_pferd_id").disabled = true;
        document.getElementById("gekauft_pferd").style.display = "block";
        localStorage.setItem("tier", "pferd");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }    
}

function preis_fuchs() {
   if (liebe >= 5000 && multi == 20) {
        liebe -= 5000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 50;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_fuchs", "ja");
        document.getElementById("button_buy_fuchs_id").disabled = true;
        document.getElementById("gekauft_fuchs").style.display = "block";
        localStorage.setItem("tier", "fuchs");
        buy_sound.currentTime = 0;
        buy_sound.play();
    } 
}

function preis_panda() {
    if (liebe >= 10000 && multi == 50) {
        liebe -= 10000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 100;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_panda", "ja");
        document.getElementById("button_buy_panda_id").disabled = true;
        document.getElementById("gekauft_panda").style.display = "block";
        localStorage.setItem("tier", "panda");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_waschbaer() {
    if (liebe >= 25000 && multi == 100) {
        liebe -= 25000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 250;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_waschbaer", "ja");
        document.getElementById("button_buy_waschbaer_id").disabled = true;
        document.getElementById("gekauft_waschbaer").style.display = "block";
        localStorage.setItem("tier", "waschbaer");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_frettchen() {
    if (liebe >= 50000 && multi == 250) {
        liebe -= 50000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 500;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_frettchen", "ja");
        document.getElementById("button_buy_frettchen_id").disabled = true;
        document.getElementById("gekauft_frettchen").style.display = "block";
        localStorage.setItem("tier", "frettchen");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_bunny() {
    if (liebe >= 100000 && multi == 500) {
        liebe -= 100000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 1000;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_bunny", "ja");
        document.getElementById("button_buy_bunny_id").disabled = true;
        document.getElementById("gekauft_bunny").style.display = "block";
        localStorage.setItem("tier", "bunny");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_reh() {
    if (liebe >= 500000 && multi == 1000) {
        liebe -= 500000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        multi = 2500;
        localStorage.setItem("multi", multi);
        localStorage.setItem("gekauft_reh", "ja");
        document.getElementById("button_buy_reh_id").disabled = true;
        document.getElementById("gekauft_reh").style.display = "block";
        localStorage.setItem("tier", "reh");
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

function preis_brief() {
    if (liebe >= 1000000) {
        liebe -= 1000000;
        localStorage.setItem("liebe", liebe);
        document.getElementById("liebe_wert_id").textContent = liebe;
        localStorage.setItem("gekauft_brief", "ja");
        document.getElementById("button_buy_brief_id").disabled = true;
        document.getElementById("gekauft_brief").style.display = "block";
        location.href = "../brief/brief.html";
        buy_sound.currentTime = 0;
        buy_sound.play();
    }
}

for (const name of tiere) {
    if (localStorage.getItem("gekauft_" + name) === "ja") {
        zeige_gekauft(name);
    }
}