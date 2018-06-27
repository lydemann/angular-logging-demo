import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpWrapperService } from '@app/core/http/http-wrapper.service';

@NgModule({
  imports: [
    HttpClient
  ],
  providers: [
    HttpWrapperService
  ]
})
export class CoreModule { 
}
