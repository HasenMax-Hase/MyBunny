let liebe = Number(localStorage.getItem("liebe")) || 0;
let multi = Number(localStorage.getItem("multi")) || 0;
liebe = 0;
multi = 1;
localStorage.setItem("tier", "hund");
localStorage.setItem("liebe", liebe);
localStorage.setItem("multi", multi);
localStorage.setItem("gekauft_katze", "nein");
localStorage.setItem("gekauft_hamster", "nein");
localStorage.setItem("gekauft_pferd", "nein");
localStorage.setItem("gekauft_fuchs", "nein");
localStorage.setItem("gekauft_panda", "nein");
localStorage.setItem("gekauft_waschbaer", "nein");
localStorage.setItem("gekauft_frettchen", "nein");
localStorage.setItem("gekauft_bunny", "nein");
localStorage.setItem("gekauft_reh", "nein");
localStorage.setItem("gekauft_brief", "nein");

const start_title_music = new Audio("sound/titel_backround.mp3");
start_title_music.play();
start_title_music.loop = true;
start_title_music.volume = 0.1;

function startgame() {
    location.href = "main/game.html";
}