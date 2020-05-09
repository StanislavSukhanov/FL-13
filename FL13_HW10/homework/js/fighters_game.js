/* Your code goes here */
function Fighter(obj) {
    this.name = obj.name;
    this.damage = obj.damage;
    this.strength = obj.strength;
    this.agility = obj.agility;
    this.hp = obj.hp;
    this.currentHp = obj.hp;
    this.wins = 0;
    this.losses = 0;

    return {
        getName: () => this.name,
        getDamage: () => this.damage,
        getStrength: () => this.strength,
        getAgility: () => this.agility,
        getHp: () => this.currentHp,
        attack: (fighter) => {
            const percents = 100;
            const probability = percents - (fighter.getStrength() + fighter.getAgility());
            const success = Math.random() < probability / percents;
            if (success) {
                fighter.dealDamage(this.damage);
                console.log(`${this.name} makes ${this.damage} damage to ${fighter.getName()}`)
            } else {
                console.log(`${this.name} attack missed`)
            }
        },
        logCombatHistory: () => console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`),
        heal: (hp = 0) => {
            if (hp + this.currentHp > this.hp) {
               this.currentHp = this.hp;
            } else {
                this.currentHp += hp;
            }
        },
        dealDamage: (damage = 0) => {
            if (this.currentHp - damage < 0) {
                this.currentHp = 0;
            } else {
                this.currentHp -= damage;
            }
        },
        addWin: () => this.wins++,
        addLoss: () => this.losses++
    }
}

function battle(firstFighter, secondFighter) {
    const zeroHp = 0;
    let game = true;
    let firstFighterAttacks = true;
    if ( firstFighter.getHp() === zeroHp ) {
        console.log(`Fighter ${firstFighter.getName()} is dead and can't fight.`);
        return 0;
    }
    if ( secondFighter.getHp() === zeroHp ) {
        console.log(`Fighter ${secondFighter.getName()} is dead and can't fight.`);
        return 0;
    }
    while (game) {
        firstFighterAttacks ? handleAttack(firstFighter, secondFighter) : handleAttack(secondFighter, firstFighter);
    }
    return 1;
    // a helper function to switch between fighters and make a code a bit shorter;
    function handleAttack(f1, f2) {
        f1.attack(f2);
        if ( f2.getHp() === 0 ) {
            f1.addWin();
            f2.addLoss();
            console.log(`Fighter ${f1.getName()} won`);
            game = false; // exiting the loop
        }
        firstFighterAttacks = !firstFighterAttacks;
    }
}
