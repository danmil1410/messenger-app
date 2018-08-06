import {NgModule} from "@Angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AuthGuard} from "./core/auth/auth.guard";
import {MessagesComponent} from "./messages/messages.component";
import {LoggingComponent} from "./logging/logging.component";
import {CreatingComponent} from "./creating/creating.component";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  // {
  //   path: "", component: AppComponent, canActivate: [AuthGuard], runGuardsAndResolvers: "always", children: [
  //     {path: "user/:id", component: MessagesComponent}
  //   ]
  // },
  {
    path: "", component: AppComponent, canActivate: [AuthGuard], runGuardsAndResolvers: "always", children: [
      {path: "user/:id", component: MessagesComponent}
    ]
  },
  {path: "login", component: LoggingComponent},
  {path: "create", component: CreatingComponent},
  {path: "**", redirectTo: "", canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
