import { Injectable } from '@angular/core';
import {Chantier} from '../../shared/model/chantier';
import {ChantierGet} from 'src/app/shared/model/chantierGet';


@Injectable({
  providedIn: 'root'
})
export class CastChantierService {

  constructor() { }

  chantierToGet(chantier: Chantier): ChantierGet {
    return new ChantierGet(null, null, null, null, null,chantier.adresse, chantier.ouvriers,
      chantier.nbOuvrier, chantier.materiel, chantier.dateDebutTheorique, chantier.dateFinTheorique,
      chantier.estimationTemps, chantier.telephone, chantier.statusChantier, chantier.nomChantier,
      chantier.informationsInterne, chantier.description, chantier.dateDebutEffectif, chantier.dateFinEffectif,
      chantier.conducteurPresent, chantier.regularite, chantier.statusIntervention,
      chantier.volume, chantier.poid,chantier.accessibilite, chantier.joursRegularite, 
      chantier.dateDebutRegularite, chantier.dateFinRegularite, chantier.rapportsRegulier);
  }

  getToChantier(chantier: ChantierGet): Chantier {
    return new Chantier(chantier.site.id, chantier.client.id, null, null, chantier.adresse, chantier.ouvriers,
      chantier.nbOuvrier, chantier.materiel, chantier.dateDebutTheorique, chantier.dateFinTheorique,
      chantier.estimationTemps, chantier.telephone, chantier.statusChantier, chantier.nomChantier,
      chantier.informationsInterne, chantier.description, chantier.dateDebutEffectif, chantier.dateFinEffectif,
      chantier.conducteurPresent, chantier.regularite, chantier.statusIntervention,
      chantier.volume, chantier.poid,chantier.accessibilite, chantier.joursRegularite, 
      chantier.dateDebutRegularite, chantier.dateFinRegularite, chantier.rapportsRegulier);
  }

}
