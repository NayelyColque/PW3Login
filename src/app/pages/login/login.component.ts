import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

=======
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
>>>>>>> 6772fc356764123090a4e44bb46438e1306c071d

interface UsuarioLogin {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatCardModule],
=======
  imports: [CommonModule, FormsModule],
>>>>>>> 6772fc356764123090a4e44bb46438e1306c071d
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: UsuarioLogin = {
    email: '',
    senha: ''
  };

<<<<<<< HEAD
  esconderSenha = true; 

=======
>>>>>>> 6772fc356764123090a4e44bb46438e1306c071d
  enviar(): void {
    if (!this.usuario.email || !this.usuario.senha) {
      alert('Preencha todos os campos!');
      return;
    }

    console.log('Login enviado:', this.usuario);
    alert(`Email: ${this.usuario.email}\nSenha: ${this.usuario.senha}`);

    this.usuario = { email: '', senha: '' };
  }
<<<<<<< HEAD

  
=======
>>>>>>> 6772fc356764123090a4e44bb46438e1306c071d
}
