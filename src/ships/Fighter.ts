import { CombatCapable } from "../interfaces/CombatCapable";
import { SpaceCraft } from "./SpaceCraft";

export class Figther extends SpaceCraft implements CombatCapable {
    private laserString: number 


	constructor(laserString: number,id: number, name: string, health: number, fuel: number) {
        super(id, name, fuel, health)
        this.laserString = laserString
	}

    public getLaser(): number {
        return this.laserString
    }

    public setLaser(value: number): void {
        this.laserString = value 
    }

    attack(target: SpaceCraft): number {
        const damage = 25;
        target.takeDamage(damage)
        return damage
    }


}