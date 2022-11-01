import { Schema, model } from "mongoose";

export interface IDetails {
  company: string;
  appDeadline: string;
  applied: string;
  priority: number;
  referral: string;
}

export interface IInternship {
  position: string;
  details: IDetails[];
}

const detailSchema = new Schema<IDetails>({
  company: { type: String, required: true },
  appDeadline: { type: String, required: true },
  applied: { type: String, required: true },
  priority: { type: Number, required: true },
  referral: { type: String, required: false }
});

const internshipSchema = new Schema<IInternship>({
  position: { type: String, required: true },
  details: [detailSchema],
});

const internship = model("Internship", internshipSchema);

export default internship;

  /*
    #swagger.parameters["innrship"] = {
        in: "body",
        description: "The internship info",
        required: true,
        schema: {
          $position: "Full-stack",
          details: [{company: "Adobe", appDeadline: "10/25/2022",applied:"Yes", interviewed:"no", priority: "10", referral: "Rene" }]
        }
    }
   */