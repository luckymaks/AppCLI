import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./index";

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    },
    { path: "home", component: HomeComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
