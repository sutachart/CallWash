import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'developers',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'condition',
    loadChildren: './condition/condition.module#ConditionPageModule'
  },
  {
    path: 'call-wash',
    loadChildren: './call-wash/call-wash.module#CallWashPageModule'
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostPageModule'
  },
  { path: 'location-list', loadChildren: './pages/location-list/location-list.module#LocationListPageModule' },
  { path: 'location-add-detail', loadChildren: './pages/location-add-detail/location-add-detail.module#LocationAddDetailPageModule' },
  { path: 'edit-location-detail', loadChildren: './pages/edit-location-detail/edit-location-detail.module#EditLocationDetailPageModule' },
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
  { path: 'developers/:id', loadChildren: './pages/developer/developer.module#DeveloperPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
