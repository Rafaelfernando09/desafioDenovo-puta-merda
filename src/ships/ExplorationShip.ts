import { Exploratory } from "../interfaces/Exploratory";
import { SpaceCraft } from "./SpaceCraft";

export class ExplorationShip extends SpaceCraft implements Exploratory {

    public constructor(id: number, name: string, fuel: number, health: number) {
		super(id, name, fuel, health)
	}


    public explore(location: string): string {
        return `the ${location} haas been explored sucessfully`
    }

    public collectData(): string {
        return `cientify data collected.`
    }
}
