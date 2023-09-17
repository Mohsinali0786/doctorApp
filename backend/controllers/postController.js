const Doctor = require("../models/appointmentsModal");
const RegDoctor = require("../models/resDoctorModal");
const RegUser = require("../models/userModal");

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
    const { userName,userEmail,userPassword} = req.body
    // const user = new RegUser();
    console.log("req.body", req.body);
    let isRegistered=await RegUser.create({
        userName,
        userEmail,
        userPassword,
    });
    if(!isRegistered){
        res.send({ status: "error", message: "You are not registered some problem" });
        return
    }
    res.send({ status: "success", message: "You registered successfully" });
    // const doctors=new Doctor(req.body)
    // await doctors.save()
  } catch (err) {
    console.log("err", err);
  }
};
const loginUser = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    let isUserEmail = await RegUser.findONe({userEmail,userPassword});
    if (!isUserEmail ) {
      res.send({ status: false, message: "Email or password wrong" });
      return;
    } else {
        console.log('=====> isUserEmail',isUserEmail)
    //   let isMatch = await isUserEmail.matchPassword(userPassword);
          res.send({ status: "success", message: "You LOGIN successfully" });
    //   console.log('=====>',isMatch)

    //   if (!isMatch) {
    //     res.send({ status: false, message: "Email wrong" });
    //     return;
    //   } else {
    //   }
    }

    // const doctors=new Doctor(req.body)
    // await doctors.save()
  } catch (err) {
    console.log("err", err);
  }
};
module.exports = { addDoctors, registeredDoctors, registeredUser, loginUser };
