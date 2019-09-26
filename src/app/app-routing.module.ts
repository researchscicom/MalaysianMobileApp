import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./welcome/home/home.module').then(m => m.HomePageModule)},
  { path: 'terms', loadChildren: './welcome/terms/terms.module#TermsPageModule' },
  { path: 'instruction', loadChildren: './welcome/instruction/instruction.module#InstructionPageModule' },
  { path: 'dashboard', loadChildren: './welcome/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile-list', loadChildren: './profile-list/profile-list.module#ProfileListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
