import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult;
  constructor(public dialog: MatDialog) {

   }

  ngOnInit() {
  }

  openDialog(){
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'This text is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })

  }
}
