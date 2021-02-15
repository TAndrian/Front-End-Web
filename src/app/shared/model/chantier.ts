import {StatusType} from './statusType';

export class Chantier {
    constructor(public site: number, public client: number, public problemes: number[], public documents: number[], public adresse: string, public ouvriers: string[], public materiel: string, public dateDebut: Date, public dateFin: Date, public heureDemarrage: Date, public estimationTemps: number, public telephone: string, public statusChantier: StatusType, public nomChantier: string, public informationsInterne: string, public description: string) {
        /*
        this._site = site;
        this._client = client;
        this._problemes = problemes;
        this._documents = documents;
        this._adresse = adresse;
        this._ouvriers = ouvriers;
        this._materiel = materiel;
        this._dateDebut = dateDebut;
        this._dateFin = dateFin;
        this._heureDemarrage = heureDemarrage;
        this._estimationTemps = estimationTemps;
        this._telephone = telephone;
        this._statusChantier = statusChantier;
        this._nomChantier = nomChantier;
        this._informationsInterne = informationsInterne;
        this._description = description;
        */
    }

    /*
    private _id: number;
    private _site: number;
    private _client: number;
    private _problemes: number[];
    private _documents: number[];
    private _adresse: string;
    private _ouvriers: string[];
    private _materiel: string;
    // pas sûr
    private _dateDebut: Date;
    private _dateFin: Date;
    private _heureDemarrage: Date;
    private _estimationTemps: number;
    private _telephone: string;
    private _statusChantier: StatusType;
    private _nomChantier: string;
    private _informationsInterne: string;
    private _description: string;
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get site(): number {
        return this._site;
    }

    set site(value: number) {
        this._site = value;
    }

    get client(): number {
        return this._client;
    }

    set client(value: number) {
        this._client = value;
    }

    get problemes(): number[] {
        return this._problemes;
    }

    set problemes(value: number[]) {
        this._problemes = value;
    }

    get documents(): number[] {
        return this._documents;
    }

    set documents(value: number[]) {
        this._documents = value;
    }

    get adresse(): string {
        return this._adresse;
    }

    set adresse(value: string) {
        this._adresse = value;
    }

    get ouvriers(): string[] {
        return this._ouvriers;
    }

    set ouvriers(value: string[]) {
        this._ouvriers = value;
    }

    get materiel(): string {
        return this._materiel;
    }

    set materiel(value: string) {
        this._materiel = value;
    }

    get dateDebut(): Date {
        return this._dateDebut;
    }

    set dateDebut(value: Date) {
        this._dateDebut = value;
    }

    get dateFin(): Date {
        return this._dateFin;
    }

    set dateFin(value: Date) {
        this._dateFin = value;
    }

    get heureDemarrage(): Date {
        return this._heureDemarrage;
    }

    set heureDemarrage(value: Date) {
        this._heureDemarrage = value;
    }

    get estimationTemps(): number {
        return this._estimationTemps;
    }

    set estimationTemps(value: number) {
        this._estimationTemps = value;
    }

    get telephone(): string {
        return this._telephone;
    }

    set telephone(value: string) {
        this._telephone = value;
    }

    get statusChantier(): StatusType {
        return this._statusChantier;
    }

    set statusChantier(value: StatusType) {
        this._statusChantier = value;
    }

    get nomChantier(): string {
        return this._nomChantier;
    }

    set nomChantier(value: string) {
        this._nomChantier = value;
    }

    get informationsInterne(): string {
        return this._informationsInterne;
    }

    set informationsInterne(value: string) {
        this._informationsInterne = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
    */
}
