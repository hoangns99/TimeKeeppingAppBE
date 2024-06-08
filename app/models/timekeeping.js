const  {conn, sql} = require('../../databaseConfig');
const { v4: uuidv4 } = require('uuid');

const getList = async () => {
    try {
        const pool = await conn;
        const sqlQuery = "Select * From CHAMCONG_CT";
        const result = await pool.request().query(sqlQuery);
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

const getById = async (TEN_NV, TRX_DATE) => {
    try {
        const pool = await conn;
        const result = await pool.request()
        .input('TEN_NV', sql.NVarChar, TEN_NV)
        .input('TRX_DATE', sql.Date, TRX_DATE)
        .query('Select top 1 CONVERT(VARCHAR(8), GIOVAO, 108) AS GIOVAO, CONVERT(VARCHAR(8), GIORA, 108) AS GIORA From CHAMCONG_CT Where TEN_NV = @TEN_NV and TRX_DATE = @TRX_DATE')
        return result.recordsets[0];
    } catch (error) {
        console.log(error);
    }
}

const addNew = async (timekeeping) => {
    try {
        const pool = await conn;
        return await pool.request()
        .input('ID', sql.NVarChar, uuidv4())
        .input('TEN_NV', sql.NVarChar, timekeeping.TEN_NV)
        .input('MAVT', sql.Int, timekeeping.MAVT)
        .input('TRX_DATE', sql.Date, timekeeping.TRX_DATE)
        .input('GIOVAO', sql.Time, timekeeping.GIOVAO)
        .input('THIETBI', sql.NVarChar, timekeeping.THIETBI)
        .input('KINHDO', sql.NVarChar, timekeeping.KINHDO)
        .input('VIDO', sql.NVarChar, timekeeping.VIDO)
        .query('INSERT INTO CHAMCONG_CT (ID, TEN_NV, MAVT, TRX_DATE, GIOVAO, THIETBI, KINHDO, VIDO) VALUES(@ID, @TEN_NV, @MAVT, @TRX_DATE, @GIOVAO, @THIETBI, @KINHDO, @VIDO)');
    } catch (error) {
        console.log(error);
    }
}

const Update = async (timekeeping) => {
    try {
        const pool = await conn;
        return await pool.request()
        .input('TEN_NV', sql.NVarChar, timekeeping.TEN_NV)
        .input('TRX_DATE', sql.Date, timekeeping.TRX_DATE)
        .input('GIORA', sql.Time, timekeeping.GIORA)
        .query('UPDATE CHAMCONG_CT SET GIORA = @GIORA WHERE TEN_NV = @TEN_NV AND TRX_DATE = @TRX_DATE');
    } catch (error) {
        
    }
}

module.exports = {
    getList,
    getById,
    addNew,
    Update
}