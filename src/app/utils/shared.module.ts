import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbCardModule, NbInputModule} from '@nebular/theme';
import {RouterModule} from "@angular/router";

@NgModule({
  exports: [
    NbCardModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
  ],
  imports: [
    NbCardModule,
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
