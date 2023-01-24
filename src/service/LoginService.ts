import type { LoginRequestModel, LoginResponseModel } from "@/model/LoginModel";
import axios from "axios";
import { API } from "./api";

export class LoginService {
    static async login(payload: LoginRequestModel ) : Promise<LoginResponseModel> {
        try {
            let result = await axios.post<LoginResponseModel>(API.login, payload)
            return result.data
        }
        catch(err) {
            throw(err)
        }
    }
}