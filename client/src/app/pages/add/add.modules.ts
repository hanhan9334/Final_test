import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../model/model.module';
import { AddComponent } from './add.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [AddComponent],
    exports: [AddComponent] 
})
export class AddModule {}