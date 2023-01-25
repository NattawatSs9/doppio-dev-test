import { API } from "./api";
import axios from "axios";
import type { OrganizationResponse } from "@/model/OrganizationModel";
export class OrganizationService {
  static async get() : Promise<OrganizationResponse> {
    try {
        axios.defaults.withCredentials = true;
        let result = await axios.get<OrganizationResponse>(API.organization + "?pagesize=20&page=1&sortcol=id&sortorder=desc", 
        { 
            headers: {
                "access_token": "eyJ1c2VybmFtZSI6IkZsYXZpbyJ9.eyJ1c2VybmFtZSI6IkZsYXZpbyJ9.eyJ1c2VybmFtZSI6IkZsYXZpbyJ9"
            }, 
            withCredentials: true });
        return result.data
        } catch (err) {
        throw err;
    }
  }
}
