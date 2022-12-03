let text = document.querySelector('.text').textContent;
let startTime = Date.now();
let letter = text.split('');
let mistakes = 0;
let thisLetter = 0;
let allowed = true;
let seeText = document.querySelector('.text');
let seeButtons = document.querySelector('.buttons');
seeText.innerHTML = text.slice(thisLetter);

print();

document.addEventListener('keyup', (button) => {
    if (allowed == true) {
        resetStyles();
        print();
        let seeButton = document.getElementById(button.key);
        seeButton.classList.add('click');

        if (button.key == letter[thisLetter]) {
            thisLetter++;
            print();

            if (text.slice(thisLetter) == false) {
                seeText.innerHTML = "";
            }
        } else {
            mistakes++;
        }
        document.getElementById(text[thisLetter])?.classList.add("active");
    }
});

function resetStyles() {
    let buttonList = document.querySelectorAll('.button');
    buttonList.forEach((key) => {
        key.classList.remove('active');
        key.classList.remove('click');
    })
}

function print() {
    let result = text.slice(thisLetter);
    let printed = text.slice((thisLetter >= 10) ? (thisLetter - 10) : 0, thisLetter);
    if (result.length >= 20) {
        result = result.slice(0, 20);
        result += "...";
    }

    if (printed.at(-1) == " ") {
        printed = printed.slice(0, printed.length - 1) + "&#160;";
    }
    if (result[0] == " ") {
        result = "&#160;" + result.slice(1);
    }

    if (result == false) {
        document.querySelector('.statistic').style.display = 'flex';
        let endTime = Date.now();
        let time = ((endTime - startTime) / 1000).toFixed(2);
        allowed = false;
        document.querySelector('.statistic__mistakes').innerHTML = `Ошибки: ${mistakes}`;
        document.querySelector('.statistic__time').innerHTML = `Время: ${time} секунд`;
    }

    if (text.slice(thisLetter) == false) {
        seeText.innerHTML = "";
    } else {
        seeText.innerHTML = `<div class="printed">${printed}</div>` + result;
    }
}