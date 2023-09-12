import { Router } from "express";
import likeOrDislike from "../controllers/likes/likeOrDislike.js";
import read from "../controllers/likes/read.js";

import isLiked from "../middlewares/isLiked.js";
import passport from "../middlewares/passport.js";

const likesRouter = Router();

likesRouter.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    isLiked,
    likeOrDislike
);
likesRouter.get("/", read);

export default likesRouter;