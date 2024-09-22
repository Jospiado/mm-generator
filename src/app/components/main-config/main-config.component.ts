import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InstructionsModalComponent } from "../instructions-modal/instructions-modal.component";

@Component({
  selector: 'app-main-config',
  standalone: true,
  templateUrl: './main-config.component.html',
  styleUrls: ['./main-config.component.css'],
  imports: [FormsModule, CommonModule, InstructionsModalComponent]
})
export class MainConfigComponent {
  fileGenerated: boolean = false;  // Variável para controlar o feedback visual

  constructor(private router: Router){}
  // Carregar as classes do localStorage
  loadClassesFromLocalStorage(): any[] {
    const savedClasses = localStorage.getItem('classes');
    if (savedClasses) {
      return JSON.parse(savedClasses);
    }
    return [];
  }
  // Função para redirecionar para o ProjectSettings
  goToProjectSettings() {
    this.router.navigate(['/project-settings']);
  }
  // Função para redirecionar para a criação de classes
  goToClassCreation() {
    this.router.navigate(['/create-classes']);
  }
  
  // Função para gerar o arquivo .mm
  generateMMFile() {
    let mmContent = `<map version="1.0.1">\n`;
    mmContent += `<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->\n`;
    mmContent += `<node CREATED="1726972567348" ID="ID_1849121525" MODIFIED="1726972633821" TEXT="">\n`;
    mmContent += `<node CREATED="1657460228606" ID="ID_634150733" MODIFIED="1725995088684" POSITION="right" TEXT="app">\n`;
    mmContent += `<icon BUILTIN="Package"/>\n`;

    // Nó @
    mmContent += this.generateNodeARROBA('@', 'ID_1395701261', '1725387603768', '1726972553503');
    // Adiciona as configurações do projeto dentro do nó @
    mmContent += this.generateProjectSettingsNodes();
    // Fechando o node @
    mmContent += `</node>\n`;

    // Nó config com o link
    mmContent += this.generateConfigNode();



    // Nó domain que inclui as classes
    mmContent += this.generateDomainNode();

    mmContent += `</node>\n</node>\n</map>`;

    // Criar o arquivo .mm e fazer o download
    const blob = new Blob([mmContent], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'mdm.mm';
    link.click();
    this.fileGenerated = true;  // Exibe a mensagem de sucesso após a geração do arquivo

  }

  // Função auxiliar para gerar o nó @
  generateNodeARROBA(nodeText: string, nodeId: string, created: string, modified: string) {
    return `<node CREATED="${created}" ID="${nodeId}" MODIFIED="${modified}" TEXT="${nodeText}">\n`;
  }

  // Função auxiliar para gerar o nó config com o link para mapperidea.mm
  generateConfigNode() {
    return `<node CREATED="1657547133760" ID="ID_673927625" MODIFIED="1726968248297" TEXT="config">\n` +
      `<node CREATED="1657622005294" ID="ID_6408575" LINK="mapperidea.mm" MODIFIED="1657622005296" TEXT="mapperidea"/>\n` +
      `</node>\n`;
  }

  // Função auxiliar para gerar o nó domain que inclui as classes
  generateDomainNode() {
    let domainNode = `<node CREATED="1667256099424" ID="ID_1013449753" MODIFIED="1726972592793" TEXT="domain">\n` +
      `<icon BUILTIN="Package"/>\n`;

    // Carregar as classes salvas do localStorage e adicionar ao nó domain
    const classes = this.loadClassesFromLocalStorage();
    classes.forEach((classObj, index) => {
      const className = classObj.name.trim() || `Class${index + 1}`;
      const createdID = `ID_${1726758131172 + index}`;
      const createdTime = `${Date.now()}`;

      domainNode += `  <node CREATED="${createdTime}" ID="${createdID}" MODIFIED="${createdTime}" TEXT="${className}">\n`;
      domainNode += `    <icon BUILTIN="Descriptor.bean"/>\n`;

    // Adicionar configuração '@'
    if (classObj.config) {
      domainNode += `    <node CREATED="${createdTime}" ID="${createdID}_config" MODIFIED="${createdTime}" POSITION="right" TEXT="@">\n`;

      // Campo "table"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_table" MODIFIED="${createdTime}" TEXT="table">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_table_value" MODIFIED="${createdTime}" TEXT="${classObj.config.table}">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "description"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_description" MODIFIED="${createdTime}" TEXT="description">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_description_value" MODIFIED="${createdTime}" TEXT="${classObj.config.description}">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "apiUrl"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_apiUrl" MODIFIED="${createdTime}" TEXT="apiUrl">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_apiUrl_value" MODIFIED="${createdTime}" TEXT="${classObj.config.apiUrl}">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "columnsQuantity"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_columnsQuantity" MODIFIED="${createdTime}" TEXT="columnsQuantity">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_columnsQuantity_value" MODIFIED="${createdTime}" TEXT="3">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "title"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_title" MODIFIED="${createdTime}" TEXT="title">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
  
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_title_ptbr" MODIFIED="${createdTime}" TEXT="pt-br">\n`;
      domainNode += `          <icon BUILTIN="element"/>\n`;
      domainNode += `          <node CREATED="${createdTime}" ID="ID_${createdID}_ptbr_value" MODIFIED="${createdTime}" TEXT="${classObj.config.ptBr}">\n`;
      domainNode += `            <icon BUILTIN="tag_green"/>\n`;
      domainNode += `          </node>\n`;
      domainNode += `        </node>\n`;

      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_title_en" MODIFIED="${createdTime}" TEXT="en">\n`;
      domainNode += `          <icon BUILTIN="element"/>\n`;
      domainNode += `          <node CREATED="${createdTime}" ID="ID_${createdID}_en_value" MODIFIED="${createdTime}" TEXT="${classObj.config.en}">\n`;
      domainNode += `            <icon BUILTIN="tag_green"/>\n`;
      domainNode += `          </node>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "frontPath"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_frontPath" MODIFIED="${createdTime}" TEXT="frontPath">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_frontPath_value" MODIFIED="${createdTime}" TEXT="${classObj.config.frontPath}">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;

      // Campo "searchable"
      domainNode += `      <node CREATED="${createdTime}" ID="ID_${createdID}_searchable" MODIFIED="${createdTime}" TEXT="searchable">\n`;
      domainNode += `        <icon BUILTIN="element"/>\n`;
      domainNode += `        <node CREATED="${createdTime}" ID="ID_${createdID}_searchable_value" MODIFIED="${createdTime}" TEXT="${classObj.config.searchable}">\n`;
      domainNode += `          <icon BUILTIN="tag_green"/>\n`;
      domainNode += `        </node>\n`;
      domainNode += `      </node>\n`;
  
      domainNode += `    </node>\n`;  // Fechar o node "@"
    }


    // Adicionar atributos
    if (classObj.attributes) {
      domainNode += `    <node CREATED="${createdTime}" ID="${createdID}_attrs" MODIFIED="${createdTime}" TEXT="atributos">\n`;
      domainNode += `      <icon BUILTIN="Descriptor.grouping"/>\n`;

      classObj.attributes.forEach((attr: any, attrIndex: any) => {
        const attrID = `ID_${1726758131172 + index + attrIndex + 200}`;
        domainNode += `      <node CREATED="${createdTime}" ID="${attrID}" MODIFIED="${createdTime}" TEXT="${attr.name}: ${attr.type}()">\n`;
        domainNode += `        <icon BUILTIN="${attr.icon}"/>\n`;

        // Adicionar as configurações do atributo (nó "@")
        if (attr.settings) {
          domainNode += `        <node CREATED="${createdTime}" ID="${attrID}_settings" MODIFIED="${createdTime}" POSITION="right" TEXT="@">\n`;

          domainNode += `          <node CREATED="${createdTime}" ID="${attrID}_column" MODIFIED="${createdTime}" TEXT="column">\n`;
          domainNode += `            <icon BUILTIN="element"/>\n`;
          domainNode += `            <node CREATED="${createdTime}" ID="${attrID}_column_value" MODIFIED="${createdTime}" TEXT="${attr.settings.columnName}">\n`;
          domainNode += `              <icon BUILTIN="tag_green"/>\n`;
          domainNode += `            </node>\n`;
          domainNode += `          </node>\n`;

          domainNode += `          <node CREATED="${createdTime}" ID="${attrID}_description" MODIFIED="${createdTime}" TEXT="description">\n`;
          domainNode += `            <icon BUILTIN="element"/>\n`;
          domainNode += `            <node CREATED="${createdTime}" ID="${attrID}_description_value" MODIFIED="${createdTime}" TEXT="${attr.settings.description}">\n`;
          domainNode += `              <icon BUILTIN="tag_green"/>\n`;
          domainNode += `            </node>\n`;
          domainNode += `          </node>\n`;

          domainNode += `          <node CREATED="${createdTime}" ID="${attrID}_title" MODIFIED="${createdTime}" TEXT="title">\n`;
          domainNode += `            <icon BUILTIN="element"/>\n`;

          domainNode += `            <node CREATED="${createdTime}" ID="${attrID}_title_ptbr" MODIFIED="${createdTime}" TEXT="pt-br">\n`;
          domainNode += `              <icon BUILTIN="element"/>\n`;
          domainNode += `              <node CREATED="${createdTime}" ID="${attrID}_title_ptbr_value" MODIFIED="${createdTime}" TEXT="${attr.settings.titlePtBr}">\n`;
          domainNode += `                <icon BUILTIN="tag_green"/>\n`;
          domainNode += `              </node>\n`;
          domainNode += `            </node>\n`;

          domainNode += `            <node CREATED="${createdTime}" ID="${attrID}_title_en" MODIFIED="${createdTime}" TEXT="en">\n`;
          domainNode += `              <icon BUILTIN="element"/>\n`;
          domainNode += `              <node CREATED="${createdTime}" ID="${attrID}_title_en_value" MODIFIED="${createdTime}" TEXT="${attr.settings.titleEn}">\n`;
          domainNode += `                <icon BUILTIN="tag_green"/>\n`;
          domainNode += `              </node>\n`;
          domainNode += `            </node>\n`;
          domainNode += `          </node>\n`;

          if (attr.settings.required) {
            domainNode += `          <node CREATED="${createdTime}" ID="${attrID}_required" MODIFIED="${createdTime}" TEXT="required">\n`;
            domainNode += `            <icon BUILTIN="element"/>\n`;
            domainNode += `          </node>\n`;
          }

          domainNode += `        </node>\n`;  // Fechar o node "@"
        }

        domainNode += `      </node>\n`;  // Fechar o node do atributo
      });

      domainNode += `    </node>\n`;  // Fechar o node "atributos"
    }

      domainNode += `  </node>\n`;  // Fechar o node da classe
    });

    domainNode += `</node>\n`;  // Fechar o node "domain"
    return domainNode;
  }
  // Função para gerar os nós de configurações do projeto
  generateProjectSettingsNodes() {
  // Carregar as configurações do projeto do localStorage
  const projectSettings = JSON.parse(localStorage.getItem('projectSettings') || '{}');
  const backConfig = projectSettings.envBack || {};
  const frontConfig = projectSettings.envFront || {};
  const createdTime = `${Date.now()}`;

  let projectContent = '';

  // Nó 'env' com os nós 'back' e 'front'
  projectContent += `<node CREATED="${createdTime}" ID="ID_81743325" MODIFIED="${createdTime}" TEXT="env">\n`;
  projectContent += `<icon BUILTIN="element"/>\n`;

  // Nó 'back' com as configurações do BackConfig
  projectContent += `<node CREATED="${createdTime}" ID="ID_1376587715" MODIFIED="${createdTime}" TEXT="back">\n`;
  projectContent += `<icon BUILTIN="element"/>\n`;
  for (const [key, value] of Object.entries(backConfig)) {
    projectContent += this.generateProjectNode(key, value as string, createdTime);
  }
  projectContent += `</node>\n`; // Fechar o nó 'back'

  // Nó 'front' com as configurações do FrontConfig
  projectContent += `<node CREATED="${createdTime}" ID="ID_690750963" MODIFIED="${createdTime}" TEXT="front">\n`;
  projectContent += `<icon BUILTIN="element"/>\n`;
  for (const [key, value] of Object.entries(frontConfig)) {
    projectContent += this.generateProjectNode(key, value as string, createdTime);
  }
  projectContent += `</node>\n`; // Fechar o nó 'front'

  projectContent += `</node>\n`; // Fechar nó 'env'

  // Adicionar os nós de 'nomeProjeto', 'backPath' e 'frontPath'
  projectContent += this.generateProjectNode('nomeProjeto', projectSettings.nomeProjeto || 'Default Project Name', createdTime);
  projectContent += this.generateProjectNode('backPath', projectSettings.backPath || 'http://localhost:8080', createdTime);
  projectContent += this.generateProjectNode('frontPath', projectSettings.frontPath || 'https://localhost:4200', createdTime);
  
  return projectContent;
}
// Função auxiliar para gerar um nó de configuração do projeto
  generateProjectNode(nodeName: string, nodeValue: string, createdTime: string) {
  const nodeId = `ID_${Math.floor(Math.random() * 1000000000)}`;  // Gerar um ID único para o nó
  const sanitizedNodeValue = this.sanitizeValue(nodeValue);  // Sanitize the value for XML

  return `<node CREATED="${createdTime}" ID="${nodeId}" MODIFIED="${createdTime}" TEXT="${this.sanitizeValue(nodeName)}">\n` +
  `<icon BUILTIN="element"/>\n` +
  `<node CREATED="${createdTime}" ID="${nodeId}_value" MODIFIED="${createdTime}" TEXT="${sanitizedNodeValue}">\n` +
  `<icon BUILTIN="tag_green"/>\n</node>\n</node>\n`;
}
  // Função para sanitizar os valores
  sanitizeValue(value: string): string {
    return value.replace(/&/g, '&amp;');
  }
}
