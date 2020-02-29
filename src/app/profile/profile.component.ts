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
  date: String;
  ngOnInit(): void {
    this.authService.getUser().subscribe(d => {
      // console.log('d = ', d['createdDate'].toString().slice);

      this.userProfile = d;
      this.date =  d['createdDate'].toString().slice(8, 10);
      this.date += ' / ' + d['createdDate'].toString().slice(5, 7);
      this.date += ' / ' + d['createdDate'].toString().slice(0, 4);
      console.log('d = ', this.date);
      this.userProfile.createdDate = this.date;
    });
  }

}
