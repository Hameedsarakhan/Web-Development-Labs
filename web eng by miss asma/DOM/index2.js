import PermenantEmployee from "./peremployee.js";
import PartTimeEEmployee from "./tempemployee.js";
const PE = new PermenantEmployee("ali",12,"Karachi",120000,"Professor","7 hours");
const PTE = new PartTimeEEmployee("jhon",64,"Lahore",64500,"chaprasi", "2 hours");
console.log(PE.ShowData());
console.log(PTE.ShowData());

