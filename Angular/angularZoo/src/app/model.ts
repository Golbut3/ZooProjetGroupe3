export class Compte{
    type:string;
    id:number;
    login:string;
    password:string;
    prenom:string;
    nom:string;
    version:number;

    constructor(
        id: number,
        login: string,
        password: string,
        prenom: string,
        nom:string,
        type:string,
        version:number
    ) {
        this.type=type
        this.id = id;
        this.login = login
        this.password = password
        this.prenom = prenom
        this.nom=nom
        this.version=version
    }

}

export class Admin extends Compte{
        
        constructor(
            id: number,
            login: string,
            password: string,
            prenom: string,
            nom:string,
            type:string,
            version:number
        ){
            super(id,login,password,prenom,nom,type,version);
        }
}

export class Employe extends Compte{
        sal : number;
        poste:string;
    constructor(
        id: number,
        login: string,
        password: string,
        prenom: string,
        nom:string,
        type:string,
        version:number,
        sal:number,
        poste:string
    ){
        super(id,login,password,prenom,nom,type,version);
        this.sal=sal;
        this.poste=poste;
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


export class Logement{
    id?: number; 
    nbPlace?:number;
    prix?:number;
    numero?: string;
    descrption?:string;
    reservations?:Reservation[];

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

    constructor( id?: number,
        nbPlace?:number,
        prix?:number,
        numero?: string,
        descrption?:string,
        reservations?:Reservation[],
        encloss?:Enclos[]

        ){
        super(id,nbPlace,prix,numero,descrption,reservations);
        this.encloss=encloss;
    }


}

export class Interet{}

export class Enclos{

    id? : number;
    capacite?: number;
    chalets?: Array<Chalet> = new Array<Chalet>;
    animaux?: Array<Animal> = new Array<Animal>;
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


// export class Logement{
//         id:number;
//         nbPlace?:number;
//         prix?:number;
//         numero?:number;
//         description?:string;
//   client: any;
    
//         constructor(
//             id: number,
//             nbPlace?:number,
//             prix?:number,
//             numero?:number,
//             description?:string
//         ) {
  
//             this.id = id;
//             this.nbPlace = nbPlace;
//             this.prix = prix;
//             this.numero = numero;
//             this.description = description;
//         }
//     }