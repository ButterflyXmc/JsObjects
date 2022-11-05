let company = {
    name: `company One`,
    yearly_revenue: 12000000,
    ceo: `CEO One`,
    number_of_employees: 12
}

if (company [`yearly_revenue`]) {
    console.log(company [`name`]);
    console.log(company [`ceo`]);
    console.log(company [`number_of_employees`]);
} else {
    console.log(`Keep trying!`);
}
