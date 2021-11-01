import React, {useState, useEffect } from "react";
import {Card, Button, Container, Alert} from "react-bootstrap";
import {useAuth} from "../../context/AuthContext";
import UpdateUserModal from "./userUpdateModal";

import ReviewService from '../../service/ReviewService';

function User(){

    const {getUserData,currentUser, userDetails} = useAuth();   
    const [loading, setLoading] = useState(true)
    const [toggleModal, setToggleModal] = useState(false)
    const closeModal = () => setToggleModal(false)
    const [reviews, setReviews] = useState([]);
    const [message, setMessage] = useState();

    function handleRemoveReview(reviewId){
      ReviewService.removeReview(reviewId).then((res) =>{
        if(res.status === 200){
          setMessage("Review has been removed!")
        }
      });
    }

    useEffect(()=>{
      getUserData(currentUser.sub);
      ReviewService.getReviewsByUser().then((res) => 
            setReviews(res.data));
      setLoading(false);
    },[])

    return(
        <Container className="d -flex align-items-left justify-our-content mt-5">
        
        {loading && <p>loading...</p>}
        {userDetails &&
          <><Card className="w-50">
            <Card.Header as="h5"><i className="far fa-address-card"></i> Profile : {userDetails.username}</Card.Header>
            <Card.Body>
              <Card.Title><i className="fas fa-user"></i> {userDetails.displayname} </Card.Title>
              <Card.Title><i className="fas fa-envelope-open-text"></i> Email: {userDetails.email} </Card.Title>
  
              <Card.Text as="h6" className="mt-3">
                Update Your Details!
              </Card.Text>
              <Card.Title className="mt-5" as="h5"><i className="fas fa-user-edit"></i> Manage Your Account</Card.Title>
              <Card.Body>
                <Button variant="danger" onClick={()=>setToggleModal(true)}><i className="fas fa-key"></i> Update Username/Password</Button>
              </Card.Body>
            </Card.Body>
            </Card>
            </>
          }
          < UpdateUserModal showUpdate={toggleModal} closeModal={closeModal}/>

          {reviews && (
               <div className="Review-List"> <h3>Your Reviews</h3>
               {message && <Alert variant="primary">{message}</Alert>}
               {reviews.map(
                 (review , id) => (
                  <Card className="w-50 mx-2 mt-2 Review-Tiles" key={id}>
                      <div className="Review-Details">
                        <div className="Review-Rating">Rating: {review.rating}</div>
                        <div className="Review-Description">{review.description}</div> 
                        <div className="Review-Description">{review.restaurantId}</div> 
                        <Button variant="danger mx-1 mb-2" onClick={() => handleRemoveReview(review.id)}><i className="fas fa-key"></i> Remove</Button>
                      </div>

                  </Card>
                 ) 
                )}
           </div> )}
          </Container>
    )
}

export default User;