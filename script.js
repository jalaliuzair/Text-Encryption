// Encryption and Decryption Functions

function encryptText() {
    const algorithm = document.getElementById("algorithm").value;
    const inputText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;

    if (!inputText) {
        alert("Please enter text to encrypt.");
        return;
    }

    if (algorithm === "RSA") {
        alert("RSA Encryption is not supported in this web-based version. Try a backend implementation!");
        return;
    }

    if (!encryptionKey) {
        alert("Please enter a key for AES/DES encryption.");
        return;
    }

    let result = "";

    if (algorithm === "AES") {
        result = btoa(encryptionKey + inputText);
    } else if (algorithm === "DES") {
        result = btoa(inputText.split("").reverse().join("") + encryptionKey);
    }

    document.getElementById("result").value = result;
}

function decryptText() {
    const algorithm = document.getElementById("algorithm").value;
    const encryptedText = document.getElementById("inputText").value;
    const encryptionKey = document.getElementById("encryptionKey").value;

    if (!encryptedText) {
        alert("Please enter text to decrypt.");
        return;
    }

    if (algorithm === "RSA") {
        alert("RSA Decryption is not supported in this web-based version. Try a backend implementation!");
        return;
    }

    if (!encryptionKey) {
        alert("Please enter a key for AES/DES decryption.");
        return;
    }

    let result = "";

    if (algorithm === "AES") {
        const decoded = atob(encryptedText);
        result = decoded.replace(encryptionKey, "");
    } else if (algorithm === "DES") {
        const decoded = atob(encryptedText);
        result = decoded.replace(encryptionKey, "").split("").reverse().join("");
    }

    document.getElementById("result").value = result;
}
