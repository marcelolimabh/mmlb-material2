import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule, MatCardModule, MatButtonModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  entryComponents:[MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
