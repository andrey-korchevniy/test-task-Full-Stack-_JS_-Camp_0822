import { team1 } from "data/team1";
import { team2 } from "data/team2";
import { salaries1 } from "data/salaries1";
import { salaries2 } from "data/salaries2";
import { calculateTeamFinanceReport } from "js/calculateTeamFinanceReport";

const report1 = calculateTeamFinanceReport(team1, salaries1);
console.log(JSON.stringify(report1));

const report2 = calculateTeamFinanceReport(team2, salaries2);
console.log(JSON.stringify(report2));
