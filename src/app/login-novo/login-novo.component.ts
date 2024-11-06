import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-novo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-novo.component.html',
  styleUrl: './login-novo.component.scss'
})
export class LoginNovoComponent {
  currentComponent = 'login-novo';
}
