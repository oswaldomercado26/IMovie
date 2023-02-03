import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Disney from "../images/disney.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import netflix from "../images/netflix.jpg";
import paramount from "../images/paramount.jpg";
import primevideo from "../images/prime.jpg";
import hbo from "../images/hbo.png";
import Table from "react-bootstrap/Table"
import Carousel from 'react-grid-carousel'
//crear carrusel de plataformas https://react-bootstrap.github.io/components/cards/
const Top3 = () => {
  return (
        <Container>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Netflix</th>
          <th>HBO</th>
          <th>Disney</th>
          <th>Prime Video</th>
          <th>Paramount+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
            <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
          <td>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="70%" src={Disney} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>

          </td>
        </tr>
      </tbody>
    </Table>
    </Container>
 
  );
};
export default Top3;




