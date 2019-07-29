import Network from "../network";

export default class HomeApi {
    static async GetData() {
        var body = {
            "username": "",
            "pass": "@"
        };
        var respone = await Network.PostAnonymous("/user/Login", body);
        if (respone.status !== 204)
            throw new Error("Can't get body")
        if (respone.status === 200)
            return;
        return "ok";
    }
}