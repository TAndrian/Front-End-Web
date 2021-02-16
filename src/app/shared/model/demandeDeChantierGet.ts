import {Client} from "./client";
import { JourSemaineType } from "./jourSemaineType";
import {Site} from "./site";

/* Modèle pour le chantier*/
export class DemandeDeChantierGet {
    constructor(public id: number,
                public site: Site,
                public client: Client,
                public nombreEmployes: number,
                public materiel: string,
                public adresse: string,
                public regularite: boolean,
                public estimationTemps: number,
                public particularite: string,
                public description: string,
                public informationsInterne: string,

                //TOUT CE QUI EST REGULARITE EST OPTIONNEL
                public dateDebutRegularite?: Date,
                public dateFinRegularite?: Date,
                public joursRegularite?: Set<JourSemaineType>){}
}
