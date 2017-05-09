import { ProjectMarketComponent } from './partials/projects/market.component';
import { ProjectScriptsForMacComponent } from './partials/projects/scriptsformac.component';
import { ProjectMdTodoComponent } from './partials/projects/mdtodo.component';
import { PageNotFoundComponent } from './partials/page-not-found.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App components
import { HomeComponent } from "./partials/home.component";
import { AboutComponent } from './partials/about.component';
// App components -> Projects
import { ProjectFirstModComponent } from './partials/projects/firstmod.component';
import { ProjectSwiftComponent } from './partials/projects/swiftapp.component';
import { ProjectsComponent } from './partials/projects.component';
/**
 * Routes used for routing the app
 * @version 1.0.2
 * @author Edric Chan
 * @example In your `app.module.ts`, import `routing` into `imports` in `NgModule`
 * @description Paths to route to with components
 * @type Routes[]
 */
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent, children: [
    {path: 'swift', component: ProjectSwiftComponent},
    {path: 'mod', component: ProjectFirstModComponent},
    {path: 'md-todo', component: ProjectMdTodoComponent},
    {path: 'scripts-for-mac', component: ProjectScriptsForMacComponent},
    {path: 'market2', component: ProjectMarketComponent}
  ]},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);