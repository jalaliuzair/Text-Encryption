// Encryption/Decryption functions for AES, DES, and RSA
const algorithms = {
    aes: {
        encrypt: (text, key) => btoa(key + text),
        decrypt: (text, key) => atob(text).replace(key, "")
    },
    des: {
        encrypt: (text, key) => text.split("").reverse().join("") + key,
        decrypt: (text, key) => text.replace(key, "").split("").reverse().join("")
    },
    rsa: {
        encrypt: (text) => btoa(text), // Simulated RSA (no key needed)
        decrypt: (text) => atob(text)
    }
};

// Encrypt Text
function encrypt() {
    const algorithm = document.getElementById("algorithm").value;
    const text = document.getElementById("textInput").value;
    const key = document.getElementById("keyInput").value;
    let result = "";

    if (algorithm === "rsa") {
        result = algorithms.rsa.encrypt(text);
    } else {
        if (!key) {
            alert("Please enter a key for AES/DES encryption.");
            return;
        }
        result = algorithms[algorithm].encrypt(text, key);
    }

    document.getElementById("result").value = result;
}

// Decrypt Text
function decrypt() {
    const algorithm = document.getElementById("algorithm").value;
    const text = document.getElementById("textInput").value;
    const key = document.getElementById("keyInput").value;
    let result = "";

    if (algorithm === "rsa") {
        result = algorithms.rsa.decrypt(text);
    } else {
        if (!key) {
            alert("Please enter a key for AES/DES decryption.");
            return;
        }
        result = algorithms[algorithm].decrypt(text, key);
    }

    document.getElementById("result").value = result;
}
