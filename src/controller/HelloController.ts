import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { Route } from "tsoa";
import { Get, Query, Tags } from "@tsoa/runtime";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
        /*
        * Endpoints:
        * @params { string | undefined }
        * @returns { BasicResponse }
        */
        LogSuccess('[api/hello] Get Request')

        return {
            message: `Hello ${name || 'World'}`
        }
    }
    
}