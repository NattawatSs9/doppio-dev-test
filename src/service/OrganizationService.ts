import { API } from "./api";
import axios from "axios";
export class OrganizationService {
  static async get() {
    try {
        axios.defaults.withCredentials = true;
        let result = await axios.get(API.organization + "?pagesize=20&page=1&sortcol=id&sortorder=desc", 
        { 
            headers: {
                "Cookie": "access_token=eyJ1c2VybmFtZSI6IkZsYXZpbyJ9.eyJ1c2VybmFtZSI6IkZsYXZpbyJ9.eyJ1c2VybmFtZSI6IkZsYXZpbyJ9; Path=/; Expires=Wed, 24 Jan 2024 07:00:13 GMT;"
            }, 
            withCredentials: true });
        console.log(result);
        } catch (err) {
        throw err;
    }
  }
}
