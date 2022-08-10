export const calculateTeamFinanceReport = (team, salaries) => {
    
    const report = { totalBudgetTeam: 0 }
    
    // 1. creating Object like {category: amount}
    const teamSpecialists = {};
    team.forEach(({ specialization }) => {
        Object.keys(teamSpecialists).includes(specialization) ? teamSpecialists[specialization] += 1 : teamSpecialists[specialization] = 1;
    });

    // 2. Calculating report 
    for (const category in teamSpecialists) {
        if (salaries[category]) {
            const { salary, tax } = salaries[category];
            teamSpecialists[category] = Math.round(teamSpecialists[category] * salary * (1 / (1 - (tax.slice(0, -1) / 100))));
            // 3. Creating report Object
            report.totalBudgetTeam += teamSpecialists[category];
            report["totalBudget" + category] = teamSpecialists[category];
        }
    }

    return report;
}