import axios from "axios";


const baseurl = "http://localhost:8080/api";

class ResturantService {


    getResturants(){
      return  axios.get(`${baseurl}/restaurants`);
    }
    // getResturantsID(){
    //   return  axios.get(`${baseurl}/restaurant/{id}`);
    // }
    createResturant(resturant){
      return  axios.post(`${baseurl}/restaurant/add`, resturant)
    }
}


export default new ResturantService();