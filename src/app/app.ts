import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DatePipe], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentTime = new Date();
  currentUrl: string = ''; // Variable pour stocker l'URL

  constructor(private router: Router) {
    // Met à jour l'heure
    setInterval(() => { this.currentTime = new Date(); }, 1000);

    // Écoute les changements de route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }
}