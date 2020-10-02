import * as express from "express";
import { GetHome } from "./Routing/GetRoutes/Home";
import { RequestHandler } from "./Routing/RequestHandler";

export default class Server
{
    constructor(
        public port: number = 5000
    ) { }

    public async run(): Promise<void>
    {
        console.log(`Server is starting`);
        const eApp: express.Application = express();

        this.registerGetRoutes(eApp);
        this.registerPostRoutes(eApp);

        eApp.listen(this.port, () => console.log(`Server started on port ${this.port}`));
    }

    private registerGetRoutes(eApp: express.Application): void
    {
        eApp.get("/", GetHome.handle);
        eApp.get("*", RequestHandler.handle);
    }

    private registerPostRoutes(eApp: express.Application): void
    {
        eApp.post("*", RequestHandler.handle);
    }
}