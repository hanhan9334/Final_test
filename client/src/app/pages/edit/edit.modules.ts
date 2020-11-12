import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../model/model.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [EditComponent],
    exports: [EditComponent] 
})
export class EditModule {}