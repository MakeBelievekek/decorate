import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { HomeResolver } from '../../services/home-resolver';


const routes: Routes = [{

    path: '',
    component: HomeComponent,
    data: {
        breadcrumb: 'Főoldal',
    }, resolve: {
        images: HomeResolver,
    },

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
