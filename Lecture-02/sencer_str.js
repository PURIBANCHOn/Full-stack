function censrWord(str, word) {
    const regex = new RegExp(word, 'gi');
    const censorredText = str.replace(regex, '****');
    return censorredText;
}

const originalPost = "JavaScript is fun, but sometimes JavaScript";
const cleanedPost = censrWord(originalPost, "JavaScript");

console.log(cleanedPost);