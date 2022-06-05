import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmeRoutingModule } from './contactme-routing.module';
import { ContactmeComponent } from './contactme.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    ContactmeRoutingModule, 
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactmeModule { }
