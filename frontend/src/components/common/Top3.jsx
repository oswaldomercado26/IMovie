import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Disney from "../images/disney.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import netflix from "../images/netflix.jpg";
import paramount from "../images/paramount.jpg";
import primevideo from "../images/prime.jpg";
import hbo from "../images/hbo.png";
import Table from "react-bootstrap/Table";
import Carousel from "react-grid-carousel";
import Accordion from "react-bootstrap/Accordion";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThermostatIcon from '@mui/icons-material/Thermostat';

//crear carrusel de plataformas https://react-bootstrap.github.io/components/cards/
const Top3 = () => {
  return (
    <Container>
      <Table striped bordered hover variant="dark" responsive="xl">
        <thead>
          <tr>
            <th>Netflix</th>
            <th>HBO</th>
            <th>Disney</th>
            <th>Prime Video</th>
            <th>Paramount+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><LocalFireDepartmentIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />

                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><LocalFireDepartmentIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="85%" src={netflix} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><LocalFireDepartmentIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><LocalFireDepartmentIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><LocalFireDepartmentIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
          </tr>
          <tr>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
          </tr>
          <tr>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
            <td>
              <CardActionArea>
                <CardContent>
                <Card.Header><ThermostatIcon  sx={{ height: 38, width: 38 }} /></Card.Header>
                  <center>
                    <Card
                      class="center"
                      style={{ width: "18rem", height: "18rem" }}
                    >
                      <Card.Img variant="0.2top" width="70%" src={hbo} />
                      <Card.Body>
                        <Typography gutterBottom variant="h5" component="div">
                          <Card.Title>Card Title</Card.Title>
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div">
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Typography>
                        <IconButton aria-label="play/pause">
                          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                      </Card.Body>
                    </Card>
                  </center>
                </CardContent>
              </CardActionArea>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default Top3;
