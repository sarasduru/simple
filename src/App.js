import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function App() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Foody</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav m-auto my-2 my-lg-0">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Trending</Nav.Link>
                        <Nav.Link href="#home">Store</Nav.Link>
                        <Nav.Link href="#link">Organic</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function Organicitem() {
    return (
        <Carousel data-bs-theme="light" className='a'>
            <Carousel.Item className='b'>
                <img className="d-block w-100 c" src="image/Banner1.jpg" alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="image/image2.jpg" alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="image/image3.png" alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

function Fruits() {
    return (
        <Container>
            <Row>
                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits1.jpg" />
                        <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                           Lemon-1                          
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits2.jpg" />
                    
                            <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                           Lemon-2
                        </Card.Body>
                    </Card>
                </Col>


                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits3.jpg" />
                        <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                  Lemon-3                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row>
                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits6.jpg" />
                        <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                       Lemon-4
                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits5.jpg" />
                        <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                            Lemon-5

                        </Card.Body>
                    </Card>
                </Col>


                <Col sm className='p-4'>
                    <Card style={{ width: '18rem, 90%' }}>
                        <Card.Img variant="top" src="image/fruits6.jpg" />
                        <Card.Body class="navbar-nav m-auto my-2 my-lg-0">
                            Lemon-6

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
function Contact() {
    return (
        <Container>
            

                <h2 class="text-white text-center p-5" >CONTACT US</h2>

            <div class="container p-5 text-center card" id="form">
            
                    <form action="#" method="post" class="card-content">
                        <p class="card-content">
                            <input type="text" placeholder="First Name"/>
                        </p>
                        <p class="card-content">
                            <input type="text" placeholder="Last Name"/>
                        </p>
                        <p class="card-content">
                            <input type="password" placeholder="Password"/>
                        </p>
                        <p class="card-content">
                            <input type="date"/>
                        </p>
                        <p class="card-content">
                            <input type="email" placeholder="Email"/>
                        </p>
                        <p class="card-content">
                            <button type="submit" placeholder="submit" class="card-content">Submit</button>
                        </p>
                    </form>
                </div>
            <span class="container p-5 text-center card">
                <footer>Copyrights @frontendforever 2023</footer>
            </span>
        </Container>
    );
}


export default function Out() {
    return (
        <>
            <App />
            <br></br><br></br>
            <Organicitem />
            <br></br><br></br>
            <Fruits />
            <br></br><br></br>
            <Contact />
        </>
    );
}