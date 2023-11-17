// speech.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  voices: SpeechSynthesisVoice[];

  constructor() {
    this.voices = window.speechSynthesis.getVoices();
  }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);

      // Customize speech properties
      utterance.voice = this.getVoiceByLang('hi-IN'); // Set voice by language
      utterance.rate = 0.7; // Speech rate (0.1 to 10)
      utterance.pitch = 1; // Speech pitch (0 to 2)
      speechSynthesis.speak(utterance);
  }
    getVoiceByLang(lang: string): SpeechSynthesisVoice | null {
       console.log(this.getVoices())
       const indianVoices = this.voices.filter(voice => voice.lang.startsWith(lang)); 
       return indianVoices[0];
    }

  getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }
}
