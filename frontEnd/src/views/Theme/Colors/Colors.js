import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import { Button, Container, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import Background from '../../../images/bgimage.jpg'

// class ThemeColor extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//
//     // const { className, children, ...attributes } = this.props
//     const { className, children } = this.props
//
//     const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//
//     return (
//       <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
//         <div className={classes} style={{paddingTop: '75%'}}></div>
//         {children}
//         <ThemeView/>
//       </Col>
//     )
//   }
// }
var backgroundImageSytle = {
  width: "100%",
  height: "100%",
  zIndex: "-1",
  position: "absolute"
};

class BackgroundImage extends Component {
  render() {
    return (
      <img src={ Background } style={ backgroundImageSytle }/>
    );
  };
};

class Colors extends Component {
  render() {
    return (

      <div className="app flex-row align-items-center">
      <BackgroundImage></BackgroundImage>

        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4 logo-font">Macy's Easy</h1>
              </div>
              <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button block outline color="primary">Search</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Colors;
