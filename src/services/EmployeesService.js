import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL ="https://api.json-generator.com/templates/-xdNcNKYtTFG/data";
const token="vza4lbzrzy3cyhg4nbzyjhmqzjlqr2p3qibd9986";
class EmployeeService{

getAllEmployees(){
    const config = {
        headers: { Authorization: 'Bearer vza4lbzrzy3cyhg4nbzyjhmqzjlqr2p3qibd9986' }
    };
    return axios.get(EMPLOYEE_BASE_REST_API_URL,config);
   }
}
export default new EmployeeService();