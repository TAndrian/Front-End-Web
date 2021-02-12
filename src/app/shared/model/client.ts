export class Client{
    constructor(id: number, nom: string, prenom: string, adresse: string, mail: string, infoComplementaire: string) {
        this._id = id;
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
        this._mail = mail;
        this._infoComplementaire = infoComplementaire;
    }

    private _id: number;
    private _nom: string;
    private _prenom: string;
    private _adresse: string;
    private _mail: string;
    private _infoComplementaire: string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get adresse(): string {
        return this._adresse;
    }

    set adresse(value: string) {
        this._adresse = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }

    get infoComplementaire(): string {
        return this._infoComplementaire;
    }

    set infoComplementaire(value: string) {
        this._infoComplementaire = value;
    }
}
