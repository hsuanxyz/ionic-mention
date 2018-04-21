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
    console.log(this.elementRef.nativeElement.tagName);
  }

  ngOnInit(): void {
    console.log(this.suggestionModal)
  }

  onInput($event) {
    const target: HTMLInputElement | HTMLTextAreaElement = $event.target;
    console.log(target.value);
  }
}
