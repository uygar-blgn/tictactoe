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
    const hasWinner = () => {
        if(gameArray[0][0] == gameArray[0][1] == gameArray[0][2] != '') {
            return true
        }
        if(gameArray[1][0] == gameArray[1][1] == gameArray[1][2] != '') {
            return true
        }
        if(gameArray[2][0] == gameArray[2][1] == gameArray[2][2] != '') {
            return true
        }
        if(gameArray[0][0] == gameArray[1][0] == gameArray[2][0] != '') {
            return true
        }
        if(gameArray[0][1] == gameArray[1][1] == gameArray[2][1] != '') {
            return true
        }
        if(gameArray[0][2] == gameArray[1][2] == gameArray[2][2] != '') {
            return true
        }
        if(gameArray[0][0] == gameArray[1][1] == gameArray[2][2] != '') {
            return true
        }
        if(gameArray[0][2] == gameArray[1][1] == gameArray[2][0] != '') {
            return true
        }
    }
    return {gameArray, playX, playO, clearBoard}
})()

const boardInterface = (() => {
    const paintBoard = (gameBoard) => {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                const pos = '#p' + i + j
                const data = document.querySelector(pos)
                data.textContent = gameBoard.gameArray[i][j]
            }
        }
    }
    let round = 'X'
    const datas = document.querySelectorAll('td')
    datas.forEach((data) => {
        data.addEventListener('click', () => {
            if(gameBoard.hasWinner) {
                
            }
            else if(round == 'X' && data.textContent == '') {
                data.textContent = 'X'
                round = 'O'
                gameBoard.playX([data.id[2],data.id[3]])
            }
            else if(round == 'O' && data.textContent == '') {
                data.textContent = 'O'
                round = 'X'
                gameBoard.playO([data.id[2],data.id[3]])
            }
        })
    })
    return {paintBoard, round}
})()