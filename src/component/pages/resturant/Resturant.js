import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ResturantService from '../../../service/ResturantService';
import ReviewService from '../../../service/ReviewService';
import { generatePath } from 'react-router';

class Resturant extends React.Component
{
    constructor(props){
      super(props)
      
      this.state ={
        resturants:[]
      }
      this.addResturant = this.addResturant.bind(this);
      this.addReview = this.addReview.bind(this);


    }


    componentDidMount(){
      ResturantService.getResturants().then((res) => {
        this.setState({ resturants: res.data});
      })
    }
    componentDidUpdate(){
      ReviewService.getResturants().then((res) => {
      this.setState({ resturants: res.data});
      })
    }
    addResturant(){
      this.props.history.push('/resturant/add');
    }
    addReview(id){
      
        this.props.history.push('/add/review');
  

    }



  render (){
    return(

          <div>
            <h1>Resturant List</h1>
            <div className = "row">
              <button className="btn btn-primary" onClick={this.addResturant}> Add Resturant</button>
            </div>

            
            <table className= "table table-striped">
              <thead>
                <tr>
                  <td>Resturant Id</td>
                  <td>Resturant Name</td>
                  <td>Resturant Address</td>

                  <td>Resturant Description</td>
                  <td>Resturant Reviews </td>

                </tr>


              </thead>
              <tbody>
                  {
                    this.state.resturants.map(
                      resturants =>
                      <tr key={resturants.id}>
                         <td>{resturants.id}</td>
                         <td>{resturants.name}</td> 
                         <td>{resturants.address}</td> 
                         <td>{resturants.description}</td> 
                         <td>{resturants.reviews.map}<button className="btn btn-primary" onClick= {() => this.addReview(resturants.id)}> Add Review</button></td>  

                      </tr>
                    )

                  }



              </tbody>

            </table>





          </div>
             

           

    )
  };

}  



export default Resturant;