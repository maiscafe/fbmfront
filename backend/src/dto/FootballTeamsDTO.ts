export class FootballTeamsDTO {
    
    id: number;        
    name: string;
    create_at: Date;
    update_at: Date;

    constructor (
        id: number,
        name: string,
        create_at: Date,
        update_at: Date,
    ){
        this.id         = id;
        this.name       = name;
        this.create_at  = create_at;
        this.update_at  = update_at
    }
}