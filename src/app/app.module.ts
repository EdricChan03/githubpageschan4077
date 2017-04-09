import { MdIconRegistry } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { MarkdownModule } from "angular2-markdown";
// Modules for Material
import { Chan4077GithubIoMaterialModule } from "./chan4077.github.io.module";
// App routing
import { routing } from "./app.routing";
// App components
import { AboutComponent } from './partials/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './partials/home.component';
// App components -> Projects
import { ProjectSwiftComponent } from './partials/projects/swiftapp.component';
import { ProjectsComponent } from './partials/projects.component';
import { ProjectFirstModComponent } from './partials/projects/firstmod.component';
// App dialogs
import { SendFeedbackDialog } from "./dialogs/sendfeedback.component";
import { SettingsDialog } from './dialogs/settingsdialog.component';
import { UrlDialog } from './dialogs/urldialog.component';
// App services
import { UrlDialogService } from './services/urldialog.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // App projects
    ProjectsComponent,
    ProjectSwiftComponent,
    ProjectFirstModComponent,
    // App dialogs
    SendFeedbackDialog,
    SettingsDialog,
    UrlDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Chan4077GithubIoMaterialModule,
    routing,
    MarkdownModule.forRoot()
  ],
  providers: [
    UrlDialogService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    SendFeedbackDialog,
    SettingsDialog,
    UrlDialog
  ]
})
export class AppModule {
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
