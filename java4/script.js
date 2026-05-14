function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("привіт"));


function checkSpam(str) {
    return str.toLowerCase().includes("росі") ||
           str.toLowerCase().includes("xxx");
}

console.log(checkSpam("Купити XXX"));


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }

    return str;
}

console.log(truncate("Всім привіт!", 8));


function strikeStr(str) {
    let words = str.split(" ");

    if (words.length > 3) {
        return words.join("\n");
    }

    return str;
}

console.log(strikeStr("Я люблю JavaScript дуже сильно"));