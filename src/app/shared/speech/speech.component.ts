import { Component, Input, OnInit } from '@angular/core';
import { SpeechService } from '../services/speech.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit{
  @Input()
  textToSpeak!: string;
  speaking = false;  
  speechSupported = false;
  
  constructor(private speechService: SpeechService) { }
  ngOnInit(): void {
    this.speechSupported = 'speechSynthesis' in window;
  }

  toggleSpeech(): void {
    if (this.speaking) {
      speechSynthesis.cancel(); // Stop speech if it's currently speaking
    } else {
      this.speechService.speak(this.textToSpeak);
    }
    this.speaking = !this.speaking; // Toggle the speech status
  }
}
