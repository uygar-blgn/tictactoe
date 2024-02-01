const gameBoard = (() => {
    // variables
    let gameArray = [['', '', ''],
                       ['', '', ''],
                       ['', '', '']]


    // functions
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

    const winner = () => {
        if(gameArray[0][0] == gameArray[0][1] && gameArray[0][1] == gameArray[0][2] && gameArray[0][2] != '') {
            if(gameArray[0][2] == 'X') {
                return 'X'
            }
            else if(gameArray[0][2] == 'O') {
                return 'O'
            }
        }

        if(gameArray[1][0] == gameArray[1][1] && gameArray[1][1] == gameArray[1][2] && gameArray[1][2] != '') {
            if(gameArray[1][2] == 'X') {
                return 'X'
            }
            else if(gameArray[1][2] == 'O') {
                return 'O'
            }
        }

        if(gameArray[2][0] == gameArray[2][1] && gameArray[2][1] == gameArray[2][2] && gameArray[2][2] != '') {
            if(gameArray[2][2] == 'X') {
                return 'X'
            }
            else if(gameArray[2][2] == 'O') {
                return 'O'
            }
        }

        if(gameArray[0][0] == gameArray[1][0] && gameArray[1][0] == gameArray[2][0] && gameArray[2][0] != '') {
            if(gameArray[2][0] == 'X') {
                return 'X'
            }
            else if(gameArray[2][0] == 'O') {
                return 'O'
            }
        }

        if(gameArray[0][1] == gameArray[1][1] && gameArray[1][1] == gameArray[2][1] && gameArray[2][1] != '') {
            if(gameArray[2][1] == 'X') {
                return 'X'
            }
            else if(gameArray[2][1] == 'O') {
                return 'O'
            }
        }

        if(gameArray[0][2] == gameArray[1][2] && gameArray[1][2] == gameArray[2][2] && gameArray[2][2] != '') {
            if(gameArray[2][2] == 'X') {
                return 'X'
            }
            else if(gameArray[2][2] == 'O') {
                return 'O'
            }
        }

        if(gameArray[0][0] == gameArray[1][1] && gameArray[1][1] == gameArray[2][2] && gameArray[2][2] != '') {
            if(gameArray[2][2] == 'X') {
                return 'X'
            }
            else if(gameArray[2][2] == 'O') {
                return 'O'
            }
        }

        if(gameArray[0][2] == gameArray[1][1] && gameArray[1][1] == gameArray[2][0] && gameArray[2][0] != '') {
            if(gameArray[2][0] == 'X') {
                return 'X'
            }
            else if(gameArray[2][0] == 'O') {
                return 'O'
            }
        }

        return false
    }

    return {gameArray, playX, playO, clearBoard, winner}
})()

const boardInterface = (() => {
    // variables
    let round = 'X'

    let end = ''


    // functions
    const paintBoard = (gameBoard) => {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                const pos = '#p' + i + j

                const data = document.querySelector(pos)

                data.textContent = gameBoard.gameArray[i][j]
            }
        }
    }

    const datas = document.querySelectorAll('td')

    datas.forEach((data) => {
        data.addEventListener('click', () => {
            if(round == 'X' && data.textContent == '' && !end) {
                data.textContent = 'X'

                round = 'O'

                gameBoard.playX([data.id[1],data.id[2]])
            }
            else if(round == 'O' && data.textContent == '' && !end) {
                data.textContent = 'O'

                round = 'X'

                gameBoard.playO([data.id[1],data.id[2]])
            }

            if(gameBoard.winner() && !end) {
                end = gameBoard.winner()
            }

            const message = document.querySelector('#message')

            if(end != '') {
                message.textContent = end + ' has won!'
            }
            else {
                message.textContent = round + '\'s turn'
            }
        })
    })

    const restart = document.querySelector('#restart')

    restart.addEventListener('click', () => {
        round = 'X'

        end = ''

        gameBoard.clearBoard()

        datas.forEach((data) => {
            data.textContent = ''
        })

        const message = document.querySelector('#message')

        message.textContent = 'X\'s turn'
    })

    return {paintBoard, round}
})()