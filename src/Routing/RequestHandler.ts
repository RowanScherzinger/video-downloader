import express = require("express");
import { HTTPCode } from "../Utils/GlobalEnums";

export abstract class RequestHandler
{
    public static async handle(req: express.Request, res: express.Response): Promise<void>
    {
        console.log(`Route not implemented: ${req.url}`);
        res.sendStatus(HTTPCode.NOT_IMPLEMENTED);
    }
}