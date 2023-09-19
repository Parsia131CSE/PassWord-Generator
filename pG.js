document.addEventListener("DOMContentLoaded", function () {
    const pwEl = document.getElementById("pw");
    const copyP = document.getElementById("copy");
    const ln = document.getElementById("pwln");
    const upCase = document.getElementById("pwUpC");
    const loCase = document.getElementById("pwLoC");
    const num = document.getElementById("pwNum");
    const symbol = document.getElementById("pwSym");
    const pwGen = document.querySelector(".generator");

    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    function getLoCase() {
        return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }

    function getUpCase() {
        return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }

    function getNums() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    function getSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function passwordGenerator() {
        const len = parseInt(ln.value) || 12;

        let password = "";

        if (upCase.checked) {
            password += getUpCase();
        }

        if (loCase.checked) {
            password += getLoCase();
        }

        if (num.checked) {
            password += getNums();
        }

        if (symbol.checked) {
            password += getSymbol();
        }

        for (let i = password.length; i < len; i++) {
            const x = generate();
            password += x;
        }

        pwEl.innerText = password;
    }

    function generate() {
        const pArr = [];
        if (upCase.checked) {
            pArr.push(getUpCase());
        }

        if (loCase.checked) {
            pArr.push(getLoCase());
        }

        if (num.checked) {
            pArr.push(getNums());
        }

        if (symbol.checked) {
            pArr.push(getSymbol());
        }

        if (pArr.length === 0) return "";

        return pArr[Math.floor(Math.random() * pArr.length)];
    }

    pwGen.addEventListener("click", passwordGenerator);

    copyP.addEventListener("click", () => {
        const textarea = document.createElement("textarea");
        const password = pwEl.innerText;

        if (!password) {
            return;
        }

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
        alert("Password copied to clipboard");
    });

    passwordGenerator();
});