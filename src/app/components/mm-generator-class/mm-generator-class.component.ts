import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mm-generator-class',
  standalone: true,
  templateUrl: './mm-generator-class.component.html',
  styleUrls: ['./mm-generator-class.component.css'],
  imports: [FormsModule, CommonModule]
})
export class MmGeneratorClassComponent implements OnInit {
  numClasses: number = 0;
  classes: any[] = [];
  filledStatusMessages: string[] = [];  // Mensagens de status para preenchimento

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadClassesFromLocalStorage();
  }

  // Gera os campos de classe
  generateClassInputs() {
    this.classes = Array.from({ length: this.numClasses }, () => ({
      name: '',
      config: { table: '', description: '', apiUrl: '', ptBr: '', en: '', frontPath: '', searchable: '' },
      attributes: []
    }));
    this.saveClassesToLocalStorage();
  }

  // Carrega as classes do localStorage
  loadClassesFromLocalStorage() {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      this.classes = JSON.parse(savedClasses);
    }
  }

  // Verifica se todas as configurações estão preenchidas
  areConfigsComplete(config: any): boolean {
    return Object.values(config).every(value => typeof value === 'string' && value.trim() !== '');
  }

  // Verifica se todos os atributos estão preenchidos
  areAttributesComplete(attributes: any[]): boolean {
    return attributes.every(attr => attr.name.trim() !== '' && attr.type.trim() !== '');
  }

  // Atualiza o status de preenchimento para todas as classes
  updateFilledStatus() {
    this.filledStatusMessages = this.classes.map(classObj => {
      const configsComplete = this.areConfigsComplete(classObj.config);
      const attributesComplete = this.areAttributesComplete(classObj.attributes);

      if (configsComplete && attributesComplete) {
        return `All configurations and attributes for class "${classObj.name}" are filled.`;
      } else if (!configsComplete && !attributesComplete) {
        return `Both configurations and attributes for class "${classObj.name}" are incomplete.`;
      } else if (!configsComplete) {
        return `Configurations for class "${classObj.name}" are incomplete.`;
      } else {
        return `Attributes for class "${classObj.name}" are incomplete.`;
      }
    });
  }

  // Função para adicionar atributos
  addClassAttributes(index: number) {
    this.saveClassesToLocalStorage();  // Salvar o estado atual antes de navegar
    this.router.navigate([`/attributes`, this.classes[index].name]);
  }

  // Função para adicionar configurações
  addClassConfig(index: number) {
    this.saveClassesToLocalStorage();  // Salvar o estado atual antes de navegar
    this.router.navigate([`/config`, this.classes[index].name]);
  }

  // Função para salvar explicitamente as classes
  saveClasses() {
    this.saveClassesToLocalStorage();  // Salva as classes no localStorage
    this.router.navigate(['/']);  // Redireciona para a página principal
  }

  // Salva as classes no localStorage
  saveClassesToLocalStorage() {
    localStorage.setItem('classes', JSON.stringify(this.classes));
  }
}
