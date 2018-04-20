import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ionicMention]'
})
export class MentionTrigger {

  constructor(elementRef: ElementRef) {
    console.log(elementRef.nativeElement.tagName)
  }
}
