import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppMaterialModule} from "./app-material.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";

import {NotificationsComponent} from "./notifications/notifications.component";
import {UsersComponent} from "./users/users.component";
import {LoggingComponent} from "./logging/logging.component";

import {MessagesComponent} from "./messages/messages.component";
import {MessageInputComponent} from "./messages/message-input/message-input.component";
import {MessageContentComponent} from "./messages/message-content/message-content.component";
import {MessageTitleComponent} from "./messages/message-title/message-title.component";

import {OptionsComponent} from "./options/options.component";
import {OptionsUsernameComponent} from "./options/options-username/options-username.component";
import {OptionsImageComponent} from "./options/options-image/options-image.component";
import {OptionsLogoutComponent} from "./options/options-logout/options-logout.component";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NotificationsComponent,
    MessageInputComponent,
    MessageContentComponent,
    UsersComponent,
    LoggingComponent,
    MessageTitleComponent,
    OptionsComponent,
    OptionsUsernameComponent,
    OptionsImageComponent,
    OptionsLogoutComponent
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
