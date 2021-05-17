export class Lions {
    constructor(
        name = 'unknown',
        gender = 'unknown',
        weight = 0,
        maneSize = 0,
        height = 0,
    ) {
        if (!name) { throw new Error("You must enter a lion name") }
        this.name = name;
        this.gender = gender;
        this.weight = weight + "LBS";
        this.maneSize = maneSize + "IN";
        this.height = height + "FT";
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}


