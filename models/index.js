import { Dating } from "./dating";
import { User } from "./user";


User.hasMany(Dating, {foreignKey: "userID"});
