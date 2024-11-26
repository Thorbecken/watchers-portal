import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalType } from 'src/app/shared/models/serviceModel';
import { Flora, Fauna, Coordinate, SurfaceType } from 'src/app/shared/models/world';

// Inspired by AI
@Component({
  selector: 'fauna-flora-modal',
  templateUrl: './fauna-flora-modal.component.html',
  styleUrls: ['./fauna-flora-modal.component.scss']
})
export class FaunaFloraModalComponent {
  @Input() flora: Flora[] = [];
  @Input() fauna: Fauna[] = [];
  @Input() coordinate: Coordinate;
  @Input() modalType: ModalType | null;
  
  @Output() submitAction = new EventEmitter<any>();
  @Output() cancelAction = new EventEmitter<void>();
  
  public modelTypeEnum: typeof ModalType = ModalType;
  public selectedItem: string = '';
  public selectedFlora: Flora | null = null;
  public selectedFauna: Fauna | null = null;
  public hoveredFlora: Flora | null = null;
  public hoveredFauna: Fauna | null = null;

  constructor() {}

  onSelectionChange() {
    console.log(this.selectedItem + " selected");
    switch(this.modalType){
      case ModalType.FLORA:
      this.selectedFlora = this.flora.find(f => f.name === this.selectedItem)!;
      return;
      case ModalType.FAUNA:
      this.selectedFauna = this.fauna.find(f => f.name === this.selectedItem)!;
      return;
    }
  }

  onSubmitAction() {
    let selectedItemName: string | null = null;
    console.log(this.modalType, this.selectedFauna, this.selectedFlora, this.selectedItem)
  
    if (this.modalType == ModalType.FLORA && this.selectedFlora) {
      selectedItemName = this.selectedFlora.name;
    } else if (this.modalType == ModalType.FAUNA && this.selectedFauna) {
      selectedItemName = this.selectedFauna.name;
    }
  
    this.submitAction.emit(selectedItemName); 
  }

  get temperatureFilteredFloraList(): Flora[] {
    return this.flora.filter(floraType => floraType.max_temperature >= this.coordinate.climate.meanTemperature && floraType.min_temperature <= this.coordinate.climate.meanTemperature);
  }
  
  get filteredFloraList(): Flora[] {
    return this.temperatureFilteredFloraList.filter(floraType => this.isCorrectHabitat(floraType.natural_habitat));
  }
  
  get filteredFaunaList(): Fauna[] {
    return this.fauna.filter(faunaType => this.isCorrectHabitat(faunaType.natural_habitat));
  }

  isCorrectHabitat(natural_habitat: string): boolean {
    if(natural_habitat === 'TERRESTRIAL') {
      return this.isTerrestial();
    } else if (natural_habitat === 'SALT_WATER' || natural_habitat === 'AQUATIC') {
      return this.isSaltWater();
    } else {
      return false;
    }
  }

  isTerrestial(): boolean{
    return this.coordinate.tile.surfaceType === SurfaceType.PLAIN
      || this.coordinate.tile.surfaceType === SurfaceType.HILL
      || this.coordinate.tile.surfaceType === SurfaceType.MOUNTAIN
      || this.coordinate.tile.surfaceType === SurfaceType.LAKE
      || this.coordinate.tile.surfaceType === SurfaceType.LARGE_RIVER;
  }

  isSaltWater(): boolean{
    return this.coordinate.tile.surfaceType ===SurfaceType.COASTAL
    || this.coordinate.tile.surfaceType ===SurfaceType.SEA
    || this.coordinate.tile.surfaceType ===SurfaceType.OCEAN;
  }

  onCancelAction() {
    this.selectedItem = '';
    this.selectedFlora = null;
    this.selectedFauna = null;
    this.cancelAction.emit();
  }

  onHoverFlora(item: Flora) {
    console.log('Hover item:', item);
    this.hoveredFlora = item;
  }

  onHoverFauna(item: Fauna) {
    console.log('Hover item:', item);
    this.hoveredFauna = item;
  }

  onLeaveItem() {
    this.hoveredFauna = null;
    this.hoveredFlora = null;
  }
}
