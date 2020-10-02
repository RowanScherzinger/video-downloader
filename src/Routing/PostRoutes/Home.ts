import * as express from "express";
import { HTTPCode } from "../../Utils/GlobalEnums";
import { RequestHandler } from "../RequestHandler";

export class PostHome extends RequestHandler
{
    public static async handle(req: express.Request, res: express.Response): Promise<void>
    {
        res.status(HTTPCode.NOT_IMPLEMENTED).send({
            err: HTTPCode.NOT_IMPLEMENTED,
            msg: `This route ${req.url} has no POST implementation yet.`
        });
    }
}