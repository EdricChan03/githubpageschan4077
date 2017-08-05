import { BlogPostViewerComponent } from './partials/blogpostviewer.component';
import { BlogHomepageComponent } from './partials/bloghome.component';
import { SafeHtmlPipe } from './partials/safehtml.pipe';
import { TOCComponent, TOCDirective } from './partials/toc.directive';
import { MdIconRegistry, OverlayContainer } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MarkdownModule } from "angular2-markdown";
import { FlexLayoutModule } from "@angular/flex-layout";
// Modules
import { Chan4077GithubIoMaterialModule } from "./chan4077.github.io.module";
// App routing
import { routing } from "./app.routing";
// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './partials/home.component';
import { PageNotFoundComponent } from './partials/page-not-found.component';
// App dialogs
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { UrlDialog } from './dialogs/urldialog.component';
import { ShareDialog } from "./dialogs/sharedialog.component";
import { ExperimentsDialog } from "./dialogs/experimentsdialog.component";
// App services
import { UrlDialogService } from './services/urldialog.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
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
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Chan4077GithubIoMaterialModule,
    routing,
    MarkdownModule.forRoot(),
    FlexLayoutModule
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
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, overlayContainer: OverlayContainer) {
    // iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/mdi.svg'));
  }
}