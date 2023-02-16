import axios from "axios";
import Cookies from "js-cookie";

// Default setup
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
const axiosGlobal = axios.create({
  // baseURL: ' https://0095-84-199-109-84.eu.ngrok.io',
  headers: {
    Accept: "application/json",
    //     Authorization: AUTH_TOKEN,
  },
});
axios.defaults.baseURL = "https://864b-84-199-109-84.eu.ngrok.io";

//registration handler => POST

const handleRegistration = async (data) => {
  try {
    console.log(data, "axios global registration data");
    const response = await axios.post("/register", data);
    const resData = await response.data;
    console.log(resData, "registration post request");
    
  } catch (error) {
    console.log(error, "registration post error");
  }
};

//login handler => GET and AUTH

const HandleLogin = async (data) => {
  try {
    console.log(data, "axios global login");
    const response = await axios.post("/user/login", data);

    const resData = await response.data;
    console.log(resData, "login post request");

    Cookies.set("email", resData.email, { path: "/" });
    Cookies.set("id", resData.id, { path: "/" });
    document.cookie = `token=${resData.token}`;
    // document.cookie = `email=${resData.email}`
  } catch (err) {
    console.log(err, "connectionError");
  }
};

//connection add tudu => POST
const handleAdd = async (data) => {
  const email = Cookies.get("email");
  console.log(email, "cookie");
  console.log(data, "axiosGlobal");

  try {
    const response = await axios.post(`personal/addTudu`, data);
    // response.data.headers['Content-Type'];
    console.log(response, "AddTuduResponse");
  } catch (err) {
    console.log(err, "AddTuduError");
  }
};

//connection edit tudu => PATCH
const handleEdit = async (data) => {
  try {
    const response = axios.patch(`\todo\id=?`, {});
    // response.data.headers['Content-Type'];

    console.log(response, "EditResponse");
  } catch (err) {
    console.log(err, "EditError");
  }
};

//connection handler  => GET
const HandleConnection = async (data) => {
  try {
    const response = axios.get("\\");
    console.log(response, "connectionResponse");
  } catch (err) {
    console.log(err, "connectionError");
  }
};

//get todos  => GET
const GetTodos = async (data) => {
  try {
    const id = Cookies.get("id");
    console.log(id);
    const response = await axios.get(`/user/getTudu/${data}`, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      }});
    await console.log(response.data, "connectionResponse");
    return response.data
  } catch (err) {
    console.log(err, "connectionError");
  }
};
export default axiosGlobal;
export { handleRegistration, HandleLogin, handleAdd, GetTodos };
