import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';


interface UsuarioLogin {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: UsuarioLogin = {
    email: '',
    senha: ''
  };

  esconderSenha = true; 

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
