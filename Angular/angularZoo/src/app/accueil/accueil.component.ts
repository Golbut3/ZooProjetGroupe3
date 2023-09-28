import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  images: string[] = [
    '/assets/img/BandeDefilante-image1.jpg',
    '/assets/img/BandeDefilante-image2.png',
    '/assets/img/BandeDefilante-image3.png',
    '/assets/img/BandeDefilante-image4.png',
    '/assets/img/BandeDefilante-image5.png',
    '/assets/img/BandeDefilante-image6.png',
    '/assets/img/BandeDefilante-image7.png',
  ];
  currentImageIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.showNextImage();
    }, 3000); // Changez d'image toutes les 3 secondes (3000 ms)
  }

  showNextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}