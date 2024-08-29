import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./currency-converter/currency-converter.module').then((m) => m.CurrencyConverterModule),
  },
  {
    path: 'details',
    loadChildren: () => import('./currency-details/currency-details.module').then((m) => m.CurrencyDetailsModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
