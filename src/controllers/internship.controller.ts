import { Request, Response, NextFunction } from "express";
import Internship from "../models/internship";

const create = async (req: Request, res: Response, next: NextFunction) => {


  const { position, details } = req.body;

  try {
    const response = await Internship.create({ position, details });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const index = async (req: Request, res: Response, next: NextFunction) => {
  const { details } = req.query;

  try {
    const internship = await Internship.find({ "details.company": details });
    res.json(internship);
  } catch (error) {
    next(error);
  }
};

export { create, index };