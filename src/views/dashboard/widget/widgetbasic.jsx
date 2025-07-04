import { memo, Fragment } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Card from '../../../components/bootstrap/card'

//progressbar
import Progress from '../../../components/progress.jsx'

import { Link } from 'react-router-dom'
// img
import avatars11 from '/src/assets/images/avatars/01.png'
import avatars22 from '/src/assets/images/avatars/avtar_1.png'
import avatars33 from '/src/assets/images/avatars/avtar_2.png'
import avatars44 from '/src/assets/images/avatars/avtar_3.png'
import avatars55 from '/src/assets/images/avatars/avtar_4.png'
import avatars66 from '/src/assets/images/avatars/avtar_5.png'

//Count-up
import CountUp from 'react-countup';

const Widgetbasic = memo(() => {
   return (
      <Fragment>
         <Row>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Impressions</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp start={0.563} end={2.648} duration={3} decimals={3} /></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Engagements Rate</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp start={0.563} end={2.648} duration={3} decimals={3} /></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="info" color="info" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Reach</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp start={0.563} end={2.648} duration={3} decimals={3} /></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-success rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="success" color="success" className="shadow-none w-100" value={75} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Transport</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp start={0.563} end={2.648} duration={3} decimals={3} /></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6" className="col-lg-3 col-md-6">
               <Card className="bg-soft-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp start={565} end={5600} duration={3} /></h2>
                           Doctors
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-warning rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp start={513} end={5600} duration={3} /></h2>
                           Nurses
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp start={584} end={3500} duration={3} /></h2>
                           Patients
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp start={546} end={4500} duration={3} /></h2>
                           Pharmacists
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-info text-white rounded p-3">
                           <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z" fill="currentColor"></path>
                              <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="currentColor"></path>
                              <path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" fill="currentColor"></path>
                              <path d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z" fill="currentColor"></path>
                              <path opacity="0.4" d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z" fill="currentColor"></path>
                              <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="currentColor"></path>
                           </svg>
                        </div>
                        <div className="text-end">
                           Customers
                           <h2 className="counter"><CountUp start={15} end={75} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-warning text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Products
                           <h2 className="counter"><CountUp start={19} end={60} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-success text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           User
                           <h2 className="counter"><CountUp start={24} end={80} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-danger text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Category
                           <h2 className="counter"><CountUp start={8} end={45} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Today</span>
                        </div>
                        <div>
                           <span>08:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Week</span>
                        </div>
                        <div>
                           <span>40:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Issue</span>
                        </div>
                        <div>
                           <span className="counter"><CountUp start={275} end={1200} duration={3} /></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Income</span>
                        </div>
                        <div>
                           <span className="counter">$<CountUp start={10000} end={54000} duration={3} /></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                              <svg className="icon-30" width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                                 <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                              </svg>
                           </div>
                        </div>
                        <div>
                           <h1>21K</h1>
                           <p className="mb-0">Order Served</p>
                        </div>
                        <div>
                           <div className="badge bg-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                 <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                              <span>3.48%</span>
                           </div>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4" lg="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex align-items-center justify-content-between">
                        <div className=" bg-soft-success rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="35px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <div>
                           <h1 className="counter text-success"><CountUp start={48} end={250} duration={3} />M</h1>
                           <p className="text-success mb-0">Total Earning</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4" lg="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex align-items-center">
                        <div className=" bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="40px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                           </svg>
                        </div>
                        <div className="ms-5">
                           <h5 className="mb-1">Positive Reviews</h5>
                           <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="15px" color="orange" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                              </svg>
                           </div>
                           <h6 className="text-info">4.5/5</h6>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4">
               <Card>
                  <Card.Body>
                     <h2 className="counter">$<CountUp start={495} end={3450} duration={3} /></h2>
                     <p className="mb-2">Your Current Balance</p>
                     <h6>20% ($520)</h6>
                     <Link to="#" className="mt-4 btn btn-danger d-block rounded">Add credit</Link>
                     <div className="mt-3">
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Insurance</p>
                              <h4>18</h4>
                           </div>
                           <Progress softcolors="info" color="info" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{ height: "10px" }} />
                        </div>
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Savings</p>
                              <h4>124</h4>
                           </div>
                           <Progress softcolors="success" color="success" className="shadow-none w-100" value={80} minvalue={0} maxvalue={100} style={{ height: "10px" }} />
                        </div>
                        <div className="pb-3">
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Investment</p>
                              <h4>74</h4>
                           </div>
                           <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={55} minvalue={0} maxvalue={100} style={{ height: "10px" }} />
                        </div>
                        <div>
                           <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="mb-0">Progress</p>
                              <h4>89</h4>
                           </div>
                           <Progress softcolors="success" color="success" className="shadow-none w-100" value={89} minvalue={0} maxvalue={100} style={{ height: "10px" }} />
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4">
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-primary text-white p-3 rounded">
                                       <svg className="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z" fill="currentColor"></path>
                                          <path opacity="0.4" d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z" fill="currentColor"></path>
                                          <path opacity="0.4" d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z" fill="currentColor"></path>
                                          <path d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z" fill="currentColor"></path>
                                          <path opacity="0.4" d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z" fill="currentColor"></path>
                                          <path d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z" fill="currentColor"></path>
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>CUSTOMER</span>
                                 <div>
                                    <h3 className="counter"><CountUp start={21.497} end={60.586} duration={3} decimals={3} decimal="," /></h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-warning text-white p-3 rounded">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>SALES</span>
                                 <div>
                                    <h3 className="counter"><CountUp start={20.487} end={80.586} duration={3} decimals={3} decimal="," /></h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-info text-white p-3 rounded">
                                       <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z" fill="currentColor"></path>
                                          <path opacity="0.4" d="M16.0842 2.56737C15.7852 2.25637 15.2632 2.47037 15.2632 2.90137V5.53837C15.2632 6.64437 16.1742 7.55437 17.2792 7.55437C17.9772 7.56237 18.9452 7.56437 19.7672 7.56237C20.1882 7.56137 20.4022 7.05837 20.1102 6.75437C19.0552 5.65737 17.1662 3.69137 16.0842 2.56737Z" fill="currentColor"></path>
                                          <path d="M14.3672 12.2364H12.6392V10.5094C12.6392 10.0984 12.3062 9.7644 11.8952 9.7644C11.4842 9.7644 11.1502 10.0984 11.1502 10.5094V12.2364H9.4232C9.0122 12.2364 8.6792 12.5704 8.6792 12.9814C8.6792 13.3924 9.0122 13.7264 9.4232 13.7264H11.1502V15.4524C11.1502 15.8634 11.4842 16.1974 11.8952 16.1974C12.3062 16.1974 12.6392 15.8634 12.6392 15.4524V13.7264H14.3672C14.7782 13.7264 15.1122 13.3924 15.1122 12.9814C15.1122 12.5704 14.7782 12.2364 14.3672 12.2364Z" fill="currentColor"></path>
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>PROFIT</span>
                                 <div>
                                    <h3 className="counter"><CountUp start={11} end={80} duration={3} />%</h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex flex-column align-items-between">
                              <div>
                                 <div className="d-flex">
                                    <div className="bg-danger text-white p-3 rounded">
                                       <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path opacity="0.4" d="M18.8089 9.021C18.3574 9.021 17.7594 9.011 17.0149 9.011C15.199 9.011 13.7059 7.508 13.7059 5.675V2.459C13.7059 2.206 13.503 2 13.2525 2H7.96337C5.49604 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59109 22 8.1703 22H16.0455C18.5059 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6238 9.016 19.1168 9.021 18.8089 9.021Z" fill="currentColor"></path>
                                          <path opacity="0.4" d="M16.0837 2.56737C15.7857 2.25637 15.2627 2.47037 15.2627 2.90137V5.53837C15.2627 6.64437 16.1737 7.55437 17.2797 7.55437C17.9767 7.56237 18.9447 7.56437 19.7677 7.56237C20.1877 7.56137 20.4017 7.05837 20.1097 6.75437C19.0547 5.65737 17.1657 3.69137 16.0837 2.56737Z" fill="currentColor"></path>
                                          <path d="M14.3672 14.5693H9.4242C9.0132 14.5693 8.6792 14.2363 8.6792 13.8253C8.6792 13.4143 9.0132 13.0803 9.4242 13.0803H14.3672C14.7782 13.0803 15.1122 13.4143 15.1122 13.8253C15.1122 14.2363 14.7782 14.5693 14.3672 14.5693Z" fill="currentColor"></path>
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <span>LOSS</span>
                                 <div>
                                    <h3 className="counter"><CountUp start={6} end={15} duration={3} />%</h3>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <div className="badge bg-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
                                       <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>3.48%</span>
                                 </div>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Col>
            <Col lg="4">
               <Card>
                  <Card.Body className="p-3">
                     <h5>Assets</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp start={42.456} end={108.56} duration={3} decimals={2} />K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body className="p-3">
                     <h5>Liabilities</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp start={152.46} end={425.20} duration={3} decimals={2} />K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Body className="p-3">
                     <h5>Working Capital</h5>
                     <div className="text-center">
                        <h1 className="counter">-<CountUp start={102.46} end={380.40} duration={3} decimals={2} />K</h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col lg="6">
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Revenue</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter">$<CountUp start={12163} end={35000} duration={3} /></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-primary">Monthly</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>Total Revenue</span>
                              </div>
                              <div>
                                 <span>35%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Orders</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter"><CountUp start={754} end={2500} duration={3} /></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-warning">Anual</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>New Orders</span>
                              </div>
                              <div>
                                 <span>24%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="warning" color="warning" className="shadow-none w-100" value={24} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Leads</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter">$<CountUp start={12000} end={35000} duration={3} /></h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-danger">Today</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>New Leads</span>
                              </div>
                              <div>
                                 <span>50%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col md="6">
                     <Card>
                        <Card.Body>
                           <div className="d-flex justify-content-between">
                              <div>
                                 <span><b>Conversion</b></span>
                                 <div className="mt-2">
                                    <h2 className="counter"><CountUp start={4} end={35} duration={3} />%</h2>
                                 </div>
                              </div>
                              <div>
                                 <span className="badge bg-info">This Month</span>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between mt-2">
                              <div>
                                 <span>This Month</span>
                              </div>
                              <div>
                                 <span className="counter">30%</span>
                              </div>
                           </div>
                           <div className="mt-3">
                              <Progress softcolors="info" color="info" className="shadow-none w-100" value={30} minvalue={0} maxvalue={100} style={{ height: "6px" }} />
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Col>
            <Col lg="6">
               <Card>
                  <Card.Body>
                     <div className="border-bottom text-center pb-3">
                        <Image className="theme-color-default-img  img-fluid avatar-80 mb-4" src={avatars11} alt="profile-pic" />
                        <Image className="theme-color-blue-img img-fluid avatar-80 mb-4" src={avatars22} alt="profile-pic" />
                        <Image className="theme-color-green-img img-fluid avatar-80 mb-4" src={avatars33} alt="profile-pic" />
                        <Image className="theme-color-royal-blue-img img-fluid avatar-80 mb-4" src={avatars55} alt="profile-pic" />
                        <Image className="theme-color-red-img img-fluid avatar-80 mb-4" src={avatars66} alt="profile-pic" />
                        <Image className="theme-color-pink-img img-fluid avatar-80 mb-4" src={avatars44} alt="profile-pic" />
                        <div>
                           <h5 className="mb-3">Bini Jets</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                        <button type="button" className="btn btn-info mb-2 text-white">Assign</button>
                     </div>
                     <div className="d-flex justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp start={784} end={4500} duration={3} /></h2>
                           <div>Operations</div>
                        </div>
                        <div>
                           <h2 className="mb-0">3.9</h2>
                           <div>Medical Rating</div>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   )
}
)

Widgetbasic.displayName = "Widgetbasic"
export default Widgetbasic
