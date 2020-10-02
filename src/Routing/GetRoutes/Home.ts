import * as express from "express";
import { HTTPCode } from "../../Utils/GlobalEnums";
import { RequestHandler } from "../RequestHandler";

export class GetHome extends RequestHandler
{
    public static async handle(req: express.Request, res: express.Response): Promise<void>
    {
        res.status(HTTPCode.OK).send(req.url);
    }
}