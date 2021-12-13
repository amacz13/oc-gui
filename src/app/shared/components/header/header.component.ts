import { Component, OnInit } from '@angular/core';
import {PlatformService} from "../../../core/services/platform/platform.service";
import {ElectronService} from "../../../core/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMacOS = false;

  constructor(private platform: PlatformService, private electronService: ElectronService) { }

  ngOnInit(): void {
    this.isMacOS = this.platform.isMacOS();
  }

  mouseEnter() {
    this.electronService.ipcRenderer.send('set-ignore-mouse-events', true, { forward: true });
  }

  mouseLeave() {
    this.electronService.ipcRenderer.send('set-ignore-mouse-events', false)
  }

  close() {
    console.log('close')
    this.electronService.ipcRenderer.send('close-app')
  }
}
