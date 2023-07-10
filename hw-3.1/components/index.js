import { renderGame } from "./gamePageComponents.js";



let level = {
    selectionLevel: "",
}
const levelSelectEl = document.querySelectorAll(".box_level");
for (const levelSelectEls of levelSelectEl) {
    levelSelectEls.addEventListener('click', () => {
        for (const levelSelectEls of levelSelectEl) {
                levelSelectEls.classList.remove("box_level_select")
        }
        levelSelectEls.classList.add("box_level_select");
        level.selectionLevel = levelSelectEls.dataset.index;
        })
}
const buttonStartGame = document.querySelector('.button_start');
buttonStartGame.addEventListener('click', () => {
    renderGame(level.selectionLevel);
})
