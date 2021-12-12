import { Component, OnInit } from '@angular/core';
import {OcService} from "../core/services/oc/oc.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ocService: OcService) { }

  ngOnInit(): void {
    this.ocService.isOpenshiftClientInstalled().then(isInstalled => {
      if (!isInstalled) {
        //alert('OC Not installed')
        this.ocService.downloadOpenshiftClient();
      }
    })
  }



}
