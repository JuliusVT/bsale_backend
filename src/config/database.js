const dbOption = {
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    port: 3306,
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test',
}
const dbOptionDev = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bsale_test',
}
module.exports = {dbOptionDev , dbOption};