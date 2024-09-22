import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirecionar após salvar
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-front-config',
  standalone: true,
  templateUrl: './front-config.component.html',
  styleUrls: ['./front-config.component.css'],
  imports: [FormsModule, CommonModule]
})
export class FrontConfigComponent implements OnInit {
  // Valores padrão para os campos
  authority: string = 'https://allystore.b2clogin.com/b46b5b87-a08e-487b-ae9b-fec172a9a90b/b2c_1_entradaEcadastro/v2.0/';
  clientId: string = '46513151-51f8-4912-8051-8de83c3ef9ed';
  redirectUri: string = 'callback';
  postLogoutRedirectUri: string = 'logout';
  scope: string = 'https://allystore.onmicrosoft.com/46513151-51f8-4912-8051-8de83c3ef9ed/test.read openid';
  tenantId: string = 'b46b5b87-a08e-487b-ae9b-fec172a9a90b';
  provider: string = 'allystore.b2clogin.com';
  signInPolitical: string = 'b2c_1_entradaEcadastro';
  passwordResetPolitical: string = 'b2c_1_password_reset';
  profileEditPolitical: string = 'b2c_1_profile_edit';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadFrontConfigFromLocalStorage();
  }

  // Função para carregar as configurações do localStorage do ProjectSettings (envFront)
  loadFrontConfigFromLocalStorage() {
    const savedProjectSettings = localStorage.getItem('projectSettings');
    if (savedProjectSettings) {
      const projectSettings = JSON.parse(savedProjectSettings);
      const envFront = projectSettings.envFront || {};
      this.authority = envFront.authority || this.authority;
      this.clientId = envFront.clientId || this.clientId;
      this.redirectUri = envFront.redirectUri || this.redirectUri;
      this.postLogoutRedirectUri = envFront.postLogoutRedirectUri || this.postLogoutRedirectUri;
      this.scope = envFront.scope || this.scope;
      this.tenantId = envFront.tenantId || this.tenantId;
      this.provider = envFront.provider || this.provider;
      this.signInPolitical = envFront.signInPolitical || this.signInPolitical;
      this.passwordResetPolitical = envFront.passwordResetPolitical || this.passwordResetPolitical;
      this.profileEditPolitical = envFront.profileEditPolitical || this.profileEditPolitical;
    }
  }

  // Função para salvar as configurações no localStorage dentro de envFront
  saveFrontConfigToLocalStorage() {
    const projectSettings = JSON.parse(localStorage.getItem('projectSettings') || '{}');

    projectSettings.envFront = {
      authority: this.authority,
      clientId: this.clientId,
      redirectUri: this.redirectUri,
      postLogoutRedirectUri: this.postLogoutRedirectUri,
      scope: this.scope,
      tenantId: this.tenantId,
      provider: this.provider,
      signInPolitical: this.signInPolitical,
      passwordResetPolitical: this.passwordResetPolitical,
      profileEditPolitical: this.profileEditPolitical
    };

    localStorage.setItem('projectSettings', JSON.stringify(projectSettings));

    // Redireciona para o ProjectSettings
    this.router.navigate(['/project-settings']);
  }
}
