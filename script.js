function encryptText() {
    const text = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    if (!text || !key) {
        alert('Please enter both text and key!');
        return;
    }
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    const encryptedText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    if (!encryptedText || !key) {
        alert('Please enter both encrypted text and key!');
        return;
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error();
        document.getElementById('outputText').value = decrypted;
    } catch (error) {
        alert('Decryption failed! Check your key and encrypted text.');
    }
}

