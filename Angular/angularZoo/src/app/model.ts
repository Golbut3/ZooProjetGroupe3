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