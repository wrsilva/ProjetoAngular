import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { MenuVerticalComponent } from './components/menuvertical/menuvertical.component';
import { MenuHorizontalComponent } from './components/menuhorizontal/menuhorizontal.component'
import { HomeComponent } from './components/home/home.component';
import { ProdutosHome } from './components/produtoshome/produtoshome.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuVerticalComponent,
        MenuHorizontalComponent,
        HomeComponent,
        ProdutosHome,
        CounterComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: ProdutosHome },
            { path: 'counter', component: CounterComponent },
            //{ path: 'vitrine-principal', component: VitrinePrincipal },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
