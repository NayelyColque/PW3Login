import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  usuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuario = this.fb.group({
     email:['',[Validators.required, Validators.email]],
     senha:['',[Validators.required, Validators.minLength(8)]]
    });
  }

    enviar() {
      if (this.usuario.valid) {
      console.log(this.usuario.value);
      alert('Formulário enviado com sucesso!');
    } else {
      this.usuario.markAllAsTouched(); // Garante que os erros sejam exibidos
    }
  }

  esconderSenha = true;


}
