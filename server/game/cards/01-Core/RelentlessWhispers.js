const Card = require('../../Card.js');

class RelentlessWhispers extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            },
            then: context => ({ // TODO: Fix this
                condition: () => context.target.location === 'discard',
            })
        })
    }
}

RelentlessWhispers.id = 'relentless-whispers'; // This is a guess at what the id might be - please check it!!!

module.exports = RelentlessWhispers;
