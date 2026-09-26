import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

export interface ExperienciaItem {
  id: number;
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string[];
  tipo: 'trabalho' | 'formacao';
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Experiencia {
  itens = signal<ExperienciaItem[]>([
    {
      id: 1,
      periodo: '04/2026 (atual)',
      cargo: 'Aprendiz de Suporte Técnico',
      empresa: 'Mãe Rainha Urbanismo — Fortaleza, CE',
      descricao: [
        'Atendimento a usuários',
        'Suporte técnico presencial e/ou remoto',
        'Manutenção e configuração de computadores',
        'Instalação e atualização de softwares',
        'Abertura e acompanhamento de chamados'
      ],
      tipo: 'trabalho'
    },
    {
      id: 2,
      periodo: '02/2026 (atual)',
      cargo: 'Auxiliar de Escritório',
      empresa: 'Instituto de Saúde e Gestão Hospitalar — Fortaleza, CE',
      descricao: [
        'Separação de prontuários dos pacientes',
        'Arquivamento dos prontuários',
        'Auxílio nas demandas administrativas do setor'
      ],
      tipo: 'trabalho'
    },
    {
      id: 3,
      periodo: '08/2025 – 12/2025 (4 meses)',
      cargo: 'Estagiário de Suporte Técnico',
      empresa: 'Mobit LTDA — Fortaleza, CE',
      descricao: [
        'Apoio no atendimento e suporte ao cliente',
        'Organização de dados e auxílio administrativo',
        'Manutenção corretiva e preventiva de computadores',
        'Abertura e acompanhamento de chamados'
      ],
      tipo: 'trabalho'
    },
    {
      id: 5,
      periodo: '2026 (atual)',
      cargo: 'Graduando em Análise e Desenvolvimento de Sistemas (ADS) — 1º semestre',
      empresa: 'Centro Universitário Uniateneu',
      descricao: [
        'Cursando o primeiro semestre, em paralelo com atuação profissional na área de suporte técnico.'
      ],
      tipo: 'formacao'
    },
    {
      id: 4,
      periodo: '2023 – 2025',
      cargo: 'Ensino Médio Técnico',
      empresa: 'E.E.E.P. Comendador Miguel Gurgel',
      descricao: [],
      tipo: 'formacao'
    }
  ]);
}