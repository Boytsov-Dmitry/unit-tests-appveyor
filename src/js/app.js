export class Character {
    constructor(name, health) {
        this.name = name,
        this.health = health
    };
};


export default function healthIndicator (character) {
    if(character.health > 50) {
       return "healthy"
    };

    if(character.health <= 50 && character.health >= 15) {
        return "wounded"
    };

    if(character.health < 15) {
        return "critical"
    };
};

