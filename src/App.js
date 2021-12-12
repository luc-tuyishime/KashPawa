import { Input, Col, Row, Button, Divider } from "antd";
import "./App.css";

import { ReactComponent as Vector } from "./assets/img/Logo.svg";
import { ReactComponent as Diagram } from "./assets/img/diagram.svg";
import { ReactComponent as House } from "./assets/img/House.svg";
import { ReactComponent as HouseMobile } from "./assets/img/House-mobile.svg";
import { ReactComponent as DiagramMobile } from "./assets/img/diagram-mobile.svg";

function App() {
  return (
    <div>
      <div className="App-header">
        {/* DESKTOP VIEW */}
        <div className="show-desktop">
          <Row>
            <Col span={18} offset={2}>
              <div>
                <Vector />
                <p className="sub-text">an api that connects smart meters</p>
                <p className="sub-text-2">
                  KASHPAWA uses several manufacturers' meter protocols
                  <br /> to create instant communication between a client and
                  the smart meter
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
        {/* MOBILE VIEW */}
        <div className="display-mobile">
          <div>
            <Vector className="center-svg" />
            <div className="center">
              <p className="sub-text">an api that connects smart meters</p>
              <p className="sub-text-2">
                KASHPAWA uses several manufacturers' meter protocols to create
                instant communication between a client and the smart meter
              </p>
              <div className="padding-mobile-text">
                <DiagramMobile />
              </div>
              <div className="house-mobile">
                <HouseMobile />
              </div>

              <div className="mailing-container">
                <Input.Group compact>
                  <Input
                    className="input-css"
                    placeholder="YOUR EMAIL ADDRESS"
                    style={{
                      width: "calc(110% - 200px)",
                      backgroundColor: "#222021",
                      color: "#fff",
                    }}
                  />
                  <Button type="primary">Submit</Button>
                </Input.Group>
                <p className="text-mailing">
                  Join our mailing list for product updates & news! or say hi at
                  hello@kashpawa.api
                </p>
              </div>

              <Divider style={{ border: "1px solid #5A5A5A" }} />

              <div className="footer-link">
                <span className="text-footer-subtext">API REFERENCE</span>
                <span className="text-footer-2">TERMS OF SERVICE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Divider /> */}
    </div>
  );
}

export default App;
