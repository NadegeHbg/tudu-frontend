import axios from 'axios'

// Default setup
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const axiosGlobal = axios.create({
    // baseURL: 'https://f7b2-83-134-77-199.eu.ngrok.io',
    headers: {
        Accept:'application/json',
    //     Authorization: AUTH_TOKEN,
    }
  });
//registration handler => POST
const handleRegistration = async(data) =>{
      try{
        console.log(data,'axios global registration data')
        const response = await axios.post('https://f7b2-83-134-77-199.eu.ngrok.io/register',data)
        const resData = await response.data
        console.log(resData,'registration post request')

      }catch(error){
        console.log(error,'registration post error')
      }
    }
//login handler => GET and AUTH

const HandleLogin =async (data) => {
  try{
      console.log(data,"axios global login")
      // const response = axios.get(`\login\email=?`,[data.email]) 
      // console.log(response,'connectionResponse')
  } catch(err){
      console.log(err,'connectionError')
  }
}
//connection handler  => GET
const HandleConnection =async (data) => {
    try{
        const response = axios.get('\\') 
        console.log(response,'connectionResponse')
    } catch(err){
        console.log(err,'connectionError')
    }
  }

//connection add tudu => POST
  const handleAdd = async(data) => {
    try{
        const response = axios.post(`\todo`,{data})
        // response.data.headers['Content-Type'];
        
        console.log(response,'EditResponse')
    } catch(err){
        console.log(err,'EditError')
    }
  }
//connection edit tudu => PATCH
  const handleEdit = async(data) => {
    try{
        const response = axios.patch(`\todo\id=?`,{
        })
        // response.data.headers['Content-Type'];
        
        console.log(response,'EditResponse')

    } catch(err){
        console.log(err,'EditError')
    }
  }
export default axiosGlobal
export {handleRegistration,HandleLogin}