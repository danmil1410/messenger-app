import {NgModule} from "@Angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoggingComponent} from "./logging/logging.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./core/auth/auth.guard";
import {MessagesComponent} from "./messages/messages.component";

const appRoutes: Routes = [
  {path: "", component: LoggingComponent, pathMatch: "full"},
  {
    path: "app",
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {path: "user/:id", component: MessagesComponent}
    ],
    runGuardsAndResolvers: "always",
  },
  {path: "**", component: AppComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
