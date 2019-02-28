import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardImg, CardTitle, CardText, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import sampleImg from '../../../assets/img/products/sample.jpg'
import sampleImg2 from '../../../assets/img/products/sample2.jpg'
import sampleImg3 from '../../../assets/img/products/sample3.jpeg'

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

  preprocessProductImg(image) {
    console.log(image)
    return image
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardImg top className="product_img" src={this.preprocessProductImg(sampleImg)} alt="Product Image"/>
              <CardBody>
                <CardTitle>
                 <Link to="/products/product_number">
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
            <CardImg top className="product_img" src={sampleImg2} alt="Product Image"/>
            <CardBody>
              <CardTitle>
               <Link to="/products/product_number">
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
              <CardImg top className="product_img" src={sampleImg3} alt="Product Image"/>
              <CardBody>
                <CardTitle>
                 <Link to="/products/product_number">
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
              <CardHeader>
                Card with switch
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card with label
                <div className="card-header-actions">
                  <Badge color="success" className="float-right">Success</Badge>
                </div>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Card with label
                <div className="card-header-actions">
                  <Badge pill color="danger" className="float-right">42</Badge>
                </div>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="border-primary">
              <CardHeader>
                Card outline primary
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-secondary">
              <CardHeader>
                Card outline secondary
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-success">
              <CardHeader>
                Card outline success
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-info">
              <CardHeader>
                Card outline info
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-warning">
              <CardHeader>
                Card outline warning
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="border-danger">
              <CardHeader>
                Card outline danger
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-primary">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-secondary">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-success">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-info">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-warning">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-danger">
              <CardHeader>
                Card with accent
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary text-center">
              <CardBody>
                <blockquote className="card-bodyquote">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-primary">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  Card actions
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-close" onClick={this.toggleFade}><i className="icon-close"></i></a>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Cards;
