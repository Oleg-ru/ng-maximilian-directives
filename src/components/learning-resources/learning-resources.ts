import { Component } from '@angular/core';
import {SaveLinkDirective} from '../../save-link';
import {Log} from '../log';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',
  standalone: true,
  imports: [
    SaveLinkDirective,
    Log
  ]
})
export class LearningResources {}
