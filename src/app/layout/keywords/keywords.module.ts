import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {KeywordsRoutingModule} from './keywords-routing.module';
import {KeywordsComponent} from './keywords.component';

@NgModule({
    imports: [CommonModule, KeywordsRoutingModule, PageHeaderModule, HttpModule, NgbModule.forRoot()],
    declarations: [KeywordsComponent]

})
export class KeywordsModule {}
