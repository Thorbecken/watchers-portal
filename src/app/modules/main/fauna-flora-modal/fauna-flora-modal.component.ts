import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalType } from 'src/app/shared/models/serviceModel';
import { Flora, Fauna } from 'src/app/shared/models/world';

// Inspired by AI
@Component({
  selector: 'fauna-flora-modal',
  templateUrl: './fauna-flora-modal.component.html',
  styleUrls: ['./fauna-flora-modal.component.scss']
})
export class FaunaFloraModalComponent {
  @Input() flora: Flora[] = [];
  @Input() fauna: Fauna[] = [];
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
