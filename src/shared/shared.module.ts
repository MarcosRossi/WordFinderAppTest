import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class SharedModule { }
