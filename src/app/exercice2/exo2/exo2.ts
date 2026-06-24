import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Operation {
  id: number;
  heure: string;
  expression: string;
  resultat: number;
}

@Component({
  selector: 'app-exo2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exo2.html',
  styleUrl: './exo2.css',
})
export class Exo2 {
  n1 = 0;
  n2 = 0;
  operation = '+';
  resultat: number | null = null;
  historique: Operation[] = [];

  calculer() {
    let res = 0;
    switch(this.operation) {
      case '+': res = this.n1 + this.n2; break;
      case '-': res = this.n1 - this.n2; break;
      case '*': res = this.n1 * this.n2; break;
      case '/': res = this.n1 / this.n2; break;
    }
    this.resultat = res;
    
    // Ajout à l'historique
    this.historique.unshift({
      id: Date.now(),
      heure: new Date().toLocaleTimeString(),
      expression: `${this.n1} ${this.operation} ${this.n2}`,
      resultat: res
    });
  }

  supprimer(id: number) {
    this.historique = this.historique.filter(op => op.id !== id);
  }
}