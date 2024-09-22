import { Component } from '@angular/core';
import { MmGeneratorElementComponent } from './components/mm-generator-element/mm-generator-element.component';
import { MmGeneratorClassComponent } from './components/mm-generator-class/mm-generator-class.component';
import { MmAttributeGeneratorComponent } from './components/mm-attribute-generator/mm-attribute-generator.component';
import { AttributeSettingsComponent } from './components/attribute-settings/attribute-settings.component';
import { ProjectSettingsComponent } from './components/project-settings/project-settings.component';
import { BackConfigComponent } from './components/back-config/back-config.component';
import { FrontConfigComponent } from './components/front-config/front-config.component';
import { MainConfigComponent } from './components/main-config/main-config.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',  // Usar o template do HTML
  styleUrls: ['./app.component.css'],
  imports: [MmGeneratorElementComponent,
    MmGeneratorClassComponent,
    MmAttributeGeneratorComponent,
    AttributeSettingsComponent,
    ProjectSettingsComponent,
    BackConfigComponent,
    FrontConfigComponent,
    MainConfigComponent,
    RouterModule]  // Importar o componente aqui
})
export class AppComponent {}
