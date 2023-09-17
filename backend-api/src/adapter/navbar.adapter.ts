import { Response } from "express";
import { UserRepository } from "../repositories/index.repository";
import { isValidEmail, required } from "../services/validations";
import { BaseResponse } from "../services/response";

class NavbarAdapter extends UserRepository
{

    constructor(){ super() }

}

export { NavbarAdapter }