import {Injectable} from '@angular/core';
import {StatusType} from '../shared/model/statusType';
import {JourSemaineType} from '../shared/model/jourSemaineType';

@Injectable({
    providedIn: 'root'
})
export class AffichageUtilsService {

    constructor() {
    }

    getStatus(status: StatusType): string {
        switch (status) {
            case 0:
                return 'Démarré';
            case 1:
                return 'En attente';
            case 2:
                return 'En cours';
            case 3:
                return 'Terminé';
        }
    }

    getJours(joursRegularite: Set<JourSemaineType>): string {
        const joursDeTravaux = [];
        for (const jour of joursRegularite) {
            switch (jour) {
                case JourSemaineType.LUNDI:
                    joursDeTravaux.concat('lundi');
                    break;
                case JourSemaineType.MARDI:
                    joursDeTravaux.concat('mardi');
                    break;
                case JourSemaineType.MERCREDI:
                    joursDeTravaux.concat('mercredi');
                    break;
                case JourSemaineType.JEUDI:
                    joursDeTravaux.concat('jeudi');
                    break;
                case JourSemaineType.VENDREDI:
                    joursDeTravaux.concat('vendredi');
                    break;
                case JourSemaineType.SAMEDI:
                    joursDeTravaux.concat('samedi');
                    break;
                case JourSemaineType.DIMANCHE:
                    joursDeTravaux.concat('dimanche');
                    break;
            }
        }
        return joursDeTravaux.join(', ');
    }
}
