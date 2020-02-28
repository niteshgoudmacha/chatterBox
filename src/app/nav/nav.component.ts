import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navSearch: string = ''
  isListening: boolean;
  constructor(
    private _router: Router,
    private authService: AuthServiceService) {
    this.isListening = false;
    this.navSearch = '';
  }

  ngOnInit(): void {
    
  }


  ngOnDestroy() {
    
  }

  isAuth() {
    return this.authService.isAuth();
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

}
