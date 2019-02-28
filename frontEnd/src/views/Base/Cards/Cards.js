import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardImg, CardTitle, CardText, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import sampleImg from '../../../assets/img/products/sample.jpg'
import sampleImg2 from '../../../assets/img/products/sample2.jpg'
import sampleImg3 from '../../../assets/img/products/sample3.jpeg'
import sampleImg4 from '../../../assets/img/products/sample4.jpg'

class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  /**
   * Shorten the product name down to a certain number of words
   * if the title is too long, take out the last few words and add "..." at
   * the end
   * @param {string} productName the name of product
   */
  shortenProductName(productName) {
    const threshold = 10
    const words = productName.trim().split(" ")
    if (words.length > threshold) {
      return words.slice(0, threshold).join(" ") + "..."
    }
    return productName
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardImg top className="product_list_img" src={sampleImg} alt="Product Image"/>
              <CardBody>
                <CardTitle>
                 <Link to="/charts">
                  <b>{this.shortenProductName("Sample Product Name That Is Fetched From API")}</b>
                 </Link>
                </CardTitle>
                <CardText>
                  Lowest past price: $20<br/>
                  Current price: $30
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
          <Card>
            <CardImg top className="product_list_img" src={sampleImg2} alt="Product Image"/>
            <CardBody>
              <CardTitle>
               <Link to="/charts">
               <b>{this.shortenProductName("If the product name is too long, it will be shortened")}</b>
               </Link>
              </CardTitle>
              <CardText>
                Lowest past price: $29.5<br/>
                Current price: $40
              </CardText>
            </CardBody>
          </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardImg top className="product_list_img" src={sampleImg3} alt="Product Image"/>
              <CardBody>
                <CardTitle>
                 <Link to="/charts">
                 <b>{this.shortenProductName("What if the picture is vertically longer")}</b>
                 </Link>
                </CardTitle>
                <CardText>
                  Lowest past price: $20<br/>
                  Current price: $30
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardImg top className="product_list_img" src={sampleImg4} alt="Product Image"/>
              <CardBody>
                <CardTitle>
                 <Link to="/products/product_number">
                 <b>{this.shortenProductName("What if the picture is horizontally longer")}</b>
                 </Link>
                </CardTitle>
                <CardText>
                  Lowest past price: $200<br/>
                  Current price: $300
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cards;
