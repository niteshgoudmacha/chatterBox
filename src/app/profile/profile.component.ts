import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }
  userProfile: any;
  ngOnInit(): void {
    this.authService.getUser().subscribe(d => {
      console.log('d = ', d);
      this.userProfile = d;
    });
  }

}
