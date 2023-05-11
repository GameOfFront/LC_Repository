export const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg"
    alt="Zelda Tears of Kingdom"
  />
);

const Title = () => (
  <h2>
    The Legend of Zelda™: Tears of the Kingdom – The Complete Official Guide:
    Collector's Edition
  </h2>
);
const Author = () => {
  return <h2>Piggyback</h2>;
};
