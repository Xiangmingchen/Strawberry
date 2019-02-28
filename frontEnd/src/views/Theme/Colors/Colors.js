import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap'
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
import { Button, Container, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import Background from '../../../images/bgimage.jpg'
import { Redirect } from 'react-router-dom'

var backgroundImageSytle = {
  width: "100%",
  height: "100%",
  zIndex: "-1",
  position: "absolute"
};

class Colors extends Component {
  state = {
   redirect: false
  }

  setRedirect = () => {
   this.setState({
     redirect: true
   })
  }

  renderRedirect = () => {
    console.log("line 29")
   if (this.state.redirect) {
     return <Redirect to='/base/cards' />
   }
  }

  render() {
    return (

      <div className="app flex-row align-items-center">
        <img src={ Background } style={ backgroundImageSytle }/>

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
                  {this.renderRedirect()}
                  <Button block outline onClick={this.setRedirect} color="primary">Search</Button>
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
