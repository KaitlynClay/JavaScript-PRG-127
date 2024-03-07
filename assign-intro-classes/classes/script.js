class Fish {
    constructor(name, type, water, color, size) {
        this.name = name;
        this.type = type;
        this.water = water;
        this.color = color;
        this.size = size;
    }

    fishInfo() {
        return `${this.name} is a ${this.type} which lives in ${this.water}. It is ${this.size} inch(s) long and is ${this.color} colored.`;
    }
}

const f1 = new Fish("Comet", "Goldfish", "freshwater", "goldy-yellow", 7.5);
const f2 = new Fish("Talon", "Betta", "freshwater", "blue-black", 1.5);
const f3 = new Fish("Zara", "Clownfish", "saltwater", "black and white", 1);
const f4 = new Fish("Marsh", "Glofish", "freshwater", "green", 2);

document.getElementById("p1").textContent = f1.fishInfo();
document.getElementById("p2").textContent = f2.fishInfo();
document.getElementById("p3").textContent = f3.fishInfo();
document.getElementById("p4").textContent = f4.fishInfo();