import { useState, memo, Fragment } from "react";

// React-bootstrap
import { Row, Col, Collapse } from "react-bootstrap";

// Router
import { Link } from "react-router-dom";

//Quill
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";
// css
import "quill/dist/quill.snow.css";
import  ReactQuill  from 'react-quill';

// Components
import Card from "../../../components/bootstrap/card";

const BasicQuill = (props) => {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

 
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
  };
  // const { quillRef } = useQuill();
  return (
    <>
    {/*  <div ref={quillRef}>{props.children}</div>*/}
    <ReactQuill theme="snow" value={value} 
    modules={modules}
    formats={formats}
    onChange={handleProcedureContentChange} />  
    </>
  );
};

const Quilleditor = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Body>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex flex-wrap align-items-center">
                  <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                    <h4 className="me-2 h4">Quill</h4>
                  </div>
                </div>
                <small>
                  For more Information regarding Sweetalert Plugin refer
                  <Link to="#" className="ms-2 me-2">
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
                <h4 className="card-title">Introduction</h4>
                <p>
                  Quill allows several ways to customize it to suit your needs.
                  This section is dedicated to tweaking existing functionality.
                </p>
              </Card.Header.Title>
              <Card.Header.Action>
                <i type="button" onClick={() => setOpen(!open)}>
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </i>
              </Card.Header.Action>
            </Card.Header>
            <Card.Body>
              <Collapse in={open}>
                <div>
                  <Card>
                    <kbd className="bg-dark">
                      <pre className="text-white">
                        <code>
                          {`
                                    
<BasicQuill></BasicQuill>
                                    
                                    `}
                        </code>
                      </pre>
                    </kbd>
                  </Card>
                </div>
              </Collapse>
              <BasicQuill></BasicQuill>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Quilleditor.displayName = "Quilleditor";
export default Quilleditor;
