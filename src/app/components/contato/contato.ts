import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contato {
  email = 'rickelmyds79@gmail.com';
  telefone = '(85) 99972-9659';
  github = 'https://github.com/ricksantos7';
  linkedin = 'https://www.linkedin.com/in/rickelmy-santos-b615b538a';

  copiado = signal(false);

  async copiarEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.email);
    this.copiado.set(true);
    setTimeout(() => this.copiado.set(false), 2000);
  }
}