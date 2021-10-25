import React, { Component } from 'react';
import ReviewService from '../../service/ReviewService';

class CreateReview extends Component {
    
    constructor(props){
        super(props)

        this.state= {
            userId: '',
            resturant: "",
            id: '',
            rating: '',
            description: ''
        }
        // this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changeDescriptionHandler= this.changeDescriptionHandler.bind(this);
        this.saveReview = this.saveReview.bind(this);
    }

    saveReview = (e) =>{
        e.preventDefault();
        let review = {id: this.state.id, rating: this.state.rating, description: this.state.description};
        console.log('review =>' + JSON.stringify(review));

        ReviewService.createReview(review).then(res =>{
            this.props.history.push('/resturant');
        });
    }

    // changeNameHandler = (event) =>{
    //     this.setState({name: event.target.value});
    // }
    changeRatingHandler = (event) =>{
        this.setState({rating: event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({description: event.target.value});
    }
    cancel(){
        this.props.history.push('/resturant');
    }

    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Review</h3>
                            <div className ="card-body">
                                <form>
                                    {/* <div className ="form-group">
                                        <label>Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div> */}
                                    <div className ="form-group">
                                        <label>Rating: </label>
                                        <input placeholder="Rating" name="rating" className="form-control"
                                                value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label>Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>


                                    <button className = "btn btn-success" onClick={this.saveReview}> Add </button>
                                    <button className = "btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default CreateReview;