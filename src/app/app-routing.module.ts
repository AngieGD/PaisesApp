import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router'
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerRegionComponent } from './pais/pages/ver-region/ver-region.component';

const routes: Routes =[
    {
        // Es la ruta que se muestra en la URL
        path: '',

        // El componente que voy a mostrar en esa ruta
        component: PorPaisComponent,

        // Se asegura de que este vacio el resto del URL
        pathMatch: 'full'

        
    },
    {
        // Se va mostrar ese componente cuando alguien entre en /region
        path: 'region',

        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerRegionComponent //ES PAIS
    },
    // La siguiente ruta es para cuando 
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports:[
        // las rutas .forRoot son principales, tambien da la opción de hijas
        RouterModule.forRoot( routes )
        
    ],
    exports: [
        RouterModule

    ]
})
export class AppRoutingModule {

}