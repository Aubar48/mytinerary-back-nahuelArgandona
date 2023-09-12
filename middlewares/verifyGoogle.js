import { OAuth2Client } from "google-auth-library";

export default async (req, res, next) => {
    const client = new OAuth2Client();
    const { token_google } = req.body;
    const vefifyTicket = await client.verifyIdToken({
        idToken: token_google,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = vefifyTicket?.getPayload();
    console.log(payload);
    let user = {
        name: payload.given_name,
        lastName: payload.family_name,
        mail: payload.email,
        photo: payload.picture,
        password: "012358aZ8@",
        country: payload.locale,
        online: true,
        google: true,
        role: 0
    };
    req.user = user;
    return next();
}