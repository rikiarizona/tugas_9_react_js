import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Breadcrumb,
  Spinner,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Pagination,
  Popover,
  OverlayTrigger,
  Collapse,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const munculTooltip = (
      <Popover>
        <Popover.Title as="h3">
          <strong>Informasi Website</strong>
        </Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
          tentang berita olahraga.
        </Popover.Content>
      </Popover>
    );
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Berita</Nav.Link>
            <Nav.Link href="/">Live Scores</Nav.Link>
            <NavDropdown title="Piala & Liga" id="nav-piala-liga">
              <NavDropdown.Item href="/">Champions</NavDropdown.Item>
              <NavDropdown.Item href="/">Italy</NavDropdown.Item>
              <NavDropdown.Item href="/">Spain</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Cari...."
              className="mr-sm-2"
            />
            <Button variant="outline-info">Cari</Button>
          </Form>
        </Navbar>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 8 }}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item href="/" active>
                  Transfer Pemain
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <h5>
                <strong>Rumor Transfer Pemain</strong>
              </h5>
            </Col>
            <Col md={{ offset: 7 }}>
              <Spinner animation="border" variant="success" />
              <Spinner animation="grow" size="sm" variant="success" />
            </Col>
          </Row>
          <Tabs defaultActiveKey="semuaTransfer" id="tabsTransfer">
            <Tab eventKey="semuaTransfer" title="Semua Transfer">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama Pemain</th>
                    <th>Tim</th>
                    <th>Transfer</th>
                    <th>Proses Transfer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>MAROUANE FELLAINI</td>
                    <td>MANCHERSTER UNITED</td>
                    <td>SHANDONG LUNENG</td>
                    <td>
                      <ProgressBar animated now={85} label="85%" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>LUIS NANI</td>
                    <td>SPORTING CP</td>
                    <td>ORLANDO CITY</td>
                    <td>
                      <ProgressBar animated now={55} label="55%" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>MAREK HAMSIK</td>
                    <td>NAPOLI</td>
                    <td>DALIAN YIFANG</td>
                    <td>
                      <ProgressBar animated now={95} label="95%" />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>SARDAR AZMOUN</td>
                    <td>RUBIN KAZAN</td>
                    <td>ZENIT ST PETERSBURG</td>
                    <td>
                      <ProgressBar animated now={100} label="100%" />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>MICHY BATSHUAYI</td>
                    <td>CHELSEA</td>
                    <td>CRYSTAL PALACE</td>
                    <td>
                      <ProgressBar animated now={50} label="50%" />
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>LUCAS PIAZON</td>
                    <td>CHELSEA</td>
                    <td>CHIEVO</td>
                    <td>
                      <ProgressBar animated now={100} label="100%" />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Tab>
            <Tab eventKey="ligaInggris" title="Liga Primer Inggris"></Tab>
            <Tab eventKey="serieA" title="Serie A"></Tab>
            <Tab eventKey="divisiPrimera" title="Divisi Primera"></Tab>
            <Tab eventKey="bundesliga" title="Bundes Liga"></Tab>
            <Tab eventKey="liga1Indo" title="Liga 1 Indonesia"></Tab>
          </Tabs>
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={munculTooltip}
          >
            <Button variant="primary" className="mr-2">
              Informasi
            </Button>
          </OverlayTrigger>
          <Button
            variant="primary"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            Versi Website
          </Button>
          <Collapse in={this.state.open}>
            <p>Akses Sport V1.0</p>
          </Collapse>
        </Container>
      </div>
    );
  }
}

export default App;
