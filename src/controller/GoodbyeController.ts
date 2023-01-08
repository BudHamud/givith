import { ComplexResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class GoodbyeController implements IGoodbyeController {
    public async getDate(name?: string): Promise<ComplexResponse> {
        LogSuccess('[api/goodbye] Get Request')

        return {
            date: `Goodbye ${name || 'World'}`
        }
    }
    
}