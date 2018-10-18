import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: AppService) { }

  ngOnInit() {
    this.getApiTest();
  }

  getApiTest(){
    this.apiService.get("/api/product/testing", 'noHeader').subscribe((response) => {
      console.log(response);
    }, (error) => {
      if (error.status == 401) {
      }
    });
  }
}
