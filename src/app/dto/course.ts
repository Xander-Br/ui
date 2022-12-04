import {Monitor, Student} from "./user";

export class Course {
  id?: number;
  title?: string;
  student?: Student;
  monitor?: Monitor;
  date: string;
  startAt: string;
  duration: number;
  comments?: Comment[];

}
