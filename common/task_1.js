// Фильтрация строки

const string = "Привет! Как дела?";

const vovels = ['а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];

function getVowels(string) {
    stringToLowerCase = string.toLowerCase();
    
    let vowelsOfString = "";

    for (let i=0; i < stringToLowerCase.length; i++) {
        const vovel = stringToLowerCase[i];

        if (vovels.includes(vovel)) {
            vowelsOfString += vovel;
        }
    }

    return vowelsOfString;
}

console.log(getVowels(string));