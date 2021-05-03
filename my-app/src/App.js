import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Card,
  FormGroup,
 
  Title,
  Breadcrumb,
  Alert,


} from "react-bootstrap";


function App() {
  return (
    <div className="App">
       <Navbar  bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#NFT">NFT's Gifts</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
      <header className ="App-header">
        <Form    style= {{ margin: 50  }} >
          <Form.Group>
            <Form.Label>Email adress</Form.Label>
            <Form.Control type='email' placeholder="exemple@email.com" />
            <Form.Text className='text-muted' >We'll never share your Adress Email, Trust us!!</Form.Text>
            <Form.Label>Wallet adress</Form.Label>
            <Form.Control  placeholder="06xwhyGTKJHFLII2541120MLM45545454GHFgfg55" />
            <Form.Text className='text-muted' >Becarreful, We accept only BEP-20 or TRC-20</Form.Text>
          </Form.Group>
          <Button variant='secondary' type='submit'>Submit</Button>

        </Form>
      
      <Card  style= {{ color: 'red' , margin: 100, marginBottom :30 }} >
        <Card.Img src=" https://cryptonaute.fr/wp-content/uploads/2020/06/1200px-Cryptocurrency_logos.jpg" />
        <Card.Body>
        <Card.Title>Reawrds</Card.Title>
          <Card.Text> pick your favorit crypto and collect it every 1 hours</Card.Text>
          <button>Read more >></button>
          </Card.Body>
      </Card>
      <Breadcrumb>
      <Breadcrumb.Item>crypto1</Breadcrumb.Item>
<Breadcrumb.Item>crypto2</Breadcrumb.Item>
<Breadcrumb.Item active>crypto3</Breadcrumb.Item>
</Breadcrumb>
<Alert variant="success">You choose Dogecoin</Alert>
<Button>Collect $</Button>


      </header>
   </div>
  );
}

export default App;
