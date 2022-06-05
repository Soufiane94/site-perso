import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cv', loadChildren: () => import('./cv/cv.module').then(m => m.CvModule) }, { path: 'contactme', loadChildren: () => import('./contactme/contactme.module').then(m => m.ContactmeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
