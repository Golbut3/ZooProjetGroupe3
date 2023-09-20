export class Compte{
    id:number;
    login:string;
    password:string;
    prenom:string;
    nom:string;

    constructor(
        id: number,
        login: string,
        password: string,
        prenom: string,
        nom:string
    ) {
        this.id = id;
        this.login = login
        this.password = password
        this.prenom = prenom
        this.nom=nom
    }

}

export class Espece{

}


export class Animal {
    id?: number;
    nom?: string;
    poids?: number;
    espece?: Espece;
    enclos?: Enclos;

    constructor(
        id?: number,
        nom?: string,
        poids?: number,
        espece?: Espece,
        enclos?: Enclos,
    ) {
        this.id = id
        this.nom = nom
        this.poids = poids
        this.espece = espece
        this.enclos = enclos
    }
}

export class Reservation{}

export class Logement{
    id?: number; 
    nbPlace?:number;
    prix?:number;
    numero?: string;
    descrption?:string;
    reservations?:Reservation;

    constructor(
        id?: number,
        nbPlace?:number,
        prix?:number,
        numero?: string,
        descrption?:string,
        reservations?:Reservation[],
    
    ) {
        this.id = id
        this.nbPlace = nbPlace
        this.prix = prix
        this.numero= numero
        this.descrption = descrption
        this.reservations = reservations
    }

}


export class Chalet extends Logement {

    encloss?:Enclos[];

    constructor(){
        super(this.id = id; );
    }


}

export class Interet{}

export class Enclos{

    id? : number;
    capacite?: number;
    chalets?: Array<Chalet> = new Array<Chalet>;
    animaux?: Array<Animal> = new Array< Animal>;
    interets?: Array<Interet> = new Array<Interet>;

constructor(
    id? : number,
    capacite?: number,
    chalets?: Chalet[],
    animaux?: Animal[],
    interets?: Interet[])
    {
        this.id = id;
        this.capacite= capacite;
        this.chalets = chalets;
        this.animaux = animaux;
        this.interets= interets;
    }
}