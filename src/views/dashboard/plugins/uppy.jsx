import React,{ memo, Fragment } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

// Dropzone
// import "react-dropzone-uploader/dist/styles.css";
// import ReactDropzone from "react-dropzone-uploader";

// Components
import Card from "../../../components/bootstrap/card";

// Router
import { Link } from "react-router-dom";
// Uppy css
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

import Uppy from '@uppy/core'
import  {Dashboard}  from '@uppy/react'
// import Webcam from '@uppy/webcam'

const uppy = new Uppy()

const Uppyplugin = memo((props) => {
  // const handleSubmit = (files, allFiles) => {
  //   allFiles.forEach((f) => f.remove());
  // };

  React.useEffect(() => {
    return () => uppy.close({ reason: 'unmount' })
  }, [uppy])

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Uppy</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Uppy Plugin refer
                  <Link to="https://uppy.io" className="ms-2 me-2">
                    Documentation
                  </Link>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Header.Title>
                <h4>Introduction</h4>
                <p>
                  Uppy is a sleek and modular file uploader. It fetches files
                  from local disk, Google Drive, Instagram, remote urls, cameras
                  etc, and then uploads them to the final destination. It’s
                  fast, has a comprehensible API and lets you worry about more
                  important problems than building a file uploader.
                </p>
              </Card.Header.Title>
            </Card.Header>
            <Card.Body className="text-center">
          {/*    <DragDrop
                width="100%"
                height="100%"
                uppy={uppy}
                locale={{
                  strings: {
                    dropHereOr: "Drop here or %{browse}",
                    onSubmit: { handleSubmit },
                    browse: "browse",
                  },
                }}
              />*/}
              <Dashboard
              uppy={uppy}
              plugins={['']}
              {...props}
            />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Uppyplugin.displayName = "Uppyplugin";
export default Uppyplugin;
