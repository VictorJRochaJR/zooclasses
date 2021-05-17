export class Giraffe {
    constructor(
        name = "unknown",
        gender = "unknown",
        weight = 0,
        height = 0,
        spots = 0,
    ) {
        if (!name) { throw new Error("input giraffe name") }
        this.name = name;
        this.gender = gender;
        this.weight = weight + "LBS";
        this.height = height + "IN";
        this.spots = spots;
    }
}
