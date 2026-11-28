const bunny_button_sound = new Audio("../sound/bunny.ogg")
const sheep_button_sound = new Audio("../sound/sheep.mp3")
const dog_button_sound = new Audio("../sound/dog.mp3")

function go_back_menue() {
    location.href = "../index.html";
}

function sound_hund() {
    dog_button_sound.currentTime = 0;
    dog_button_sound.play();
    dog_button_sound.volume = 0.5;
}

function sound_bunny() {
    bunny_button_sound.currentTime = 0;
    bunny_button_sound.play();
    bunny_button_sound.volume = 0.5;
}

function sound_sheep() {
    sheep_button_sound.currentTime = 0;
    sheep_button_sound.play();
    sheep_button_sound.volume = 0.5;
}