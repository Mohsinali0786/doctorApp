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
  
//   GETCOMPANY: `${getApi}/getcompany`,
//   GETATTENDANCE: `${getApi}/getattendance`,
};
const POST = {
   BOOKEDAPPOINTMENT: `${postApi}/doctors`,
};
export { AUTH, GET ,POST};