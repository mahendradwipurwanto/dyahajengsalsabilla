import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    NgbToastModule, NgbTooltipModule, NgbCollapseModule, NgbAccordionModule, NgbNavModule, NgbCarouselModule
} from '@ng-bootstrap/ng-bootstrap';
import {LandingScrollspyDirective} from './landingscrollspy.directive';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';

// Swiper Slider
import {SlickCarouselModule} from 'ngx-slick-carousel';

import {LightboxModule} from 'ngx-lightbox';

// Load Icons
import {defineElement} from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {OverviewComponent} from "./dashboard/components/overview/overview.component";
import {PortofolioComponent} from "./dashboard/components/portofolio/portofolio.component";
import {FaqComponent} from "./dashboard/components/faq/faq.component";
import {FooterComponent} from "./dashboard/components/footer/footer.component";
import {ScrollToModule} from "@nicky-lenaers/ngx-scroll-to";


@NgModule({
    declarations: [
        DashboardComponent,
        OverviewComponent,
        PortofolioComponent,
        FaqComponent,
        FooterComponent,
        LandingScrollspyDirective
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,

        NgbToastModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbCollapseModule,
        NgbAccordionModule,
        NgbCarouselModule,
        NgbNavModule,

        SimplebarAngularModule,
        SlickCarouselModule,
        LightboxModule,
        SharedModule,
        ScrollToModule.forRoot(),
    ],
})
export class PagesModule {
    constructor() {
        defineElement(lottie.loadAnimation);
    }
}
