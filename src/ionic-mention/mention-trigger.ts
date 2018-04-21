import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ionicMention]',
  host: {
    '(input)': 'onInput($event)'
  }
})
export class MentionTrigger {

  constructor(elementRef: ElementRef) {
    console.log(elementRef.nativeElement.tagName)
  }

  onInput($event) {
    const target: HTMLInputElement | HTMLTextAreaElement = $event.target;
    console.log(target.value);
  }
}
