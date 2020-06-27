import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbInputModule} from '@nebular/theme';
import {RouterModule} from "@angular/router";

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class SharedModule {
}
