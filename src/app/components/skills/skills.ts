import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

export interface SkillItem {
  nome: string;
  categoria: 'Suporte Técnico' | 'Atendimento' | 'Informática' | 'Soft Skills';
  nivel: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  skills = signal<SkillItem[]>([
    { nome: 'Manutenção de Computadores', categoria: 'Suporte Técnico', nivel: 80 },
    { nome: 'Instalação e Configuração de Software', categoria: 'Suporte Técnico', nivel: 80 },
    { nome: 'Abertura e Acompanhamento de Chamados', categoria: 'Suporte Técnico', nivel: 75 },

    { nome: 'Atendimento ao Cliente', categoria: 'Atendimento', nivel: 90 },
    { nome: 'Suporte Presencial e Remoto', categoria: 'Atendimento', nivel: 85 },

    { nome: 'Pacote Office (Word, Excel, PowerPoint)', categoria: 'Informática', nivel: 80 },
    { nome: 'Análise de Dados', categoria: 'Informática', nivel: 60 },
    { nome: 'Fundamentos de Nuvem (AWS)', categoria: 'Informática', nivel: 50 },

    { nome: 'Trabalho em Equipe', categoria: 'Soft Skills', nivel: 90 },
    { nome: 'Facilidade de Aprendizado', categoria: 'Soft Skills', nivel: 90 },
    { nome: 'Organização', categoria: 'Soft Skills', nivel: 85 },
  ]);

  filtroAtivo = signal<string>('Todos');

  categorias = computed(() => {
    const cats = [...new Set(this.skills().map(s => s.categoria))];
    return ['Todos', ...cats];
  });

  skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') return this.skills();
    return this.skills().filter(skill => skill.categoria === filtro);
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}