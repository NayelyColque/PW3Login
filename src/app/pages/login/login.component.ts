import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface UsuarioLogin {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: UsuarioLogin = {
    email: '',
    senha: ''
  };

  enviar(): void {
    if (!this.usuario.email || !this.usuario.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    console.log('Login enviado:', this.usuario);
    alert(`Email: ${this.usuario.email}\nSenha: ${this.usuario.senha}`);

    this.usuario = { email: '', senha: '' };
  }
}
