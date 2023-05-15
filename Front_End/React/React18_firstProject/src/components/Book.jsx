/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const books = [
  {
    title:
      "The Legend of Zelda™: Tears of the Kingdom - The Complete Official Guide: Collector's Edition ",
    author: "Piggyback",
    img: "https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    title: "This Is How You Lose the Time War Paperback",
    author: "Amal El-Mohtar",
    img: "https://images-na.ssl-images-amazon.com/images/I/61jWphwWUYL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

export const BookList = () => {
  return (
    <section className="bookList">
      {books.map((books) => {
        return <Book {...books} key={books.id} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
