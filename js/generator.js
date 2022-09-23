function generatePassword() {
    const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '_'];
    let result = '';
    const num = symbols.length;
    const lengthPassw = 32;

    for (let i = 0; i < lengthPassw; i++) {
        result += symbols[Math.floor(Math.random() * num)];
    }

    document.querySelector('#passwd-copy').innerHTML = result;
}

document.addEventListener('DOMContentLoaded', generatePassword, false); // generate a password when page is reload

document.getElementById('btn-passwd').onclick = generatePassword; // generate a password using the button

function copyText() {
    let copyText = document.getElementById('passwd-copy').textContent;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Пароль скопирован")
        })
        .catch(err => {
            alert('Ошибка', err);
        });
}

document.getElementById('passwd-copy').onclick = copyText; // copying the password to the buffer
