// const authApi = "/api/auth";
// const getApi = "/api/get";
const getApi = "/api";
const postApi = "/api";



const AUTH = {
//   USERLOGIN: `${authApi}/loginuser`,
//   COMPANYLOGIN: `${authApi}/logincompany`,
//   USERSIGNUP: `${authApi}/registeruser`,
//   COMPANYSIGNUP: `${authApi}/sigup`,
//   DELETEUSER: `${authApi}/deleteuser`,
//   UPDATEUSER: `${authApi}/updateuser`,
//   CHANGE_ROLE: `${authApi}/change-role`,
//   ADDATTENDANCE: `${authApi}/addattendance`,
};
const GET = {
  GETDOCTORS: `${getApi}/doctors`,
  GETAPPOINTMENT: `${getApi}/getAllAppointment`,
  GETALLUSERS: `${getApi}/getAllUsers`,
  GETALLAPPOINTMENTS: `${getApi}/getAllAppointment`,
  // GETUSERSBYID: `${getApi}/getAllUsers/:id`,


  
//   GETCOMPANY: `${getApi}/getcompany`,
//   GETATTENDANCE: `${getApi}/getattendance`,
};
const POST = {
   BOOKEDAPPOINTMENT: `${postApi}/doctors`,
   REGISTRATION: `${postApi}/registration`,
   EDITUSERS: `${postApi}/editUser`,
   DELETEUSERS: `${postApi}/deleteUser`,
  LOGIN: `${postApi}/login`,
  BOOKEDAPPOINTMENT: `${postApi}/bookAppointment`,


};
export { AUTH, GET ,POST};