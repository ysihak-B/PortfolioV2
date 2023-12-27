import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ onValidated }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (status.success === true) clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
    setStatus({success: 'sending'})
    setTimeout(() => {
      setStatus({success: true, message: "Subscription Successfull"})
    }, 2000);
    setTimeout(() => {
      setStatus({})
    }, 3000);
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
              {status.success === 'sending' && <Alert>Sending...</Alert>}
              {status.success === false && <Alert variant="danger">{status.message}</Alert>}
              {status.success === true && <Alert variant="success">{status.message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
