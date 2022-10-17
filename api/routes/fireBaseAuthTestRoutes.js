import * as express from "express";
import { credentials } from "../models/firebase"

import { testUserController } from '../controllers/firebaseAuthTest';

const router = express.Router();

let credentialedUserController = testUserController(credentials)

exports.postsNewUser = router.post('/userTest', credentialedUserController.postsNewUser())