import { Input, Col, Row, Button } from "antd";
import "./App.css";

import { ReactComponent as Vector } from "./assets/img/Logo.svg";
import { ReactComponent as Diagram } from "./assets/img/diagram.svg";
import { ReactComponent as House } from "./assets/img/House.svg";

function App() {
  return (
    <div>
      <div className="App-header">
        <Row>
          <Col span={18} offset={2}>
            <div>
              <Vector />
              <p className="sub-text">an api that connects smart meters</p>
              <p className="sub-text-2">
                KASHPAWA uses several manufacturers' meter protocols
                <br /> to create instant communication between a client and the
                smart meter
              </p>
              <div className="diagram-container">
                <Diagram />
              </div>
            </div>

            <div className="mailing-container">
              <Input.Group compact>
                <Input
                  className="input-css"
                  placeholder="YOUR EMAIL ADDRESS"
                  style={{
                    width: "calc(30% - 100px)",
                    backgroundColor: "#222021",
                    color: "#fff",
                  }}
                />
                <Button type="primary">Submit</Button>
              </Input.Group>
              <p className="text-mailing">
                Join our mailing list for product updates & news!
                <br /> or say hi at hello@kashpawa.api
              </p>
            </div>

            <div id="footer">
              <div>
                <House />
              </div>
              <div className="text-footer-right">
                <span className="text-footer-subtext">API REFERENCE</span>
                <span className="text-footer-2">TERMS OF SERVICE</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* <Divider /> */}
    </div>
  );
}

export default App;
