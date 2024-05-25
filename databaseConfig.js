var sql = require('mssql/msnodesqlv8');

// Thông số kết nối cơ sở dữ liệu
const config = {
    server: 'localhost',
    user: 'sa',
    password: 'ANHPHAT',
    database: 'CCNV',
    driver: 'msnodesqlv8'
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}