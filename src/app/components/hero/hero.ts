import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
 nome = signal('Rickelmy Carneiro dos Santos');
  papel = signal('Tech Support → Dev em Formação');
bio = signal('Suporte técnico com foco em resolver problemas reais. Em formação como desenvolvedor — unindo prática do dia a dia com estudos em Análise e Desenvolvimento de Sistemas.');
  avatarUrl = signal('foto-perfil.jpg');
}