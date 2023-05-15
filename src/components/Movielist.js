import React, { Component } from "react";
import Movie from "./Movie";

export default class Movielist extends React.Component {
  render() {
    let movies = [
      {
        id: 0,
        Title: "The Godfather",
        Year: "1972",
        Description:
          "Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael  reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal.",
        Runtime: "2h 55m",
        Poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FL9aTzQZDS50ilcNnRSybclisBdL54GEcQ&usqp=CAU",
      },
      {
        id: 1,
        Title: "Charlie and The Chocolate Factory",
        Year: "2005",
        Description:
          "Charlie Bucket and his Grandpa Joe as they join a small group of contest winners who get to tour the magical and mysterious factory of eccentric candy maker Willy Wonka. Aided by his diminutive Oompa Loompa workers, Wonka has a hidden motivation for the tour, one that he will reveal only after the children in the group show their true colors.",
        Runtime: "1h 46m",
        Poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBtanfN7HdIL_1EwlXiJWhZ5MnbIf3_FD3Q&usqp=CAU",
      },
      {
        id: 2,
        Title: "Pretty Woman",
        Year: "1990",
        Description:
          "In this modern update on Cinderella, a prostitute and a wealthy businessman fall hard for one another, forming an unlikely pair. While on a business trip in L.A.,",
        Runtime: "2h 5m",
        Poster:
          "https://gonewiththetwins.com/new/wp-content/uploads/2015/04/prettywoman.jpg",
      },
      {
        id: 3,
        Title: "Rush Hour",
        Year: "1998",
        Description:
          "When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee to assist the FBI with the case to find his daughter.",
        Runtime: "1h 38m",
        Poster:
          " https://m.media-amazon.com/images/I/517pM4A4c9L._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 4,
        Title: "Big Daddy",
        Year: "1999",
        Description:
          "A lazy law-school grad adopts a kid to impress his girlfriend, but everything doesn't go as planned and he becomes the unlikely foster father.",
        Runtime: "1h 35m",
        Poster:
          " https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/229877_big_daddy_1999_1400x2100_0.jpg?itok=7-tuVska",
      },
    ];

    return (
      <div>
        <h1>movielist component</h1>
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title}
            year={movie.Year}
            description={movie.Description}
            runtime={movie.Runtime}
            image={movie.Poster}
          />
        ))}
      </div>
    );
  }
}
