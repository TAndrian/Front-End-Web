import {StatusType} from "./statusType";

export class RapportChantierRegulier {
    constructor(
        public dateDebutTheorique: Date,
        public dateFinTheorique: Date,
        public dateDebutEffectif: Date,
        public dateFinEffectif: Date,
        public statut: StatusType
    ) {
    }

}
