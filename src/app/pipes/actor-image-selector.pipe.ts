import { Pipe, PipeTransform } from '@angular/core';
import { Actor, AnimalType } from '../shared/models/world';

@Pipe({
  name: 'actorImageSelector'
})
export class ActorImageSelectorPipe implements PipeTransform {

  transform(actors: Actor[]): string {
    for (const actor of actors) {
      if(actor.animalType == "RABBIT")
      {
        return 'animals/Rabbit';
      } else if(actor.animalType == "WHALE") {
        return 'animals/Whale';
      }
    }
    return '';
  }

}
