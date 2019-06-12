import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  { path: 'test-sqlite', loadChildren: './test-sqlite/test-sqlite.module#TestSQLitePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
