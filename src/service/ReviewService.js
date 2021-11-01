import axios from "axios";


const baseurl = "http://localhost:8080/api";

class ReviewService {


    getResturants(){
      return  axios.get(`${baseurl}/restaurants`);
    }
 
    createReview(id, rating, description){
      
      const token = sessionStorage.getItem("user")
      const jwtToken = JSON.parse(token)["jwt"]
      

      const config = {
        Authorization : "Bearer " + jwtToken
       };

      return  axios.post(`${baseurl}/add/review/${id}`,{
          rating,
          description
      },{
        headers: config
      })
    }

    getReviewsByUser(){
      const token = sessionStorage.getItem("user")
      const jwtToken = JSON.parse(token)["jwt"]
      

      const config = {
        Authorization : "Bearer " + jwtToken
       };

      return axios.get(`${baseurl}/review/user`,{
        headers:config
      })
    }


    removeReview(id){
      const token = sessionStorage.getItem("user")
      const jwtToken = JSON.parse(token)["jwt"]
      

      const config = {
        Authorization : "Bearer " + jwtToken
       };

      return axios.delete(`${baseurl}/delete/review/${id}`,{
        headers:config
      })
    }
    
}


export default new ReviewService();