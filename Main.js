function encrypt(text, key) {
    let i = 0, j = 0;
    for (i = 0, j = 0; i < text.length; i++, j++) {
        text = text.substr(0, i) + 
               String.fromCharCode((text.charCodeAt(i) + key.charCodeAt(j)) % 26 + 65) + 
               text.substr(i + 1);
    }
    return text;
}
function decrypt(text, key) {
    let i = 0, j = 0;
    for (i = 0, j = 0; i < text.length; i++, j++) {
        text = text.substr(0, i) + 
               String.fromCharCode((text.charCodeAt(i) - key.charCodeAt(j) + 26) % 26 + 65) + 
               text.substr(i + 1);
    }
    return text;
}

let text = "HELLO WORLD";
let key = "KEY";

console.log("Encrypted text: " + encrypt(text, key));
console.log("Decrypted text: " + decrypt(encrypt(text, key), key));

