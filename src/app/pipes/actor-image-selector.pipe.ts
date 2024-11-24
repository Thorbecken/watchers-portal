import { Pipe, PipeTransform } from '@angular/core';
import { Actor, AnimalType } from '../shared/models/world';

@Pipe({
  name: 'actorImageSelector'
})
export class ActorImageSelectorPipe implements PipeTransform {

  transform(actors: Actor[]): string {
    for (const actor of actors) {
      return 'animals/Animal_' + actor.animalType.name;
    }
    return '';
  }

}
