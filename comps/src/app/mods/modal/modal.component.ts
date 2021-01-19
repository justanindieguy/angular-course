import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick(): void {
    this.close.emit();
  }
}
