import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-mm-attribute-generator',
  standalone: true,
  templateUrl: './mm-attribute-generator.component.html',
  styleUrls: ['./mm-attribute-generator.component.css'],
  imports: [FormsModule, CommonModule]
})
export class MmAttributeGeneratorComponent implements OnInit {
  className: string = ''; 
  numAttributes: number = 0;
  attributes: { name: string, type: string, icon: string, settings: any }[] = [];

  availableIcons = [
    { label: 'Direct to Field', value: 'Mapping.directToField' },
    { label: 'One to One', value: 'Mapping.oneToOne' },
    { label: 'One to Many', value: 'Mapping.oneToMany' },
    { label: 'Many to One', value: 'Mapping.manyToOne' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.className = this.route.snapshot.paramMap.get('className') || '';
    this.loadAttributes();  // Carrega os atributos do localStorage
  }

  generateAttributeFields() {
    // Gere os campos com base no número de atributos
    this.attributes = Array.from({ length: this.numAttributes }, () => ({
      name: '',
      type: '',
      icon: '',
      settings: null
    }));
  }

  addAttributeSettings(index: number) {
    // Redireciona para a página de configurações do atributo
    this.router.navigate([`/attribute-settings`, this.className, index]);
  }

  saveAttributes() {
    // Salva os atributos no localStorage
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);
      const classIndex = classes.findIndex((cls: any) => cls.name === this.className);

      if (classIndex !== -1) {
        classes[classIndex].attributes = this.attributes;
        localStorage.setItem('classes', JSON.stringify(classes));
      }
    }
  }

  loadAttributes() {
    // Carrega os atributos salvos do localStorage
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      const classes = JSON.parse(savedClasses);
      const foundClass = classes.find((cls: any) => cls.name === this.className);
      if (foundClass) {
        this.attributes = foundClass.attributes || [];
      }
    }
  }

  // Método para salvar e redirecionar para a página de classes
  saveAndRedirect() {
    this.saveAttributes(); 
    this.router.navigate(['/create-classes']); // Redireciona para a página de classes
  }
}
