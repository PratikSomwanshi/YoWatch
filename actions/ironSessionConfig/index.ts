import { SessionOptions } from "iron-session";

export interface SessionData {
    email?: string;
    userName?: string;
    isLoggedIn: boolean;
    token?: string;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
    password: "uNN{&>(p._,WRmG3O1D!0$80#N!5OI&R",
    cookieName: "yowatch-session",
    cookieOptions: {
        httpOnly: true,
        secure: false,
    },
};
