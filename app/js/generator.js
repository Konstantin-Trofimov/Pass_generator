
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr3 = ['a', 'b', 'c', 'd', 'i', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr4 = ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr5 = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', 
'~', '?', '<', '>', ':', ';'];

document.getElementById('set-1').oninput = function() {
    // console.log(this.value);
    document.getElementById('pass-length').innerHTML = this.value;
}

generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass() {

    let result = [];

    if (document.getElementById('set-2').checked) {
        result = result.concat(arr2);
    }
    if (document.getElementById('set-3').checked) {
        result = result.concat(arr3);
    }
    if (document.getElementById('set-4').checked) {
        result = result.concat(arr4);
    }
    if (document.getElementById('set-5').checked) {
        result = result.concat(arr5);
    }

    result.sort(compareRandom);
    console.log(result);

    document.getElementById('out').innerHTML = '';

    for (let j = 0; j <= 6; j++) {

        let pass = '';
        let passLength = document.getElementById('set-1').value;
    
        for (let i = 0; i < passLength; i++) {
    
            pass += result[randomInteger(0, result.length - 1)];
        }
    
        document.getElementById('out').innerHTML += '<p>' + pass + '</p>';
    }
}

function compareRandom() {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

