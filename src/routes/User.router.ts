import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

import UserController from "../controllers/User.controller";

const userRouter: Router = Router();
const prisma: PrismaClient = new PrismaClient();
const userController: UserController = new UserController(prisma);

userRouter.get("/", async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Returns a all users in database.'
  */
  await userController.getAllUsers(req, res);
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Returns a user by id.'
  */
  await userController.getUser(req, res);
});

userRouter.post("/", async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Creates a user.'
  */
  await userController.createUser(req, res);
});

userRouter.put("/:id", async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Updates the name of a user by his id.'
  */
  await userController.updateUser(req, res);
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  /*
    #swagger.tags = ['User']
    #swagger.summary = 'Deletes a user by his id.'
  */
  await userController.deleteUser(req, res);
});

export default userRouter;
