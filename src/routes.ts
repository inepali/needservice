import { NeedController } from "./controller/NeedController";

export const Routes = [{
    method: "get",
    route: "/needs",
    controller: NeedController,
    action: "all"
}, {
    method: "get",
    route: "/needs/:id",
    controller: NeedController,
    action: "one"
}, {
    method: "post",
    route: "/needs",
    controller: NeedController,
    action: "save"
}, {
    method: "delete",
    route: "/needs/:id",
    controller: NeedController,
    action: "remove"
},  {
    method: "get",
    route: "/needbyid/:id",
    controller: NeedController,
    action: "findById"
}

];