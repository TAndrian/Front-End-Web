import { Client } from './client';
import { JourSemaineType } from './jourSemaineType';
import { Media } from './media';
import { Probleme } from './probleme';
import { RapportChantierRegulier } from './rapportChantierRegulier';
import { Site } from './site';
import {StatusType} from './statusType';

export class ChantierGet {
    constructor(public id: number,
                public site: Site,
                public client: Client, 
                public problemes: Set<Probleme>, 
                public medias: Set<Media>, 
                public adresse: string, 
                public ouvriers: Set<string>, 
                public materiel: string, 
                public dateDebutTheorique: Date, 
                public dateFinTheorique: Date,
                public estimationTemps: number, 
                public telephone: string, 
                public statusChantier: StatusType, 
                public nomChantier: string, 
                public informationsInterne: string, 
                public description: string,
                public dateDebutEffectif: Date,
                public dateFinEffectif: Date,

                public regularite: boolean,

                //TOUT CE QUI EST REGULARITE EST OPTIONNEL
                public joursRegularite?: Set<JourSemaineType>,
                public dateDebutRegularite?: Date,
                public dateFinRegularite?: Date,
                public rapportsRegulier?: Set<RapportChantierRegulier>
                ) {}
}
