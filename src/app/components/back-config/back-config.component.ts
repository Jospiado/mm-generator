import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirecionar após salvar
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-config',
  standalone: true,
  templateUrl: './back-config.component.html',
  styleUrls: ['./back-config.component.css'],
  imports: [FormsModule, CommonModule]
})
export class BackConfigComponent implements OnInit {
  // Valores padrão para os campos
  jwksUri: string = 'https://allystore.b2clogin.com/allystore.onmicrosoft.com/b2c_1_susi1/discovery/keys';
  port: string = '8080';
  tenantDatabaseId: string = 'default-security-q34iptj32-fjwqrprcqw';
  tenantDatabaseType: string = 'postgres';
  tenantDatabaseName: string = 'mydb';
  tenantDatabaseUsername: string = 'postgres';
  tenantDatabasePassword: string = 'evoadmin';
  tenantDatabaseHost: string = 'localhost';
  tenantDatabasePort: string = '5432';
  tenantDatabaseConfig: string = 'retryWrites=true&w=majority';
  encryptionKeyTenantPassword: string = 'wfwrgrgegq3r2c3';
  defaultDatabaseType: string = 'postgres';
  defaultDatabaseName: string = 'ortia';
  defaultDatabaseUsername: string = 'postgres';
  defaultDatabasePassword: string = 'evoadmin';
  defaultDatabaseHost: string = 'localhost';
  defaultDatabasePort: string = '5432';
  defaultDatabaseConfig: string = 'retryWrites=true&w=majority';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadBackConfigFromLocalStorage();
  }

  // Função para carregar as configurações do localStorage do ProjectSettings (envBack)
  loadBackConfigFromLocalStorage() {
    const savedProjectSettings = localStorage.getItem('projectSettings');
    if (savedProjectSettings) {
      const projectSettings = JSON.parse(savedProjectSettings);
      const envBack = projectSettings.envBack || {};
      this.jwksUri = envBack.jwksUri || this.jwksUri;
      this.port = envBack.port || this.port;
      this.tenantDatabaseId = envBack.tenantDatabaseId || this.tenantDatabaseId;
      this.tenantDatabaseType = envBack.tenantDatabaseType || this.tenantDatabaseType;
      this.tenantDatabaseName = envBack.tenantDatabaseName || this.tenantDatabaseName;
      this.tenantDatabaseUsername = envBack.tenantDatabaseUsername || this.tenantDatabaseUsername;
      this.tenantDatabasePassword = envBack.tenantDatabasePassword || this.tenantDatabasePassword;
      this.tenantDatabaseHost = envBack.tenantDatabaseHost || this.tenantDatabaseHost;
      this.tenantDatabasePort = envBack.tenantDatabasePort || this.tenantDatabasePort;
      this.tenantDatabaseConfig = envBack.tenantDatabaseConfig || this.tenantDatabaseConfig;
      this.encryptionKeyTenantPassword = envBack.encryptionKeyTenantPassword || this.encryptionKeyTenantPassword;
      this.defaultDatabaseType = envBack.defaultDatabaseType || this.defaultDatabaseType;
      this.defaultDatabaseName = envBack.defaultDatabaseName || this.defaultDatabaseName;
      this.defaultDatabaseUsername = envBack.defaultDatabaseUsername || this.defaultDatabaseUsername;
      this.defaultDatabasePassword = envBack.defaultDatabasePassword || this.defaultDatabasePassword;
      this.defaultDatabaseHost = envBack.defaultDatabaseHost || this.defaultDatabaseHost;
      this.defaultDatabasePort = envBack.defaultDatabasePort || this.defaultDatabasePort;
      this.defaultDatabaseConfig = envBack.defaultDatabaseConfig || this.defaultDatabaseConfig;
    }
  }

  // Função para salvar as configurações no localStorage dentro de envBack
  saveBackConfigToLocalStorage() {
    const projectSettings = JSON.parse(localStorage.getItem('projectSettings') || '{}');

    projectSettings.envBack = {
      jwksUri: this.jwksUri,
      port: this.port,
      tenantDatabaseId: this.tenantDatabaseId,
      tenantDatabaseType: this.tenantDatabaseType,
      tenantDatabaseName: this.tenantDatabaseName,
      tenantDatabaseUsername: this.tenantDatabaseUsername,
      tenantDatabasePassword: this.tenantDatabasePassword,
      tenantDatabaseHost: this.tenantDatabaseHost,
      tenantDatabasePort: this.tenantDatabasePort,
      tenantDatabaseConfig: this.tenantDatabaseConfig,
      encryptionKeyTenantPassword: this.encryptionKeyTenantPassword,
      defaultDatabaseType: this.defaultDatabaseType,
      defaultDatabaseName: this.defaultDatabaseName,
      defaultDatabaseUsername: this.defaultDatabaseUsername,
      defaultDatabasePassword: this.defaultDatabasePassword,
      defaultDatabaseHost: this.defaultDatabaseHost,
      defaultDatabasePort: this.defaultDatabasePort,
      defaultDatabaseConfig: this.defaultDatabaseConfig
    };

    localStorage.setItem('projectSettings', JSON.stringify(projectSettings));

    // Redireciona para o ProjectSettings
    this.router.navigate(['/project-settings']);
  }
}
