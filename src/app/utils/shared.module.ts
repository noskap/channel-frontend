import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbInputModule} from '@nebular/theme';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class SharedModule {
}
