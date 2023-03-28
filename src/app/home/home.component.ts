import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  online = navigator.onLine;

  status = "";





  ngOnInit(): void {

    if(this.online == true){

      this.status= "User is online"
    }
    else{
      this.status= "User is offline"
    }
  }





}
