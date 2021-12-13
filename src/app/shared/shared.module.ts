import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { EnvironmentListComponent } from './components/environment-list/environment-list.component';
import { EnvironmentComponent } from './components/environment-list/environment/environment.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, EnvironmentListComponent, EnvironmentComponent, HeaderComponent],
  imports: [CommonModule, TranslateModule, FormsModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, EnvironmentListComponent, HeaderComponent]
})
export class SharedModule {}
