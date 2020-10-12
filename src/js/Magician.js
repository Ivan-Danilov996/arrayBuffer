import Character from './Character'

class Magician extends Character {
    constructor(name) {
        super(name)
        this.type = 'Magician'
        this.defence = 40;
    }

    get attack() {
        return this._attack
    }

    set attack(value) {
        switch(value) {
            case 1 : this._attack = 10 * 100 / 100;
            break
            case 2 : this._attack = 10 * 90 / 100;
            break
            case 3 : this._attack = 10 * 80 / 100;
            break
            case 4 : this._attack = 10 * 70 / 100;
            break
            case 5 : this._attack = 10 * 60 / 100;
            break
            default: this._attack = 0;
        }
        if (this._stoned && this._attack > 0) {
            this._attack = this._attack - Math.log2(value) * 5
            if (this.attack < 0) {
                this._attack = 0;
            }
        }
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }
}

export default Magician 