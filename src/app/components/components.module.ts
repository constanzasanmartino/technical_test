import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TableObjectivesComponent } from './table/objectives/table-objectives.component';
import { TableWrapperComponent } from './table-wrapper/table-wrapper.component';
import { TablePerspectivesComponent } from './table/perspectives/table-perspectives.component';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';

const childRoutes: Routes = [
  {path:'objectives', component: TableObjectivesComponent},
  {path:'', component: TableObjectivesComponent},
  {path:'perspectives', component:TablePerspectivesComponent}
]

@NgModule({
  declarations: [
    SidenavComponent,
    TableObjectivesComponent,
    TablePerspectivesComponent,
    TableWrapperComponent,
    HeaderComponent,
    CommentsComponent
  ],
  exports: [
    SidenavComponent,
    TableObjectivesComponent,
    TablePerspectivesComponent,
    TableWrapperComponent,
    HeaderComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(childRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }