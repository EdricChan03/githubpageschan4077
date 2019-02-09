import { StatusComponent } from './partials/status.component';
import { FeedbackComponent } from './feedback.component';
import { BlogPostViewerComponent } from './partials/blogpostviewer.component';
import { BlogHomepageComponent } from './partials/bloghome.component';
import { PageNotFoundComponent } from './partials/page-not-found.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App components
import { HomeComponent } from './partials/home.component';
/**
 * Routes used for routing the app
 * @version 1.0.2
 * @author Edric Chan
 * @example <caption>Importing into `app.module.ts`</caption>
 * // Import into app.module.ts
 * // app.module.ts
 * import {routing} from './app.routing';
 *
 * @NgModule({
 *  imports: [
 *    routing
 *  ]
 * })
 * @description Paths to route to with components
 */
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'blog', children: [
      {
        path: ':id', children: [
          { path: '', component: BlogPostViewerComponent }
        ],

      },
      { path: '', component: BlogHomepageComponent }
    ]
  },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'status', component: StatusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
