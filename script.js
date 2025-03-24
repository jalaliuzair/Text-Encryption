// Encrypt Text Function
function encryptText() {
    const algorithm = document.getElementById("algorithm").value;
    const inputText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;

    if (!inputText) {
        alert("Please enter text to encrypt.");
        return;
    }
    if (!encryptionKey) {
        alert("Please enter an encryption key.");
        return;
    }

    let result = "";
    try {
        if (algorithm === "AES") {
            result = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
        } else if (algorithm === "DES") {
            result = CryptoJS.DES.encrypt(inputText, encryptionKey).toString();
        } else if (algorithm === "RSA") {
            alert("RSA requires a backend implementation and cannot be done directly in the browser!");
            return;
        }
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Encryption failed. Please check your inputs.");
    }
}

// Decrypt Text Function
function decryptText() {
    const algorithm = document.getElementById("algorithm").value;
    const encryptedText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;

    if (!encryptedText) {
        alert("Please enter text to decrypt.");
        return;
    }
    if (!encryptionKey) {
        alert("Please enter an encryption key.");
        return;
    }

    let result = "";
    try {
        if (algorithm === "AES") {
            const bytes = CryptoJS.AES.decrypt(encryptedText, encryptionKey);
            result = bytes.toString(CryptoJS.enc.Utf8);
        } else if (algorithm === "DES") {
            const bytes = CryptoJS.DES.decrypt(encryptedText, encryptionKey);
            result = bytes.toString(CryptoJS.enc.Utf8);
        } else if (algorithm === "RSA") {
            alert("RSA requires a backend implementation and cannot be done directly in the browser!");
            return;
        }
        if (!result) {
            alert("Decryption failed. Please check your key and encrypted text.");
        } else {
            document.getElementById("result").value = result;
        }
    } catch (error) {
        alert("Decryption failed. Please check your inputs.");
    }
}
