class GuessingGame {
    constructor() {
        this.arr = [];
    }

    setRange(min, max) {
        this.min = min;
        while(min <= max) {
            this.arr[min] = min;
            min++;
        }
        this.max = this.arr.length - 1;
    }

    guess() {
        this.mid = Math.ceil ((this.min + this.max) / 2);
        return this.arr[this.mid];
    }

    lower() {
        return this.max = this.mid;
    }

    greater() {
        return this.min = this.mid;
    }
}

module.exports = GuessingGame;
