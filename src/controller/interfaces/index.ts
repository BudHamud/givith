import { BasicResponse, ComplexResponse } from "../types";


export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodbyeController {
    getDate(name?:string) : Promise<ComplexResponse>
}