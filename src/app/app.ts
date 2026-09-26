import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Experiencia } from './components/experiencia/experiencia';
import { Skills } from './components/skills/skills';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Experiencia, Skills, Contato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  title = 'curriculo-rickelmy-santos';
}