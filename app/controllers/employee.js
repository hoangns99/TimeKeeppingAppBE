const employeeModel = require('../models/employee')

const Login = async (req, res) => {
    const user = req.body;
    try {
      const result = await employeeModel.Login(user);
      if(result) {
        res.status(200).json({message: "Đăng nhập thành công", result});
        console.log("Đăng nhập thành công");
      } else {
        res.status(401).json({error: "Sai tên đăng nhập hoặc mật khẩu"});
        console.log("Sai tên đăng nhập hoặc mật khẩu");
      }  
    } catch (error) {
        res.status(500).json({error: "Lỗi khi đăng nhập"});
        console.log("Lỗi khi đăng nhập");
    }
}

const getList = async (req, res) => {
    try {
        const employees = await employeeModel.getList();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({error: "Lỗi khi lấy dữ liệu"});
    }
}

const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await employeeModel.getById(id);
        if(!employee) {
            res.status(404).json({error: "Không tìm thấy thông tin nhân viên"});
        } else {
            res.status(200).json(employee);
        }
    } catch (error) {
        res.status(500).json({error: "Lỗi khi lấy dữ liệu"});
    }
}

const addNew = async (req, res) => {
    const newEmployee = req.body;
    try {
        employeeModel.addNew(newEmployee);
        res.status(200).json({message:"Thêm nhân viên thành công"});
    } catch (error) {
        res.status(500).json({error: "Lỗi khi thêm nhân viên"});
    }
}

const Update = async (req, res) => {
    const updateEmployee = req.body;
    try {
        employeeModel.Update(updateEmployee);
        res.status(200).json({message:"Cập nhật thông tin nhân viên thành công"});
    } catch (error) {
        res.status(500).json({error: "Lỗi khi cập nhật thông tin nhân viên"});
    }
}

const Delete = async (req, res) => {
    const id = req.params.id;
    try {
        employeeModel.Delete(id);
        res.status(200).json({message: "Xóa nhân viên thành công"});
    } catch (error) {
        res.status(500).json({error: "Lỗi khi xóa nhân viên"});
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