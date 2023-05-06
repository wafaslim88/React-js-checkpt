
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </>

      <h1>Contact us</h1>
      <p>A problem, a question, want to send us a message ? Do not hesitate to use this form to contact us!</p>

      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" class="form-control"/>
        </div>
        <div class="form-group">
        <label for="your message">Your message</label>
        <input type="text" id="your message" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
      </form>
    </div>
  );
}

export default App;
