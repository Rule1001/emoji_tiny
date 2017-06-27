

function emojiFilter(emojis, str) {
    str.toLowerCase()
    return emojis.filter(function (item) {
        var finder = item.keywords
        return eval('/' + str + '/').test(finder)
    });
}


module.exports = emojiFilter;