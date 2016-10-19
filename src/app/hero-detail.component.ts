import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <!-- Details -->
    <div *ngIf="hero">

      <h4>{{hero.name}} details!</h4>

      <p><label>id: </label> {{hero.id}}</p>

      <form materialize class="col s12">
        <div class="row">

          <div class="input-field col s6">
            <input [(ngModel)]="hero.name" id="name" name="name" type="text" class="validate" placeholder="Name">
          </div>

        </div>
      </form>
    </div>
  `
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
