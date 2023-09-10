const MouthCell = require("./MouthCell");
const ProducerCell = require("./ProducerCell");
const MoverCell = require("./MoverCell");
const KillerCell = require("./KillerCell");
const ArmorCell = require("./ArmorCell");
const EyeCell = require("./EyeCell");
const NeuronCell = require("./NeuronCell");
const TriggerCell = require("./TriggerCell");
const ReleaserCell = require("./ReleaserCell");
const GermCell = require("./GermCell");
const ReceptorCell = require("./ReceptorCell");
const GrabberCell = require("./GrabberCell");
const CellStates = require("../CellStates");


const BodyCellFactory = {
    init: function() {
        var type_map = {};
        type_map[CellStates.mouth.name] = MouthCell;
        type_map[CellStates.producer.name] = ProducerCell;
        type_map[CellStates.mover.name] = MoverCell;
        type_map[CellStates.killer.name] = KillerCell;
        type_map[CellStates.armor.name] = ArmorCell;
        type_map[CellStates.eye.name] = EyeCell;
        type_map[CellStates.neuron.name] = NeuronCell;
        type_map[CellStates.trigger.name] = TriggerCell;
        type_map[CellStates.releaser.name] = ReleaserCell;
        type_map[CellStates.germ.name] = GermCell;
        type_map[CellStates.receptor.name] = ReceptorCell;
        type_map[CellStates.grabber.name] = GrabberCell;
        this.type_map = type_map;
    },

    createInherited: function(org, to_copy) {
        var cell = new this.type_map[to_copy.state.name](org, to_copy.loc_col, to_copy.loc_row);
        cell.initInherit(to_copy);
        return cell;
    },

    createRandom: function(org, state, loc_col, loc_row) {
        var cell = new this.type_map[state.name](org, loc_col, loc_row);
        cell.initRandom();
        return cell;
    },

    createDefault: function(org, state, loc_col, loc_row) {
        var cell = new this.type_map[state.name](org, loc_col, loc_row);
        cell.initDefault();
        return cell;
    },
}
BodyCellFactory.init();

module.exports = BodyCellFactory;
