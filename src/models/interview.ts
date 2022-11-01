import { Schema, model } from "mongoose";



export interface IInterview {
  company: string;
  position: string;
  date: Date;
}

const interviewSchema = new Schema<IInterview>({
  company: { type: String, required: true },
  position: { type: String, required: true },
  date: { type: Date, required: true },
});

const Interview = model<IInterview>("Interview", interviewSchema);

export default Interview;