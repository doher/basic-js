const NUMBER_OF_LETTERS = 26;
const CODE_OF_FIRST_LETTER = 65;
class VigenereCipheringMachine {
    constructor(isReverse) {
        this.isReverse = isReverse;
    }

    encrypt(plaintext, key) {
        plaintext = plaintext.toUpperCase();
        key = key.toUpperCase();

        let result = [];
        let j = 0;

        for (let i = 0; i < plaintext.length; i++) {

            if (!plaintext[i].match(/[A-Z]/)) {
                result.push(plaintext[i]);
                continue;
            }

            let plaintextCharCode = plaintext[i].charCodeAt();
            let keyCharCode = key[j].charCodeAt();

            j++;

            if (j >= key.length) {
                j = 0;
            }

            let encryptedLetter = String.fromCharCode((plaintextCharCode + keyCharCode) % NUMBER_OF_LETTERS + CODE_OF_FIRST_LETTER);

            result.push(encryptedLetter);
        }

        if (this.isReverse === false) {
            result.reverse();
        }

        return result.join('');
    }

    decrypt(ciphertext, key) {
        ciphertext = ciphertext.toUpperCase();
        key = key.toUpperCase();

        let result = [];
        let j = 0;

        for (let i = 0; i < ciphertext.length; i++) {

            if (!ciphertext[i].match(/[A-Z]/)) {
                result.push(ciphertext[i]);
                continue;
            }

            let ciphertextCharCode = ciphertext[i].charCodeAt();
            let keyCharCode = key[j].charCodeAt();

            j++;

            if (j >= key.length) {
                j = 0;
            }

            let decryptedLetter = String.fromCharCode((ciphertextCharCode + NUMBER_OF_LETTERS - keyCharCode) % NUMBER_OF_LETTERS + CODE_OF_FIRST_LETTER);

            result.push(decryptedLetter);
        }

        if (this.isReverse === false) {
            result.reverse();
        }

        return result.join('');
    }
}

module.exports = VigenereCipheringMachine;
