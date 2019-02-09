import { StatusComponent } from './partials/status.component';
import { BlogPostModule } from './../assets/blogposts/app.blogposts';
import { FeedbackComponent } from './feedback.component';
import { BlogPostViewerComponent } from './partials/blogpostviewer.component';
import { BlogHomepageComponent } from './partials/bloghome.component';
import { SafeHtmlPipe } from './partials/safehtml.pipe';
import { TOCComponent, TOCDirective } from './partials/toc.directive';
import { MatIconRegistry } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// Modules
import { MaterialModule } from './material.module';
// App routing
import { AppRouting } from './app.routing';
// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './partials/home.component';
import { PageNotFoundComponent } from './partials/page-not-found.component';
// App dialogs
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { UrlDialog } from './dialogs/urldialog.component';
import { ShareDialog } from './dialogs/sharedialog.component';
import { ExperimentsDialog } from './dialogs/experimentsdialog.component';
// App services
import { UrlDialogService } from './services/urldialog.service';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    TOCComponent,
    BlogHomepageComponent,
    BlogPostViewerComponent,
    // App dialogs
    SettingsDialog,
    UrlDialog,
    ShareDialog,
    ExperimentsDialog,
    // App directives
    TOCDirective,
    // App pipes
    SafeHtmlPipe,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    FlexLayoutModule,
    BlogPostModule
  ],
  providers: [
    UrlDialogService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SettingsDialog,
    UrlDialog,
    ShareDialog,
    ExperimentsDialog
  ]
})
export class AppModule {
  /* Icons
   * From MaterialDesignIcons
   * https://materialdesignicons.com
   */
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg'));
  }
}
