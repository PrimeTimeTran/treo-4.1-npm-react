import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
  Row,
  Col
} from "react-bootstrap";

import './App.css';


function Footer() {
  return (
    <div class="footer">
      <a href="#">About</a>
      <a href="#">Jobs</a>
      <a href="#">For the record</a>
    </div>
  )
}


function MainContent() {
  return (
    <div class="main">
      <h1>Listening is everything</h1>
    </div>
  );
}

function Treo() {
  return (
    <div>
      <ul>
        <li>Khoi</li>
        <li>Khoa</li>
        <li>Tien</li>
        <li>Majid</li>
        <li>Nam</li>
      </ul>
    </div>
  )
}

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1618145105713-72888e572766?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1618111415321-b406d66958de?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


// 1. Define a new component.

function Navvvvvv() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Treo2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

function App() {
  return (
    <div>
      <Navvvvvv />
      <MainContent />
      <Footer />
      <Treo />
    </div>
  );
}

export default App;




// 1. NPM is a package manager, it allows us to grab packages easily from the world.

// 2. Package.json is a configuration file which has scripts that execute code as well as all our depenendencies.

// 3. React is a JS framework. It helps us build User iterfaces using JSX & Components

// 4. We run npm i library-name to get a new package

// 5. ./public/index.html

// 6. App.js file/component is the parent component of lal other components