import express from "express";
import { Team } from "../Team.mjs";
import CONSTANT from '../constant-1/team.mjs'
const router=express.Router()

const team = new Team()

router.get(CONSTANT.team.read, team.read)
router.get(CONSTANT.team.find, team.find)
router.post(CONSTANT.team.add, team.add)
// router.post(CONSTANT.team.updateRole, team.updateRole)

export default router