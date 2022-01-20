module.exports = function reverse(n) {
    let text = Math.abs(n).toString();
    let textRevers = "";
    let i = 1;
    while (i <= text.length) {
        textRevers = `${textRevers}${text.charAt(text.length - i)}`
        i++;
    }
    return +textRevers;
}
