import axios from 'axios'

const  setToken = token => {
    if (token) {
        localStorage.setItem("adminToken", token);
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
    } else {
        localStorage.removeItem("adminToken");
        delete axios.defaults.headers.common['Authorization']
      
    }
}
export default setToken