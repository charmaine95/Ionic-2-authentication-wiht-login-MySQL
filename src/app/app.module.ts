import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Admin } from '../pages/admin/admin';
import { ModalPage } from '../pages/modal-page/modal-page';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Admin,
    ModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Admin,
    ModalPage
  ],
  providers: []
})
export class AppModule {}
