import {JourSemaineType} from "./jourSemaineType";

/* Modèle pour le chantier*/
export class DemandeDeChantier {
    constructor(public siteId: number,
                public clientId: number,
                public nombreEmployes: number,
                public materiel: string,
                public adresse: string,
                public regularite: boolean,
                public estimationTemps: number,
                public particularite: string,
                public description: string,
                public informationsInterne: string,
                // TOUT CE QUI EST REGULARITE EST OPTIONNEL
                public dateDebutRegularite?: Date,
                public dateFinRegularite?: Date,
                public joursRegularite?: Set<JourSemaineType>) {
    }

}
