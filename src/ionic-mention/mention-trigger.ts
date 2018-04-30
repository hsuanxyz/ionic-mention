import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicMentionSuggestionModal } from './mention-suggestion.interface';
import { ModalController } from "ionic-angular";
import { Modal } from "ionic-angular/components/modal/modal";

@Directive({
  selector: 'input[ionicMention], textarea[ionicMention], ion-input[ionicMention], ion-textarea[ionicMention]',
  host: {
    '(input)': 'onInput($event)'
  }
})
export class MentionTrigger implements OnInit {

  @Input('ionicMention') suggestionComponent: IonicMentionSuggestionModal;
  @Input() prefix: string | string[] = '@';
  @Output() onOpen: EventEmitter<string> = new EventEmitter();
  @Output() onSelected: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();

  suggestionModal: Modal;

  constructor(public elementRef: ElementRef, public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
  }

  onInput($event) {
    const target: HTMLInputElement | HTMLTextAreaElement = $event.target;
    const value = target.value.replace(/[\r\n]/g, ' ') || '';
    const selectionStart = target.selectionStart;
    const prefix = typeof this.prefix === 'string' ? [this.prefix] : this.prefix;
    const triggerPrefixIndex = prefix.indexOf($event.data);
    if (triggerPrefixIndex === -1) {
      return;
    }
    const triggerPrefix = prefix[triggerPrefixIndex];
    const position = value.lastIndexOf(triggerPrefix, selectionStart);
    if (
      (position === 0 && value.length === 1)
      || (value[position - 1] === ' ' && position === value.length - 1)
      || (value[position - 1] === ' ' && value[position + 1] === ' ')
    ) {
      this.openModal(triggerPrefix, position)
    }
  }

  openModal(triggerPrefix: string, position: number) {
    console.log(triggerPrefix);
    console.log(position);
    if (!this.suggestionModal) {
      this.suggestionModal = this.modalCtrl.create(this.suggestionComponent);
      this.suggestionModal.present();
      this.suggestionModal.onDidDismiss((data) => this.handleDismiss(data))
    }
  }

  handleDismiss(data: any) {
    this.suggestionModal = null;
  }
}
