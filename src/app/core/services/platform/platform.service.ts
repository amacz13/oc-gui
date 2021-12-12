import {Injectable, OnInit} from '@angular/core';
import {ElectronService} from "../electron/electron.service";

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private platform: string = 'any';

  constructor(private electronService: ElectronService) {
    this.platform = this.electronService.process.platform;
    console.log('Running on '+this.platform);
  }

  isWindows(): boolean {
    return this.platform === 'win32';
  }

  isMacOS(): boolean {
    return this.platform === 'darwin';
  }

  isLinux(): boolean {
    return this.platform === 'linux';
  }



}
