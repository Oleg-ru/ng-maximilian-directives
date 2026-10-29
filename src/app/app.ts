import { Component, signal } from '@angular/core';
import {LearningResources} from '../components/learning-resources/learning-resources';
import {Auth} from '../components/auth/auth';

@Component({
  imports: [LearningResources, Auth],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
