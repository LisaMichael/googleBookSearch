import React, { Component } from "react";
import API from "../utils/API";
import Button from "@material-ui/core/Button";
import Container from "../components/Layout/container";
import Wrapper from "../components/Layout/wrapper";
import BookCard from "../components/Card";

class Bookshelf extends Component {
  state = {
    title: "",
    books: [],
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  };
  removeBook = (id) => {
    API.deleteBook(id)
      .then(res => alert("Book has been removed!"))
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
       
        <Wrapper>
          <h1>The Bookshelf</h1>

          <Button variant="contained" color="primary" href="/search">
            Click to go to search page ...
          </Button>

          <Container>
            {this.state.books.map(book => (
              <BookCard
                id={book._id}
                key={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                synopsis={book.synopsis}
                image={book.image}
                link={book.link}
              >
                <button onClick={() => this.removeBook(book._id)} > Delete </button>
              </BookCard>
            ))}
          </Container>

          <Container />
        </Wrapper>
 
      </div>
    );
  }
}

export default Bookshelf;
