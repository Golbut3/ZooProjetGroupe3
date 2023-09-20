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

export class Reservation{
    id: number; 
    dateDebut?: string; 
    dateFin?: string; 
    nbVisiteurs?: number; 
    prix?: number; 
    client?: Client; 
    logement?: Logement;
    interet?: Interet;

    constructor(
        id: number, 
        dateDebut?: string, 
        dateFin?: string,
        nbVisiteurs?: number, 
        prix?: number, 
        client?: Client, 
        logement?: Logement,
        interet?: Interet
    )
    {
        this.id=id;
        this.dateDebut=dateDebut;
        this.dateFin=dateFin;
        this.nbVisiteurs=nbVisiteurs;
        this.prix=prix;
        this.client=client;
        this.logement=logement;
        this.interet=interet;

    }



}

export class Client extends Compte{}
export class Logement{}
export class Interet{}