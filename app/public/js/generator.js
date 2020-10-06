const passLength = () => {
    return document.querySelector('.set-pass-length').value
}

const generator = {
    state: {
        nums: {
            selector: 'set-nums',
            content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        },
        symbols: {
            selector: 'set-symbols',
            content: ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '?', '>', ':', ';'],
        },
        lowercaseLetters: {
            selector: 'set-lowercase-letters',
            content: ['a', 'b', 'c', 'd', 'i', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        },
        uppercaseLetters: {
            selector: 'set-uppercase-letters',
            content: ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        }
    },
    generatePass() {
        const out = document.querySelector('.out'),
            state = this.state
        let result = []

        for (let i in state) {
            state[i].isActive = checkingSettings(state[i].selector)

            if (state[i].isActive) result = result.concat(state[i].content)
        }

        result.sort(() => Math.random() - 0.5)

        out.innerHTML = ''
        for (let i = 0; i <= 6; i++) {
            let pass = '';

            for (let j = 0; j < passLength(); j++) {
                pass += result[randomInteger(0, result.length - 1)]
            }
            out.innerHTML += `<p> ${pass} </p>`
        }
    }
}

document.querySelector('.set-pass-length').addEventListener('input', () => {
    document.querySelector('.pass-length-val').textContent = `(${passLength()})`
})

document.querySelector('.generate').addEventListener('click', generator.generatePass.bind(generator))

generator.generatePass()

function checkingSettings(elem) {
    return document.querySelector(`.${elem}`).checked
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}




