import React, { Fragment } from 'react'
import { Card, Carousel, Row, Col } from 'react-bootstrap'
import card1 from '../../assets/images/pages/03-page.jpg'

const Carousels = () => {
   return (
      <Fragment>
              <Row>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <Card.Title as="h4">Slides only</Card.Title>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                           <Carousel id="carouselExampleSlidesOnly" indicators={false} nextIcon={''} prevIcon={''} data-ride="carousel">
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Slides With Controls</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                           <Carousel id="carouselExampleControls" indicators={false} nextIcon={''} prevIcon={''} data-ride="carousel">
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Slides With Indicators</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                           <Carousel id="carouselExampleSlidesOnly" indicators={true} nextIcon={''} prevIcon={''} data-ride="carousel">
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Slides With Captions</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                           <div className="bd-example">
                           <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                              <Carousel id="carouselExampleSlidesOnly" indicators={true} nextIcon={''} prevIcon={''} data-ride="carousel">
                                 <Carousel.Item> 
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5>First slide label</h5>
                                          <p>Some representative placeholder content for the first slide.</p>
                                       </Carousel.Caption> 
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5>Second slide label</h5>
                                          <p>Some representative placeholder content for the Second slide.</p>
                                       </Carousel.Caption>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5>Third slide label</h5>
                                          <p>Some representative placeholder content for the Third slide.</p>
                                       </Carousel.Caption>
                                 </Carousel.Item>
                              </Carousel>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <div className="header-title">
                              <h4 className="card-title">Slides With Crossfade</h4>
                           </div>
                        </Card.Header>
                        <Card.Body>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                           <Carousel fade id="carouselExampleFade" indicators={false} nextIcon={''} prevIcon={''} data-ride="carousel">
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
      </Fragment>
   )
}

Carousels.displayName="Carousels"
export default Carousels;
