import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Form,
  Row,
  Input, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { Redirect } from 'react-router-dom'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  state = {
   redirect: false
  }

  setRedirect = () => {
   this.setState({
     redirect: true
   })
  }

  renderRedirect = () => {
   if (this.state.redirect) {
     return <Redirect to='/base/cards' />
   }
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Link to="/home">
          <img className="ml-3 d-sm-none d-inline col-xs-2" height="25" width="25" src={sygnet} />
          <img className="ml-3 d-none d-sm-inline" src={logo} width="89" height="25" alt='CoreUI Logo'/>
        </Link>
        <Form className="col-sm-6 col-10">
          <InputGroup width="100%" className="input-prepend">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="What are you looking for?" />
            <InputGroupAddon addonType="append">
              {this.renderRedirect()}
              <Button onClick={this.setRedirect} color="primary">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
