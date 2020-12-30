import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
  {
    id: 2,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4 onClick={() => console.log(title)}>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
