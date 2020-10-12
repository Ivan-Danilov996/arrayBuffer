import Character from './Character'

class Daemon extends Character {
    constructor(name) {
        super(name)
        this.type = 'Daemon'
        this.defence = 10;
    }

    get attack() {
        return this._attack
    }

    set attack(value) {
        switch(value) {
            case 1 : this._attack = 40 * 100 / 100;
            break
            case 2 : this._attack = 40 * 90 / 100;
            break
            case 3 : this._attack = 40 * 80 / 100;
            break
            case 4 : this._attack = 40 * 70 / 100;
            break
            case 5 : this._attack = 40 * 60 / 100;
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

export default Daemon 