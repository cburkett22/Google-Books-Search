import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import axios from "axios";
import BookList from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(""); // Add API Key Here !!

  const handleInputChange = event => {
    // Update the appropriate state
    const book = event.target.value;
    setBook(book);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
      .then(data => {
        console.log(data.data.items);
        setResult(data.data.items);
      }).catch(err => console.log(err));
  };

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form onSubmit={handleFormSubmit}>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      type="submit"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            <BookList>
              {result.map(book => {
                return (
                  <li style={{marginTop: "3%"}} className="list-group-item">
                    <Container>
                      <Row>
                        <Col size="xs-4 sm-2">
                          <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                          />
                        </Col>
                        <Col size="xs-8 sm-9">
                          <h3>{book.volumeInfo.title}</h3>
                          <h4>Author(s): {book.volumeInfo.authors}</h4>
                          <p>Description: {book.volumeInfo.description}</p>
                          <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                            <button style={{marginRight: "2%"}} type="button" class="btn btn-outline-success">See More</button>
                          </a>
                          <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
                            <button type="button" class="btn btn-outline-success">Add to List</button>
                          </a>
                        </Col>
                      </Row>
                    </Container>
                  </li>
                );
              })}
            </BookList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;