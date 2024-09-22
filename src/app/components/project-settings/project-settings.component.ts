import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-settings',
  standalone: true,
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ProjectSettingsComponent {
  // Campos do projeto
  nomeProjeto: string = '';
  backPath: string = '';
  frontPath: string = '';

  // Arrays para as configurações de back-end e front-end
  envBack: any[] = [];
  envFront: any[] = [];

  constructor(private router: Router) {}

  // Função para redirecionar para o BackConfigComponent passando o array de envBack
  goToBackConfig() {
    this.saveProjectSettings();  // Salvar no localStorage
    this.router.navigate(['/back-config']);
  }

  // Função para redirecionar para o FrontConfigComponent passando o array de envFront
  goToFrontConfig() {
    this.saveProjectSettings();  // Salvar no localStorage
    this.router.navigate(['/front-config']);
  }

  saveProjectSettings() {
    // Carregar o projectSettings existente do localStorage, se houver
    const currentSettings = JSON.parse(localStorage.getItem('projectSettings') || '{}');
  
    // Atualizar apenas os valores gerais, mantendo envBack e envFront existentes
    const projectSettings = {
      nomeProjeto: this.nomeProjeto,
      backPath: this.backPath,
      frontPath: this.frontPath,
      envBack: currentSettings.envBack || this.envBack, // Preservar envBack se já existir
      envFront: currentSettings.envFront || this.envFront // Preservar envFront se já existir
    };
  
    // Salvar as novas configurações no localStorage
    localStorage.setItem('projectSettings', JSON.stringify(projectSettings));
  
    // Redirecionar para a página principal (MainConfig)
    this.router.navigate(['/']);
  }
  }
