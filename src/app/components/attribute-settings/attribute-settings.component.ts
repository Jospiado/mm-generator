import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-attribute-settings',
  standalone: true,
  templateUrl: './attribute-settings.component.html',
  styleUrls: ['./attribute-settings.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AttributeSettingsComponent implements OnInit {
  className: string = '';
  attributeIndex: number = 0; // Índice do atributo que está sendo configurado

  // Dados do atributo
  settings = {
    columnName: '',
    description: '',
    titlePtBr: '',
    titleEn: '',
    required: false
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Pegue o nome da classe e o índice do atributo da URL
    this.className = this.route.snapshot.paramMap.get('className') || '';
    this.attributeIndex = parseInt(this.route.snapshot.paramMap.get('index') || '0', 10); // Mudança de 'attributeIndex' para 'index'

    this.loadAttributeSettings();
  }

  // Carregar configurações do atributo específico do localStorage
  loadAttributeSettings() {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);
      const foundClass = classes.find((cls: any) => cls.name === this.className);

      if (foundClass && foundClass.attributes[this.attributeIndex]) {
        const attribute = foundClass.attributes[this.attributeIndex];
        this.settings = attribute.settings || this.settings;
      }
    }
  }

  // Salvar configurações no localStorage
  saveSettings() {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);
      const foundClass = classes.find((cls: any) => cls.name === this.className);

      if (foundClass) {
        if (!foundClass.attributes[this.attributeIndex].settings) {
          foundClass.attributes[this.attributeIndex].settings = {};
        }
        // Atualiza as configurações do atributo
        foundClass.attributes[this.attributeIndex].settings = this.settings;

        // Salva novamente no localStorage
        localStorage.setItem('classes', JSON.stringify(classes));

        // Redireciona de volta para a lista de atributos
        this.router.navigate([`/attributes`, this.className]);
      }
    }
  }
}
