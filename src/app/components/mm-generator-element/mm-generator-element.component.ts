import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mm-generator-element',
  standalone: true,
  templateUrl: './mm-generator-element.component.html',
  styleUrls: ['./mm-generator-element.component.css'],
  imports: [FormsModule, CommonModule]
})
export class MmGeneratorElementComponent implements OnInit {
  className: string = ''; // Armazena o nome da classe que estamos configurando
  config = {
    table: '',
    description: '',
    apiUrl: '',
    ptBr: '',
    en: '',
    frontPath: '',
    searchable: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Recebe o nome da classe da URL
    this.className = this.route.snapshot.paramMap.get('className') || '';
    this.loadConfig();
  }

  // Carregar configurações da classe a partir do localStorage
  loadConfig() {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);
      const foundClass = classes.find((cls: any) => cls.name === this.className);
      if (foundClass) {
        this.config = foundClass.config || this.config;
      }
    }
  }

  // Função para salvar as configurações e associá-las à classe correta
  saveConfig() {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);

      // Encontrar a classe pelo nome e atualizar sua configuração
      const classIndex = classes.findIndex((cls: any) => cls.name === this.className);
      if (classIndex !== -1) {
        classes[classIndex].config = this.config; // Atualiza as configurações da classe
        localStorage.setItem('classes', JSON.stringify(classes)); // Salva novamente no localStorage
      }
    }

    this.router.navigate(['/create-classes']); // Redirecionar para a página principal
  }
}
