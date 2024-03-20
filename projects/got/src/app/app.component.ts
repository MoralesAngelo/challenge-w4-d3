import { Component } from '@angular/core';
import { CardComponent } from './features/cards/card.component';
import { getCharacters } from '../app/core/data';
import { Character } from './core/models/character';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h1>Game of Throne</h1>
    <main>
      <ul class="characters-list">
        @for (character of characters; track $index) {
        <isdi-card [character]="character" />}
      </ul>
    </main>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'got';
  characters: Character[] = [];

  constructor() {
    this.onLoad();
  }

  onLoad() {
    getCharacters().then((characters) => {
      this.characters = characters;
      console.log(characters);
    });
  }
}
