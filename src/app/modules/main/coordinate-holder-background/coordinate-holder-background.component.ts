import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { Coordinate, Fauna, Flora } from 'src/app/shared/models/world';
import { CoordinateHolder } from '../world-page-background/world-page-background.component';
import { getMainAction, MainAction, ModalType, WorldInteractionCommand } from 'src/app/shared/models/serviceModel';

// Contextmodel and Modal are inspired by AI
@Component({
  selector: 'app-coordinate-holder-background',
  templateUrl: './coordinate-holder-background.component.html',
  styleUrls: ['./coordinate-holder-background.component.css']
})
export class TileHolderBackgroundComponent implements OnInit, OnDestroy {
  @Input('coordinateHolder') public coordinateHolder: CoordinateHolder;
  @Input('currentView') public currentView: string;
  @Input('floraList') public floraList: Flora[] = [];
  @Input('faunaList') public faunaList: Fauna[] = [];
  @Output() coordinateSelected = new EventEmitter<Coordinate>();
  @Output() rightClickMenuActions = new EventEmitter<WorldInteractionCommand>();

  public showContextMenu: boolean = false;
  public menuPosition = { x: 0, y: 0 };
  public showModal: boolean = false;
  public modalType: ModalType | null = null;

  private documentClickListener: () => void;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.removeDocumentClickListener();
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.showContextMenu = true;
    this.menuPosition.x = event.clientX;
    this.menuPosition.y = event.clientY;
    this.documentClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => this.onDocumentClick(event));
  }

  private removeDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }

  private onDocumentClick(event: MouseEvent): void {
    const contextMenu = this.elRef.nativeElement.querySelector('.context-menu');
    if (contextMenu && !contextMenu.contains(event.target as Node) && !this.elRef.nativeElement.contains(event.target as Node)) {
      this.showContextMenu = false;
      this.removeDocumentClickListener();
    }
  }

  onContextMenuAction(action: string, event: MouseEvent) {
    event.stopPropagation();
    this.showContextMenu = false;
    let mainAction: MainAction = getMainAction(action);
    var command: WorldInteractionCommand;

    switch (mainAction) {
      case MainAction.SEED_FLORA: {
        this.modalType = ModalType.FLORA;
        this.showModal = true;
        return;
      }
      case MainAction.SEED_FAUNA: {
        this.modalType = ModalType.FAUNA;
        this.showModal = true;
        return;
      }
      case MainAction.PLACE_HOTSPOT:
        command = new WorldInteractionCommand(this.coordinateHolder.coordinate, MainAction.PLACE_HOTSPOT, null);
        break;
      case MainAction.PLACE_TECTONIC_PLUME:
        command = new WorldInteractionCommand(this.coordinateHolder.coordinate, MainAction.PLACE_TECTONIC_PLUME, null);
        break;
      case MainAction.REMOVE_POINT_OF_INTEREST:
        command = new WorldInteractionCommand(this.coordinateHolder.coordinate, MainAction.REMOVE_POINT_OF_INTEREST, null);
        break;
      default: command = new WorldInteractionCommand(this.coordinateHolder.coordinate, MainAction.NONE, null);
        break;
    }

    this.rightClickMenuActions.emit(command);
  }

  onClickMe() {
    this.coordinateSelected.emit(this.coordinateHolder.coordinate);
  }

  onSubmitAction(subAction: string | null) {
    this.showModal = false;
    this.showContextMenu = false;
  
    let command: WorldInteractionCommand;
  
    if (this.modalType === ModalType.FLORA) {
      command = new WorldInteractionCommand(
        this.coordinateHolder.coordinate,
        MainAction.SEED_FLORA, 
        subAction
      );
    } else if (this.modalType === ModalType.FAUNA) {
      command = new WorldInteractionCommand(
        this.coordinateHolder.coordinate,
        MainAction.SEED_FAUNA, 
        subAction
      );
    } else {
      command = new WorldInteractionCommand(this.coordinateHolder.coordinate, MainAction.NONE, null);
    }
  
    this.rightClickMenuActions.emit(command);
  }

  onCancelAction() {
    this.showModal = false;
    this.showContextMenu = false;
  }
}
