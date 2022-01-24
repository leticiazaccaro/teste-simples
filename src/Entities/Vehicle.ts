export default class Vehicle {
    #id: string
    #vehicle: string
    #brand: string
    #plate: string
    #consumption: string
    #type: string
    #volume: string
    #weight: string
    #size: string
    #start: string
    #end: string
    #status: string

    constructor(
        vehicle: string,
        brand: string,
        plate: string,
        consumption: string,
        type: string,
        volume: string,
        weight: string,
        size: string,
        start: string,
        end: string,
        status: string,
        id: string = null
    ) {
        this.#vehicle = vehicle
        this.#brand = brand
        this.#plate = plate
        this.#consumption = consumption
        this.#type = type
        this.#volume = volume
        this.#weight = weight
        this.#size = size
        this.#start = start
        this.#end = end
        this.#status = status
        this.#id = id
    }

    static empty() {
        return new Vehicle('', '', '', '', '', '', '', '', '', '', '')
    }

    get id() {
        return this.#id
    }

    get vehicle() {
        return this.#vehicle
    }

    get brand() {
        return this.#brand
    }

    get plate() {
        return this.#plate
    }
    
    get consumption() {
        return this.#consumption
    }

    get type() {
        return this.#type
    }

    get volume() {
        return this.#volume
    }

    get weight() {
        return this.#weight
    }

    get size() {
        return this.#size
    }

    get start() {
        return this.#start
    }

    get end() {
        return this.#end
    }

    get status() {
        return this.#status
    }
}