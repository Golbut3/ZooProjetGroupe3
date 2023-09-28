import { Component } from '@angular/core';
import { AuthService } from '../compte/auth.service';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrls: ['./billeterie.component.css']
})
export class BilleterieComponent {
constructor(protected authService : AuthService)
{}
}