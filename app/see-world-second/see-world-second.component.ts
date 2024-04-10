import { Component } from '@angular/core';
import { articles } from '../articles-deals';

@Component({
  selector: 'app-see-world-second',
  templateUrl: './see-world-second.component.html',
  styleUrl: './see-world-second.component.css'
})
export class SeeWorldSecondComponent {
    articles = articles
}