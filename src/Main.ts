import { Fleet } from "./fleet/Fleet";
import { CargoCarrier } from "./interfaces/CargoCarrier";
import { CombatCapable } from "./interfaces/CombatCapable";
import { Exploratory } from "./interfaces/Exploratory";
import { Repairable } from "./interfaces/Repairable";
import { ExplorationShip } from "./ships/ExplorationShip";
import { Figther } from "./ships/Fighter";
import { MultiPurposeShip } from "./ships/MultiPurposeShip";
import { SpaceCraft } from "./ships/SpaceCraft";
import { TransportShip } from "./ships/TransportShip";

const figther1 = new Figther(30, 10, `ronaldo`, 100, 100)
const fighter2 = new Figther(40, 11, `marcelo`, 100, 100)

const transport1 = new TransportShip(0, 500, 9, `andrei`, 100, 100)
const transport2 = new TransportShip(0, 500, 8, `porco da india`, 100, 100)

const exploration1 = new ExplorationShip(8, `cleiton`, 100, 100)
const exploration2 = new ExplorationShip(7, `isaias`, 100, 100)

const multi1 = new MultiPurposeShip(6, `fodao`, 100, 500, 15, 100)

