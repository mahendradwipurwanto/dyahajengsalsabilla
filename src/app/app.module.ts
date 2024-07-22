import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PagesModule} from "./pages/pages.module";

// Auth
import {HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {initFirebaseBackend} from './authUtils';
import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';

// Store
import {rootReducer} from './store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {AuthenticationEffects} from './store/Authentication/authentication.effects';

// Language
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient): any {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

if (environment.defaultauth === 'firebase') {
    initFirebaseBackend(environment.firebaseConfig);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
        StoreModule.forRoot(rootReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        EffectsModule.forRoot([
            AuthenticationEffects,
        ]),
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule
    ], providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModule {
}
