import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicMentionSuggestionModal } from './mention-suggestion.interface';

@Directive({
  selector: '[ionicMention]',
  host: {
    '(input)': 'onInput($event)'
  }
})
export class MentionTrigger implements OnInit {

  @Input('ionicMention') suggestionModal: IonicMentionSuggestionModal;
  @Input() prefix: string | string[] = '@';
  @Output() onOpen: EventEmitter<string> = new EventEmitter();
  @Output() onSelected: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();

  constructor(public elementRef: ElementRef) {
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
  }
}
