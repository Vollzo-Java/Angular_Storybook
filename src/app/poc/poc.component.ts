import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  
  
  closeNav() {
    var el =  document.getElementById("accordionSidebar")!;
    var openNew =  document.getElementById("sidebarToggleTop")!
    var closeNew =  document.getElementById("sidebarToggleTop2")!
   el.style.display = "block";
   openNew.style.display = 'block'
   closeNew.style.display = 'none'

    // document.getElementById("main").style.marginLeft = "20%";
    // document.getElementById("main").style.width = "80%";
    // document.getElementById("open-icon").style.display = "none";
    // document.getElementById("page-heading").style.marginLeft = "18px";
  }
  openNav() {
    var el =  document.getElementById("accordionSidebar")!
    var openNew =  document.getElementById("sidebarToggleTop")!
    var closeNew =  document.getElementById("sidebarToggleTop2")!
   el.style.display = "none";
   openNew.style.display = 'none'
   closeNew.style.display = 'block'


    // document.getElementById("main").style.marginLeft = "0";
    // document.getElementById("main").style.width = "100%";
    // document.getElementById("open-icon").style.display = "block";
    // document.getElementById("page-heading").style.marginLeft = "53px";

  }
  

}
