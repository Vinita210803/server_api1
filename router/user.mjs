import express from "express";
import { User } from "../User.mjs";
import CONSTANT from '../constant/index.mjs'
const router=express.Router()

const user = new User()

router.get(CONSTANT.user.read, user.read)
router.post(CONSTANT.user.login, user.login)
router.post(CONSTANT.user.add, user.add)
router.post(CONSTANT.user.updateRole, user.updateRole)

export default router