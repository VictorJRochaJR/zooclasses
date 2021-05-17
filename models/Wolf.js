export class Wolf {
    constructor(
        name = "unknown",
        weight = 0,
        gender = "unkown",
        height = 0,
        tailSize = 0,
        color = "unknown",

    ) {
        this.name = name
        this.weight = weight + "LBS"
        this.gender = gender
        this.height = height + "FT"
        this.tailSize = tailSize + "In"
        this.color = color
    }
}