import { Dating } from "./dating.js";
import { User } from "./user.js";
import { Doctors } from "./doctors.js";


User.hasMany(Dating, { foreignKey: "userID" });
Doctors.hasMany(Dating, { foreignKey: 'doctorID' });

export {User, Doctors, Dating}