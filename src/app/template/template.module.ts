import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ]
})
export class TemplateModule { }
