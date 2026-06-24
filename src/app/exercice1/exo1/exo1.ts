import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './exo1.html',
  styleUrl: './exo1.css'
})
export class Exo1 {
  nom = '';
  police = 'Arial';
  taille = 20;
  alignement = 'left';
  polices = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
}