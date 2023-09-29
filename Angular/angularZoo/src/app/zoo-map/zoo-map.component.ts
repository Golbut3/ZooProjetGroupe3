import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zoo-map',
  templateUrl: './zoo-map.component.html',
  styleUrls: ['./zoo-map.component.css']
})
export class ZooMapComponent implements OnInit {
  @ViewChild('pathOverlay', { static: true }) pathOverlay: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.drawPathOnMap();
  }

  private drawPathOnMap() {
    // Facteur d'échelle, réduisez ces valeurs pour réduire l'échelle
    const scale = 0.9;
  
    const encloCoordinates = [
      { x: 50 * scale, y:50  * scale *2 },  // Coordonnées de l'enclo 1
      { x: 200 * scale, y: 150 * scale *2 },  // Coordonnées de l'enclo 2
      { x: 300 * scale, y: 200 * scale *2},  // Coordonnées de l'enclo 3
      { x: 400 * scale, y: 250 * scale *2 },  // Coordonnées de l'enclo 4
      { x: 500 * scale, y: 300 * scale *2 },  // Coordonnées de l'enclo 5
      { x: 120 * scale, y: 350 * scale *2 },  // Coordonnées de l'enclo 6
      { x: 250 * scale, y: 400 * scale *2 },  // Coordonnées de l'enclo 7
      { x: 370 * scale, y: 420 * scale *2 },  // Coordonnées de l'enclo 8
      { x: 480 * scale, y: 340 * scale *2},  // Coordonnées de l'enclo 9
      { x: 590 * scale, y: 380 * scale *2},  // Coordonnées de l'enclo 10
      // ... Ajoutez les coordonnées pour chaque enclo
    ];
  
    const pathOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  // L'ordre des enclos à visiter
  
    const svg: SVGElement = this.pathOverlay.nativeElement;
  
    let path = '';
  
    // Dessiner un cercle pour chaque enclo
    for (let i = 0; i < encloCoordinates.length; i++) {
      const coord = encloCoordinates[i];
      const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circleElement.setAttribute('cx', coord.x.toString());
      circleElement.setAttribute('cy', coord.y.toString());
      circleElement.setAttribute('r', '5');  // Rayon du cercle
      circleElement.setAttribute('fill', 'black');  // Couleur du cercle
      svg.appendChild(circleElement);
    }
  
    // Créer le chemin SVG en reliant les enclos dans l'ordre
    for (let i = 0; i < pathOrder.length; i++) {
      const coord = encloCoordinates[pathOrder[i]];
      if (i === 0) {
        path += `M${coord.x},${coord.y}`;
      } else {
        path += ` L${coord.x},${coord.y}`;
      }
    }
  
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    pathElement.setAttribute('stroke', 'red');  // Couleur du trajet en rouge
    pathElement.setAttribute('stroke-width', '2');
    pathElement.setAttribute('fill', 'transparent');
    svg.appendChild(pathElement);
  }
  
  
}
