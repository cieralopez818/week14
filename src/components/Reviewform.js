import React, { Component } from "react";
import Reviewlist from "./Reviewlist";
import Stars from "./Stars";

export default class Reviewform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      reviewArray: [],
      starRating: 0,
    };
  }

  //sets the state of the review in the reviewArray to the value of the input field
  handleChange = (e) => {
    this.setState({ review: e.target.value });
  };

  // takes the new star rating and uses setState to set the starRating prop to the new star rating input
  handleStarsChange = (newStars) => {
    this.setState({ starRating: newStars });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newReview = {
      review: this.state.review,
      starRating: this.state.starRating,
    };

    this.setState({
      reviewArray: [...this.state.reviewArray, newReview],
      review: "",
    });
  }

  render() {
    return (
      <div>
        {this.state.reviewArray.length === 0 ? (
          <div>
            <h4> No Reviews </h4>
          </div>
        ) : (
          <div>
            <h4>Reviews</h4>
            {this.state.reviewArray.map((review, index) => (
              <Reviewlist
                review={review.review}
                stars={review.starRating}
                key={index}
              />
            ))}
          </div>
        )}

        <div>
          <div className="card bg-dark">
            <div className="card-body">
              <div className="row">
                <h4>Leave a Review!</h4>
                <div className="col-4"></div>
                <div className="col-4">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <textarea
                        type="textarea"
                        id="review"
                        className="form-control"
                        rows={4}
                        placeholder="Your review!"
                        value={this.state.review}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <Stars
                        starRating={this.state.stars}
                        onChange={this.handleStarsChange}
                      />
                    </div>
                    <button id="submit-review"type="submit" className="btn btn-primary">Submit Review
                    </button>
                  </form>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
