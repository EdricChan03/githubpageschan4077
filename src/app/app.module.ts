import { TOCComponent } from './partials/toc.directive';
import { MdIconRegistry, OverlayContainer } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MarkdownModule } from "angular2-markdown";
import { FlexLayoutModule } from "@angular/flex-layout";
// Modules for Material
import { Chan4077GithubIoMaterialModule } from "./chan4077.github.io.module";
// App routing
import { routing } from "./app.routing";
// App components
import { AboutComponent } from './partials/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './partials/home.component';
import { PageNotFoundComponent } from './partials/page-not-found.component';
// App components -> Projects
import { ProjectSwiftComponent } from './partials/projects/swiftapp.component';
import { ProjectsComponent } from './partials/projects.component';
import { ProjectFirstModComponent } from './partials/projects/firstmod.component';
// App dialogs
import { SendFeedbackDialog } from "./dialogs/sendfeedback.component";
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
    AboutComponent,
    PageNotFoundComponent,
    // App projects
    ProjectsComponent,
    ProjectSwiftComponent,
    ProjectFirstModComponent,
    TOCComponent,
    // App dialogs
    SendFeedbackDialog,
    SettingsDialog,
    UrlDialog,
    ShareDialog,
    ExperimentsDialog
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
    UrlDialogService,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SendFeedbackDialog,
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
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
  }
}