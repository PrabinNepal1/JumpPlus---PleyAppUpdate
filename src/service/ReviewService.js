import axios from "axios";


const baseurl = "http://localhost:8080/api";

class ReviewService {


    getResturants(){
      return  axios.get(`${baseurl}/restaurants`);
    }
 
    createReview(id){
      return  axios.post(`${baseurl}/add/review/${id}`)
    }
}


export default new ReviewService();