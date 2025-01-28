import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent {
  title = 'estudo';
  mostrarProdutos = false;
  mostrarModal = false; // Controla a exibição do modal
  jsonSelecionado: any = {}; // Armazena o JSON selecionado
  dadosApis: any[] = [];

  constructor(private http: HttpClient) {}

  onManutencaoProdutos() {
    this.mostrarProdutos = true;
  }

  onApiChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedApi = selectElement.value;

    if (selectedApi === 'HomeInsurance') {
      this.carregarDadosApis('HomeInsurance');
    }
  }

  carregarDadosApis(grupo: string) {
    const ids = [1711, 1712, 1713, 1718];
    this.dadosApis = [];

    ids.forEach(id => {
      this.http.get<any>(`assets/APIs/${grupo}/${id}.json`).subscribe(data => {
        this.dadosApis.push(data);
      });
    });
  }

  // Função para abrir o modal com o JSON
  onEdit(api: any) {
    this.jsonSelecionado = api; // Armazena o JSON do item selecionado
    this.mostrarModal = true; // Exibe o modal
  }

  // Função para fechar o modal
  fecharModal() {
    this.mostrarModal = false; // Esconde o modal
  }
}
