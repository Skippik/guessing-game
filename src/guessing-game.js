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
        this.middle = Math.ceil ((this.min + this.max) / 2);
        return this.arr[this.middle];
    }

    lower() {
        return this.max = this.middle;
    }

    greater() {
        return this.min = this.middle;
    }
}

module.exports = GuessingGame;
