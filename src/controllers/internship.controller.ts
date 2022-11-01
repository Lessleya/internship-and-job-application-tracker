import { Request, Response, NextFunction } from "express";
import Meal from "../models/internship";

const create = async (req: Request, res: Response, next: NextFunction) => {
  /*
    #swagger.parameters["innrship"] = {
        in: "body",
        description: "The internship info",
        required: true,
        schema: {
          $position: "Full-stack",
          details: [{company: "Adobe", appDeadline: "10/25/2022", internTitle: "Full-stack Developer",aplied:"Yes", interviewed:"no", priority: "10", referral: "Rene" }]
        }
    }
   */

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