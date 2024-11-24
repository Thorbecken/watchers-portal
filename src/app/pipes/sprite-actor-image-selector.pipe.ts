import { Pipe, PipeTransform } from '@angular/core';
import { Actor } from '../shared/models/world';

@Pipe({
  name: 'spriteActorImageSelector'
})
export class SpriteActorImageSelectorPipe implements PipeTransform {
  
  
  static spriteSelector = new Map<string, number>();
  
  static {
    this.spriteSelector.set('Bird',(1-1)*32);
    this.spriteSelector.set('Boar',(2-1)*32);
    this.spriteSelector.set('Camel',(3-1)*32);
    this.spriteSelector.set('Cow',(4-1)*32);
    this.spriteSelector.set('Dear',(5-1)*32);
    this.spriteSelector.set('Eagle',(6-1)*32);
    this.spriteSelector.set('Goat',(7-1)*32);
    this.spriteSelector.set('Horse',(8-1)*32);
    this.spriteSelector.set('Lion',(9-1)*32);
    this.spriteSelector.set('Monkey',(10-1)*32);
    this.spriteSelector.set('Pinquen',(11-1)*32);
    this.spriteSelector.set('Sheep',(12-1)*32);
    this.spriteSelector.set('Spirit',(13-1)*32);
    this.spriteSelector.set('Tiger',(14-1)*32);
    this.spriteSelector.set('Wolf',(15-1)*32);
    this.spriteSelector.set('Rabbit',(16-1)*32);
    this.spriteSelector.set('Whale',(17-1)*32);
  }

  transform(actors: Actor[]): number {
    for (const actor of actors) {
      return SpriteActorImageSelectorPipe.spriteSelector.get(actor.animalType.name)!;
    }
    return SpriteActorImageSelectorPipe.spriteSelector.get('Spririt')!;
  }

}
