export abstract class SpaceCraft {
    private id: number;
    private name: string;
    private fuel: number;
    protected health: number;


	public constructor(id: number, name: string, fuel: number, health: number) {
		this.id = id;
		this.name = name;
		this.fuel = fuel;
		this.health = health;
	}


	public getId(): number {
		return this.id;
	}

	public setId(value: number) {
		this.id = value;
	}

	public getName(): string {
		return this.name;
	}

	public setName(value: string) {
		this.name = value;
	}

	public getFuel(): number {
		return this.fuel;
	}

	public setFuel(value: number) {
        if(this.fuel <= 0 ){
            this.fuel = 0
        } else 
		this.fuel = value;
	}

	public getHealth(): number {
		return this.health;
	}

	public setHealth(value: number) {
		this.health = value;
	}

    public refuel(value: number): void {
        this.fuel += value
        console.log(`The fuel: ${this.fuel}`)
    }

    public takeDamage(value: number): void {
        if(this.health <= 0 ){
            this.health = 0
        } else 
        this.health -= value
        console.log(`The ship has Sofreed damage: ${this.health}`)
    }

    public repair(value: number): void {
        if(this.health >= 100){
            this.health = 100
        } else 
        this.health += value 
        console.log(`The ship as repaired to: ${this.health} on health`)
    }

    public isOperational(): boolean {
        if(this.health > 0 && this.fuel > 0){
            return true 
        } else {
            return false 
        }
    }

    public showStatus(): void {
        console.log(`
=================================        
    Ship Id: ${this.id}
    Ship Name: ${this.name}
    Ship Health ${this.health}
    Ship Fuel: ${this.fuel}  `)
    }


}