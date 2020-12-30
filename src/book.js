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

export default Book;
