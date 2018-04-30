import { Component } from "@angular/core";
import { IonicMentionSuggestionModal } from "../ionic-mention";
import { NavParams, ViewController } from "ionic-angular";

@Component({
  selector: 'suggestion-modal',
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Suggestions
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
</ion-content>
  `
})
export class SuggestionModal implements IonicMentionSuggestionModal {


  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
  ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
