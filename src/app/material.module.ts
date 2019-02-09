/**
 * This module is meant for imports for ngMaterial so that the amount of code to import is reduced
 * @version 1.0.0
 * @example Import into <code>app.module.ts</code> as <code>MarketMaterialModule</code>
 * @author Edric Chan
 * @description Based on this PR which is merged:
 * https://github.com/angular/material2/pull/3840
 */

// NgModule
import { NgModule } from '@angular/core';
// MaterialModules to import
import {
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRadioModule,
  MatProgressBarModule,
  MatGridListModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';
// List of components to import
const MATERIAL_MODULES = [
  MatInputModule,
  MatDialogModule,
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRadioModule,
  MatGridListModule,
  MatSelectModule,
  MatExpansionModule
];
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
// Export the module
export class MaterialModule { }
