import { PrismaClient, User } from "@prisma/client";
import { Request, Response } from "express";

class UserController {
  private orm: PrismaClient;

  constructor(orm: PrismaClient) {
    this.orm = orm;
  }

  public async getAllUsers(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const users: Array<User> = await this.orm.user.findMany();

      if (!users) return res.status(404).json({ error: "No Users found!" });

      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error fetching users!" });
    }
  }

  public async getUser(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const userId: number = parseInt(id, 10);
      const user = await this.orm.user.findFirst({
        where: { id: userId }
      });

      if (!user) return res.status(404).json({ error: "User not found!" });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error fetching user!" });
    }
  }

  public async createUser(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { email, name } = req.body;
      const user = await this.orm.user.create({
        data: { email, name }
      });

      if (!user) return res.status(400).json({ error: "User not created!" });

      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error creating user!" });
    }
  }

  public async updateUser(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const userId: number = parseInt(id, 10);

      const { name } = req.body;
      const user = await this.orm.user.update({
        where: { id: userId },
        data: { name }
      });

      if (!user) return res.status(400).json({ error: "User not updated!" });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error updating user!" });
    }
  }

  public async deleteUser(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>> {
    try {
      const { id } = req.params;
      const userId: number = parseInt(id, 10);
      const user = await this.orm.user.delete({
        where: { id: userId }
      });

      if (!user) return res.status(400).json({ error: "User not deleted!" });

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Error deleting user!" });
    }
  }
}

export default UserController;
