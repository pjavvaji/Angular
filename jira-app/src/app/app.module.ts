import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule } from '@angular/material';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DefectListComponent } from './defectList/defect-list.component';
import { DefectDetailComponent } from './defectDetail/defect-detail.component';
import { DefectService} from 'app/defectUtils/defect.service';
import { AddDefectComponent } from './newDefect/add-defect.component';

@NgModule({
  declarations: [
    AppComponent,
    DefectListComponent,
    DefectDetailComponent,
    AddDefectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'defects',
        component: DefectListComponent
      }
    ]),
    BrowserAnimationsModule,
    MdDialogModule,
    MaterialModule.forRoot()
  ],
  entryComponents: [
    AddDefectComponent
  ],
  providers: [DefectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
