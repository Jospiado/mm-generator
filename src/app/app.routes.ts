import { Routes } from '@angular/router';
import { MmGeneratorClassComponent } from './components/mm-generator-class/mm-generator-class.component';
import { MmAttributeGeneratorComponent } from './components/mm-attribute-generator/mm-attribute-generator.component';
import { MmGeneratorElementComponent } from './components/mm-generator-element/mm-generator-element.component';
import { AttributeSettingsComponent } from './components/attribute-settings/attribute-settings.component';  // Importar o componente de configurações de atributos
import { MainConfigComponent } from './components/main-config/main-config.component';
import { ProjectSettingsComponent } from './components/project-settings/project-settings.component';
import { BackConfigComponent } from './components/back-config/back-config.component';
import { FrontConfigComponent } from './components/front-config/front-config.component';

export const routes: Routes = [
  { path: '', component: MainConfigComponent },  // Página principal para configuração
  { path: 'create-classes', component: MmGeneratorClassComponent },  // Rota para criação de classes
  { path: 'attributes/:className', component: MmAttributeGeneratorComponent },  // Rota para adicionar atributos
  { path: 'config/:className', component: MmGeneratorElementComponent },  // Rota para adicionar configurações
  { path: 'attribute-settings/:className/:index', component: AttributeSettingsComponent },  // Rota para configurar os atributos
  { path: 'project-settings', component: ProjectSettingsComponent },
  { path: 'back-config', component: BackConfigComponent },
  { path: 'front-config', component: FrontConfigComponent },
];
