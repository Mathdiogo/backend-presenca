import { Router } from "express";
import { getUserByIdController } from "../../Student/Controllers/StudentController";
import { createUser } from "../User/Controllers/UserController";

const UserRoute = Router()

UserRoute.post('/user', createUser)

export default UserRoute


