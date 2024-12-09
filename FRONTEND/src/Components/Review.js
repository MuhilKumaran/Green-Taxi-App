import React from "react";

const Review = ({ review }) => {
  const { name, message } = review;
  return (
    <div>
      <h3>Reviews of our Customers</h3>
      <h4>Name : {name}</h4>
      <h5>{message}</h5>
      <br></br>
    </div>
  );
};

export default Review;
