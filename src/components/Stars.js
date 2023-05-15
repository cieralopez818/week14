import React from "react";
import ReactStars from "react-stars";

//	Stars: a one to five-star rating component that allows users to rate something
// (movies in this case, but remember that components are reusable, so you could
// use it elsewhere!)

// For the Stars component, I am using "react-rating-stars-component"
// from https://www.npmjs.com/package/react-rating-stars-component
// Although it works, the import statement for ReactStars(line 2 above)
// doesn't seem to find a declaration file for that module. No errors.
export default function Stars() {
  const ratingChanged = (newRating) => {
    alert(`Your rating for this movie: ${newRating} stars`);
    console.log(newRating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={20}
        activeColor="#ffd700"
      />
    </div>
  );
}
