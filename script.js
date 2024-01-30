const gameBoard = (() => {
    const gameArray = [['', '', ''],
                       ['', '', ''],
                       ['', '', '']]
    const playX = (pos) => {
        gameArray[pos[0]][pos[1]] = 'X'
    }
    const playO = (pos) => {
        gameArray[pos[0]][pos[1]] = 'O'
    }
    const clearBoard = () => {
        gameArray = [['', '', ''],
                     ['', '', ''],
                     ['', '', '']]
    }
    return {gameArray, playX, playO, clearBoard}
})()