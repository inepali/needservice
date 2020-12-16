import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
//import {Need} from "./entity/Need";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    var port : any;
    var server = app.listen(process.env.PORT || 3000, function () {
        port = server.address().port;
        console.log("App now running on port", port);
    });

    app.get("/", function (req, res) {
        res.send(`Welcome to Needs API, running on port ${port}`);
    });
    
    console.log("Express server has started on port 3000. Open http://localhost:3000/needs to see results");

}).catch(error => console.log(error));
