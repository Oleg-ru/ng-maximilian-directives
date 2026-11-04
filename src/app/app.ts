import {Component, computed, inject} from '@angular/core';
import {LearningResources} from '../components/learning-resources/learning-resources';
import {Auth} from '../components/auth/auth';
import {AuthService} from '../components/auth/auth.service';
import {AuthDirective} from '../components/auth/auth-directive';

@Component({
  imports: [LearningResources, Auth, Auth, AuthDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
