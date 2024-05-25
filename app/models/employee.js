const  {conn} = require('../../databaseConfig');

const Login = async (user) => {
    try {
        const pool = await conn;
        const sqlQuery = `Select top 1 ID, NAME, TOLV, THIETBI From NHANVIEN Where ID = ${user.ID} and PASS = ${user.PASS} `;
        const result = await pool.request().query(sqlQuery);
        return result.recordset[0];
    } catch (error) {
        console.log(error);
    }
}

const getList = async () => {
    try {
        const pool = await conn;
        const sqlQuery = "Select * From NHANVIEN";
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

const getById = async (id) => {
    try {
        const pool = await conn;
        const sqlQuery = `Select * From NHANVIEN Where ID = ${id}`;
        const result = await pool.request().query(sqlQuery);
        return result.recordset[0];
    } catch (error) {
        console.log(error);
    }
}

const addNew = async (employee) => {
    try {
        const pool = await conn;
        const sqlQuery = `INSERT INTO NHANVIEN (ID, NAME, TOLV, PASS) VALUES('${employee.ID}',N'${employee.NAME}',N'${employee.TOLV}','${employee.PASS}')`;
        return await pool.request().query(sqlQuery);
    } catch (error) {
        console.log(error);
    }
}

const Update = async (employee) => {
    try {
        const pool = await conn;
        const sqlQuery = `UPDATE NHANVIEN SET NAME = N'${employee.NAME}', TOLV = N'${employee.TOLV}', PASS = '${employee.PASS}' Where ID = ${employee.ID}`;
        return await pool.request().query(sqlQuery)
    } catch (error) {
        console.log(error);
    }
}

const Delete = async (id) => {
    try {
        const pool = await conn;
        const sqlQuery = `Delete From NHANVIEN Where ID=${id}`;
        return await pool.request().query(sqlQuery);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    Login,
    getList,
    getById,
    addNew,
    Update,
    Delete
}