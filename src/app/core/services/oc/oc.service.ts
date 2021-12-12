import { Injectable } from '@angular/core';
import {ElectronService} from "../electron/electron.service";
import {HttpClient} from "@angular/common/http";
import {PlatformService} from "../platform/platform.service";

@Injectable({
  providedIn: 'root'
})
export class OcService {

  constructor(private electronService: ElectronService, private httpClient: HttpClient, private platformService: PlatformService) { }

  private execute(command, callback) {
    this.electronService.childProcess.exec(command, ((error, stdout, stderr) => callback(error, stdout, stderr)));
  }

  isOpenshiftClientInstalled(): Promise<boolean> {
    return new Promise<boolean>((resolve => {
      this.execute('oc login', (error, stdout, stderr) => {
        resolve(!(error || stderr));
      })
    }));
  }

  downloadOpenshiftClient() {
    if (this.platformService.isMacOS()) {
      this.httpClient.get('assets/openshift-origin-client-tools-v3.11.0-0cbc58b-mac.zip',{observe: 'response', responseType: 'blob'}).subscribe(response => {
        console.log(response)
      })
    }
  }
}
