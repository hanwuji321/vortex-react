import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import './PageLayout.scss'

const location = {
  pathname : '/route/8080',
  state    : { fromDashboard : true },
  query    : {
    a : 2
  }
}
export default class PageLayout extends React.Component {
  // 类的静态属性，不会被实例继承
  static propTypes = {
    children : PropTypes.node
  }

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='faded' light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand to='/' tag={IndexLink}>Vortex React</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavLink to='/counter' activeClassName='active' tag={Link}>Counter</NavLink>
              <NavLink to='/zen' activeClassName='active' tag={Link}>Zen</NavLink>
              <NavLink to='/elapse' activeClassName='active' tag={Link}>Elapse</NavLink>
              <NavLink to={location} activeClassName='active' tag={Link}>Route</NavLink>
              <NavLink to='/notFound' activeClassName='active' tag={Link}>404</NavLink>
              <NavLink href='https://github.com/YutHelloWorld/vortex-react'>Github</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className='text-center page-layout__viewport'>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
