const Doctor = require("../models/appointmentsModal");
const RegDoctor = require("../models/resDoctorModal");
const RegUser = require("../models/userModal");
const Registration = require("../models/registrationModal");
const Appointments = require("../models/bookedAppointment");
const Staff = require("../models/staffModel");
const StaffSal = require("../models/staffSalary");

const addDoctors = async (req, res) => {
  try {
    const { doctorId, dayAndtime, type } = req.body;
    console.log("req.body", req.body);
    res.send({
      status: "success",
      message: "Your Attendance successfuly added for today",
    });
    const doctorList = await Doctor.create({
      doctorId,
      dayAndtime,
    });
    console.log(doctorList, "doctorList");
    // const doctors=new Doctor(req.body)
    // await doctors.save()
  } catch (err) {
    console.log("err", err);
  }
};
const registeredDoctors = async (req, res) => {
  try {
    const { doctorName, contactNo, specialist, education } = req.body;
    console.log("req.body", req.body);
    res.send({ status: "success", message: "You registered successfully" });
    const doctorList = await RegDoctor.create({
      doctorName,
      contactNo,
      specialist,
      education,
    });
    // const doctors=new Doctor(req.body)
    // await doctors.save()
  } catch (err) {
    console.log("err", err);
  }
};
const registeredUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    // const user = new RegUser();
    console.log("req.body", req.body);
    let isRegistered = await RegUser.create({
      userName,
      userEmail,
      userPassword,
    });
    if (!isRegistered) {
      res.send({
        status: "error",
        message: "You are not registered some problem",
      });
      return;
    }
    res.send({ status: "success", message: "You registered successfully" });
    // const doctors=new Doctor(req.body)
    // await doctors.save()
  } catch (err) {
    console.log("err", err);
  }
};

//New working
const registeredUsers = async (req, res) => {
  console.log('Reeeeeeee',req.body)
  try {
    const {
      doctorName,
      userName,
      contactNo,
      specialist,
      education,
      type,
      email,
      dateAndTime,
      password,
      userType
    } = req.body;
    let isRegistered = await Registration.create({
      doctorName,
      userName,
      contactNo,
      specialist,
      education,
      type: type ? type : null,
      userType:userType ? userType : "user", 
      email,
      password,
      dateAndTime,
    });
    if (!isRegistered) {
      res.send({
        status: "error",
        message: "You are not registered some problem",
      });
      return;
    }
    res.send({ status: "success", message: "You registered successfully" });
  } catch (err) {
    console.log("err", err);
  }
};
const loginUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let isUserEmail = await Registration.findOne({ email, password });
    console.log('isUserEmail',isUserEmail)
    console.log('req.body',req.body.email)

    if (!isUserEmail) {
      res.send({ status: false, message: "Email or password wrong" });
      return;
    } else {
      res.send({ status: "success", message: "You LOGIN successfully" ,data:isUserEmail});
    }
 } catch (err) {
    console.log("err", err);
  }
};
const editUsers = async (req, res) => {
  console.log(req.body,'Edit')
  try {
    const {
      doctorName,
      userName,
      contactNo,
      specialist,
      education,
      type,
      email,
      password,
      userType,
    } = req.body;
    let isUpdated = await Registration.findByIdAndUpdate(req.params.id,{
      doctorName,
      userName,
      contactNo,
      specialist,
      education,
      type: type ,
      userType:userType , 
      email,
      password,
    });
    if (!isUpdated) {
      res.send({
        status: "error",
        message: "Not Updated some problem",
      });
      return;
    }
    res.send({ status: "success", message: "You Record updated successfully" });
  } catch (err) {
    console.log("err", err);
  }
};
const deleteUsers = async (req, res) => {
  console.log(req.params.id)
  try {
    let isDeleted = await Registration.findByIdAndDelete(req.params.id);
    if (!isDeleted) {
      res.send({
        status: "error",
        message: "Not Deleted some problem",
      });
      return;
    }
    res.send({ status: "success", message: "Your Record Deleted successfully" });
  } catch (err) {
    console.log("err", err);
  }
};
const bookedAppoitment = async (req, res) => {
  console.log(req.body.date,'req.body.date')
  // loginUser(res.body)
  try {
    let isRegistered = await Appointments.create({
      doctorId:req.body.doctorId,
      userId:req.body.loginUserId,
      // dateAndTime:{date:req.body.date.date,time:req.body.date.time}
      dateAndTime:req.body.date

    });
    if (!isRegistered) {
      res.send({
        status: "error",
        message: "You are not registered some problem",
      });
      return;
    }
    res.send({ status: "success", message: "You registered successfully" });
  } catch (err) {
    console.log("err", err);
  }
};
const staffController = async (req, res) => {
  try {
    const {userName , email} = req.body;
    console.log("req.body", req.body);
    res.send({ status: "success", message: "You registered successfully" });
    const staff = await Staff.create({
      userName,
      email,
    });
    // const staff=new Doctor(req.body)
    // await staff.save()
  } catch (err) {
    console.log("err", err);
  }
};
const staffSalController = async (req, res) => {
  try {
    const {userName , email} = req.body;
    console.log("req.body", req.body);
    res.send({ status: "success", message: "You registered successfully" });
    const staff = await StaffSal.create({
      staffId:req.body.staffId,
      salary:req.body.salary,
    });
    // const staff=new Doctor(req.body)
    // await staff.save()
  } catch (err) {
    console.log("err", err);
  }
};
module.exports = {
  // addDoctors,
  // registeredDoctors,
  // registeredUser,
  loginUser,
  registeredUsers,
  editUsers,
  deleteUsers,
  bookedAppoitment,
  staffController,
  staffSalController
};
