import { Component } from '@angular/core';
import {SaveLinkDirective} from '../../save-link';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
  standalone: true,
  imports: [
    SaveLinkDirective
  ]
})
export class LearningResources {}
