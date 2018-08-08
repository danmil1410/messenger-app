import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppMaterialModule} from "./app-material.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {UsersComponent} from "./users/users.component";
import {LoggingComponent} from "./logging/logging.component";
import {CreatingComponent} from "./creating/creating.component";

import {MessagesComponent} from "./messages/messages.component";
import {MessageInputComponent} from "./messages/message-input/message-input.component";
import {MessageContentComponent} from "./messages/message-content/message-content.component";
import {MessageTitleComponent} from "./messages/message-title/message-title.component";

import {MenuComponent} from "./menu/menu.component";
import {MenuOptionsComponent} from "./menu/menu-options/menu-options.component";

import {OptionsUsernameComponent} from "./menu/menu-options/options-username/options-username.component";
import {OptionsImageComponent} from "./menu/menu-options/options-image/options-image.component";
import {OptionsLogoutComponent} from "./menu/menu-options/options-logout/options-logout.component";

import {UsersSearchComponent} from "./users/users-search/users-search.component";
import {UsersInvitesComponent} from "./users/users-invites/users-invites.component";
import {UsersFriendsComponent} from "./users/users-friends/users-friends.component";
import {InviteComponent} from "./messages/invite/invite.component";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageInputComponent,
    MessageContentComponent,
    UsersComponent,
    MessageTitleComponent,
    LoggingComponent,
    CreatingComponent,
    MenuComponent,
    MenuOptionsComponent,
    OptionsUsernameComponent,
    OptionsImageComponent,
    OptionsLogoutComponent,
    UsersSearchComponent,
    UsersInvitesComponent,
    UsersFriendsComponent,
    InviteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OptionsImageComponent, OptionsLogoutComponent, OptionsUsernameComponent]
})
export class AppModule {
}
