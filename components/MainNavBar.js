import Link from 'next/link';
import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const MainNavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...props} fixed='top' dark expand='md' container='fluid' full='true'>
        <NavbarBrand className='fw-light' href="/">Adrian Velarde</NavbarBrand>
        <NavbarToggler onClick={toggle} className='me-2' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/adrianve-dev">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem header className='fw-light'>
                  web3
                </DropdownItem>
                <a href='https://chubbybuddyworld.herokuapp.com/'>
                    <DropdownItem>
                        Chubby Buddies Minting
                    </DropdownItem>
                </a>
                <DropdownItem divider />
                <DropdownItem header className='fw-light'>
                  Mobile
                </DropdownItem>
                <Link href='/projects/ava-tasks-app'>
                    <a>
                        <DropdownItem>
                                AVA Tasks
                        </DropdownItem>
                    </a>
                </Link>
                <DropdownItem divider />
                <DropdownItem header className='fw-light'>
                  Smart Contracts
                </DropdownItem>
                <a href='https://rinkeby.etherscan.io/address/0xfc5a42135ba66f903e5e341e943e29766ee31f4a'>
                    <DropdownItem>
                        Chubby Buddies ERC721
                    </DropdownItem>
                </a>
                <a href='https://ropsten.etherscan.io/token/0x206827a51f2b1ced4b52e5c7d1c7b81ef622f6fb'>
                    <DropdownItem>
                        Chester Token ERC20
                    </DropdownItem>
                </a>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavBar;