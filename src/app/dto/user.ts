import {License} from "./license";
import {School} from "./school";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  school: School;
}

export class Student extends User {
  licences: License[];
}

export class Monitor extends User {
}
