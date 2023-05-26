import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './components/base-table/base-table.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { TableComponent } from './material/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { MatOptionModule, MAT_DATE_FORMATS, NativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { ButtonComponent } from './material/button/button.component';
import { IconButtonComponent } from './material/icon-button/icon-button.component';
import { UserAccountMenuComponent } from './components/user-account-menu/user-account-menu.component';
import { MenuComponent } from './material/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MerchantSelectComponent } from './components/merchant-select/merchant-select.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { CurrencySelectComponent } from './components/currency-select/currency-select.component';
import { MovementTypeSelectComponent } from './components/movement-type-select/movement-type-select.component';
import { DescriptionTypeSelectComponent } from './components/description-type-select/description-type-select.component';
import { BalanceConsultationWidgetComponent } from './components/balance-consultation-widget/balance-consultation-widget.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FileLoaderDialogComponent } from './components/file-loader-dialog/file-loader-dialog.component';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { SpinnerComponent } from './material/spinner/spinner.component';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputFieldLabelColorDirective } from './directives/input-field-label-color/input-field-label-color.directive';

@NgModule({
  declarations: [
    BaseTableComponent,
    InputFieldComponent,
    TableComponent,
    InputSelectComponent,
    DatepickerComponent,
    PageTemplateComponent,
    ButtonComponent,
    IconButtonComponent,
    UserAccountMenuComponent,
    MenuComponent,
    ConfirmationDialogComponent,
    MerchantSelectComponent,
    CountrySelectComponent,
    CurrencySelectComponent,
    MovementTypeSelectComponent,
    DescriptionTypeSelectComponent,
    BalanceConsultationWidgetComponent,
    FormGroupComponent,
    FileLoaderDialogComponent,
    InputLabelComponent,
    SpinnerComponent,
    CustomSpinnerComponent,
    NavbarComponent,
    InputFieldLabelColorDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    NativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
  ], exports: [
    BaseTableComponent,
    InputFieldComponent,
    InputSelectComponent,
    DatepickerComponent,
    PageTemplateComponent,
    ButtonComponent,
    IconButtonComponent,
    UserAccountMenuComponent,
    MerchantSelectComponent,
    CountrySelectComponent,
    CurrencySelectComponent,
    MovementTypeSelectComponent,
    DescriptionTypeSelectComponent,
    BalanceConsultationWidgetComponent,
    FileLoaderDialogComponent,
    FormGroupComponent,
    SpinnerComponent,
    CustomSpinnerComponent,
    NavbarComponent,
    InputFieldLabelColorDirective,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: { parse: { dateInput: 'YYYY-MM-DD' }, display: { dateInput: 'YYYY-MM-DD', monthYearLabel: 'MMM YYYY', dateA11yLabel: 'LL', monthYearA11yLabel: 'MMMM YYYY' } } }
  ]
})
export class UiModule { }
