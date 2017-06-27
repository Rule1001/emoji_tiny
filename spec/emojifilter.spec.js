const { expect } = require('chai');
const emojiFilter = require('../src/emojiFilter');

const emojis = [
    {
        title: '100',
        symbol: '💯',
        keywords: 'hundred points symbol symbol wow wow win win perfect perfect parties parties'
    },
    {
        title: '1234',
        symbol: '🔢',
        keywords: 'input symbol for numbers symbol'
    },
    {
        title: 'Grinning',
        symbol: '😀',
        keywords: 'grinning face happy smiley emotion emotion'
    },
    {
        title: 'Grimacing',
        symbol: '😬',
        keywords: 'grimacing face silly smiley emotion emotion selfie selfie'
    }
];

describe('emoji filter', function () {
    it('is a function', function () {
        expect(typeof emojiFilter).to.equal('function');
    });
    it('returns a new array at the correct length', function () {
        let result = emojiFilter(emojis, 'gri')
        expect(result).to.eql([{
            title: 'Grinning',
            symbol: '😀',
            keywords: 'grinning face happy smiley emotion emotion'
        },
        {
            title: 'Grimacing',
            symbol: '😬',
            keywords: 'grimacing face silly smiley emotion emotion selfie selfie'
        }]);

    });
});
