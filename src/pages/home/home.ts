import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuggestionModal } from "../../components/suggestion-modal";
import { IonicMentionSuggestionModal } from "../../ionic-mention";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  suggestionModal: IonicMentionSuggestionModal = SuggestionModal;
  constructor(public navCtrl: NavController) {
  }

}
