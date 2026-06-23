function checkCharacter() {
    let ch = document.getElementById("charInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (ch.length !== 1 || !/[a-z]/.test(ch)) {
        result.innerHTML = "Please enter a valid alphabet.";
    }
    else if (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
    ) {
        result.innerHTML = ch + " is a Vowel.";
    }
    else {
        result.innerHTML = ch + " is a Consonant.";
    }
}