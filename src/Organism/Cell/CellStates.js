// A cell state is used to differentiate type and render the cell
class CellState{
    constructor(name) {
        this.name = name;
        this.color = 'black';
    }

    render(ctx, cell, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(cell.x, cell.y, size, size);
    }
}

class Empty extends CellState {
    constructor() {
        super('empty');
    }
}
class Food extends CellState {
    constructor() {
        super('food');
    }
}
class Wall extends CellState {
    constructor() {
        super('wall');
    }
}
class Mouth extends CellState {
    constructor() {
        super('mouth');
    }
}
class Producer extends CellState {
    constructor() {
        super('producer');
    }
}
class Mover extends CellState {
    constructor() {
        super('mover');
    }
}
class Killer extends CellState {
    constructor() {
        super('killer');
    }
}
class Armor extends CellState {
    constructor() {
        super('armor');
    }
}
class Eye extends CellState {
    constructor() {
        super('eye');
        this.slit_color = 'black';
    }
}
class Neuron extends CellState {
    constructor() {
        super('neuron');
    }
}
class Trigger extends CellState {
    constructor() {
        super('trigger');
    }
}
class Releaser extends CellState {
    constructor() {
        super('releaser');
    }
}
class Germ extends CellState {
    constructor() {
        super('germ');
    }
}
class Receptor extends CellState {
    constructor() {
        super('receptor');
    }
}
class Grabber extends CellState {
    constructor() {
        super('grabber');
    }
}
class Signal extends CellState {
    constructor() {
        super('signal');
    }
}
class Gamete extends CellState {
    constructor() {
        super('gamete');
    }
}
class Zygote extends CellState {
    constructor() {
        super('zygote');
    }
    render(ctx, cell, size) {
        ctx.fillStyle = this.color;
        ctx.fillRect(cell.x, cell.y, size, size);
        if(size == 1)
            return;
        var half = size/2;
        var x = -(size)/8
        var y = -half;
        var h = size/2 + size/4;
        var w = size/4;
        ctx.translate(cell.x+half, cell.y+half);
        ctx.rotate((cell.cell_owner.getAbsoluteDirection() * 90) * Math.PI / 180);
        ctx.fillStyle = this.slit_color;
        ctx.fillRect(x, y, w, h);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}

const CellStates = {
    empty: new Empty(),
    food: new Food(),
    wall: new Wall(),
    mouth: new Mouth(),
    producer: new Producer(),
    mover: new Mover(),
    killer: new Killer(),
    armor: new Armor(),
    eye: new Eye(),
    neuron: new Neuron(), 
    trigger: new Trigger(),
    releaser: new Releaser(),
    germ: new Germ(),
    receptor: new Receptor(),
    grabber: new Grabber(),
    signal: new Signal(),
    gamete: new Gamete(),
    egg: new Zygote(),
    defineLists() {
        this.all = [this.empty, this.food, this.wall, this.mouth, this.producer, this.mover, this.killer, this.armor, this.eye, this.neuron, this.trigger, this.releaser, this.germ, this.receptor, this.grabber, this. signal, this.gamete, this.zygote]
        this.living = [this.mouth, this.producer, this.mover, this.killer, this.armor, this.eye, this.neuron, this.trigger, this.releaser, this.germ, this.receptor, this.grabber, this.egg];
    },
    getRandomName: function() {
        return this.all[Math.floor(Math.random() * this.all.length)].name;
    },
    getRandomLivingType: function() {
        return this.living[Math.floor(Math.random() * this.living.length)];
    }
}

CellStates.defineLists();

module.exports = CellStates;
