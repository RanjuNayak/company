import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  title = 'Internship Program!';

  CostOfOurInternship:number;
  data = {
    nextCertificateUpdate: new Date("2019-10-25"),

  }


  constructor() {  this.CostOfOurInternship = 5000000; }


  ngOnInit() {
  }

}
