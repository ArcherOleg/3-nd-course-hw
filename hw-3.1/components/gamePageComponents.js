


export function renderGame(level) {
    const appElement = document.getElementById('app');
    let mesageLevel
    switch (level) {
        case '1':
            mesageLevel = 'лёгкий'
            break;
            case '2':
                mesageLevel = 'средний'
            break;
            case '3':
                mesageLevel = 'сложный'
                break;
        default:
            break;
    }
    const appHtml = `
    <div class="box_game">
        <h1 class="box_text">Вы выбрали ${mesageLevel} уровень сложности</h1>
    </div>`
    appElement.innerHTML = appHtml;

}