import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor(private router: Router) {
    this.router.navigateByUrl('dashboard').then(() => {
      console.log('Dashboard');
    });
  }

}
