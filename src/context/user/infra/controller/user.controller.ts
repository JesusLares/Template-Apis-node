/* eslint-disable class-methods-use-this */
import { Request, Response } from "express";

export default class UserController {
  store(_: Request, res: Response) {
    return res.status(200).json({ name: "NameUser" });
  }

  search(_: Request, res: Response) {
    return setTimeout(() => res.status(200).json({ users: [] }), 4000);
  }

  findOne(req: Request, res: Response) {
    const searchParams = req.query;
    return res.status(200).json({ user: searchParams });
  }

  findById(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({ userId: id });
  }

  update(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({ userUpdate: id });
  }

  delete(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({ userDelete: id });
  }
}
