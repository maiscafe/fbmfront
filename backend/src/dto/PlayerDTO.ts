export class PlayerDTO {

    id: number;

    name: string;

    age: number;
    
    team_id: number;
    
    
    constructor (
        id: number,
        name: string,
        age: number,
        team_id: number
    ){
        this.id      = id;
        this.name    = name;
        this.age     = age
        this.team_id = team_id;
    }
}