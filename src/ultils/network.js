import DefaultConst from "../shared/defaultConst";

const domain = DefaultConst.ApiDomain;
export default class Network {

    static async GetAnonymous(path) {
        return await fetch(domain + path, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
    }

    static async GetAuthentication(path, token = "") {
        return await fetch(domain + path, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "JWT " + token
            }
        });
    }

    static async PostAnonymous(path, body) {
        return await fetch(domain + path, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    static async PostAuthentication(path, token, body) {
        return await fetch(domain + path, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": "JWT " + token
            },
            body: JSON.stringify(body)
        });
    }
    static async PostAnonymousFormData(path, body) {
        if (typeof body !== FormData)
            return new Error("Body is not form data");
        return await fetch(domain + path, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: body
        });
    }

    static async PostAuthenticationFormData(path, token, body) {
        if (typeof body !== FormData)
            return new Error("Body is not form data");
        return await fetch(domain + path, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": "JWT " + token
            },
            body: body
        });
    }
}