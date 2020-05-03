function letterCount(str, letter) {
    return str.split('').reduce((acc, item) => {
        if (item.toLowerCase() === letter.toLowerCase()) {
            acc ++;
        }
        return acc;
    }, 0);
}

letterCount('Maggy','g');
