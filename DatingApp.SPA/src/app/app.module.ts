import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/message.resolver';
import { MemberMessagesComponent } from './members/member-messages/member-messages.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { JwtHttpInterceptor } from './_services/JwtHttpInterceptor';

export function getAccessToken(): string {
    return localStorage.getItem('token');
}

export const jwtConfig = {
    tokenGetter: getAccessToken,
    whitelistedDomains: ['localhost:5000']
};

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        RegisterComponent,
        MemberListComponent,
        ListsComponent,
        MessagesComponent,
        MemberCardComponent,
        MemberDetailComponent,
        MemberEditComponent,
        PhotoEditorComponent,
        TimeAgoPipe,
        MemberMessagesComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        TabsModule.forRoot(),
        NgxGalleryModule,
        FileUploadModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        ButtonsModule.forRoot(),
        HttpClientModule,
        JwtModule.forRoot({
            config: jwtConfig
        })
    ],
    providers: [
        AuthService,
        AlertifyService,
        AuthGuard,
        UserService,
        MemberDetailResolver,
        MemberListResolver,
        MemberEditResolver,
        PreventUnsavedChanges,
        ListsResolver,
        MessagesResolver,
        ErrorInterceptorProvider,
        { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
