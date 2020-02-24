import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./pages.css";
import API from "../utils/API";
import Container from "../components/Layout/container";
import Wrapper from "../components/Layout/wrapper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BookCard from "../components/Card";
import SearchForm from "../components/Search/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
      title: "",
      authors:[],
      description:[],
      image:"",
      link:""
    };
    this.handleSaveBook = this.handleSaveBook.bind(BookCard);
  }
  // When the component mounts, get a list of all available books
    
  // handle search input term
  handleSearchInput = event => {
    this.setState({ search: event.target.value });
  };
  // on form sumbit -> search for books
  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: [...res.data.items] });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  clickAddBtn = (event) => {
    event.preventDefault();
    console.log("click");
    this.state.books.map((book, i) => {
      // this.id = book._id,
      // this.key = book._id,
      // this.title = book.volumeInfo.title,
      // this.authors = book.volumeInfo.authors,
      // this.description = book.volumeInfo.description,
      this.image = book.volumeInfo.imageLinks
    })
    
    
    console.log(this.title, this.authors, this.description, this.image);
  }
  // // Save book
  handleSaveBook = event => {
    event.preventDefault();
    console.log("click");
    this.state.books.map((book, i) => {
      // this.id = book._id,
      // this.key = book._id,
      // this.title = book.volumeInfo.title,
      // this.authors = book.volumeInfo.authors,
      // this.description = book.volumeInfo.description,
      this.image = book.volumeInfo.imageLinks
    })
    console.log(this.title, this.authors, this.description, this.image);
    API.saveBook({
      title: this.title,
      authors: this.authors,
      description: this.description,
      image: this.image,
      link: this.link
    })
      .then(res => alert("Book has been added to your bookshelf!"))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Wrapper>
          <Container style={{ minHeight: "80%" }}>
            <Typography id="pageTitle" variant="h4" component="h3">
              Search for a book!
            </Typography>

            <SearchForm
              handleSearchInput={this.handleSearchInput}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Container>

          <Container>
            <SearchResults 
              books={this.state.books}
              onClick={this.handleSaveBook}
            />
          </Container>
        </Wrapper>
   
      </div>
    );
  }
}

export default Search;
