import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { BodyComponent } from './body/body.component';
//import { BookListComponent } from './book-list/book-list.component'; // Adjust the path as per your project structure

const routes: Routes = [
  { path: 'books', component: BodyComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
