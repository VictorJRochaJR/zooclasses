export class Eagle {
    constructor(
        name = "unknown",
        gender = "unkown",
        weight = 0,
        size = 0,
        wingspan = 0,
        feathers = 0,
    ) {
        this.name = name
        this.gender = gender
        this.weight = weight + "LBS"
        this.size = size + "FT"
        this.wingspan = wingspan + "IN"
        this.feathers = feathers

    }
}