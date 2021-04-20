function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    
    const words = {
        encode: {
            text: textAreas[0],
            button: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            text: textAreas[1],
            button: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    document.getElementById('main').addEventListener('click', (ev) => {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const type = ev.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = words[type].text.value
                        .split('').map(words[type].func).join('');

        words.encode.text.value = '';
        words.decode.text.value = message;
        console.log(message);
    })
}