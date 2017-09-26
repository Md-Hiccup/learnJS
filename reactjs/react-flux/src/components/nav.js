/**
 * Created by hussain on 19/9/17.
 */
import React from "react";
import { Link } from "react-router-dom";
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

export default class Navb extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="#">Home</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <Link to="/"><Button outline color="info" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Todos</Button></Link>{' '}
                                <Link to="/favorites"><Button outline color="info" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Favorites</Button></Link>{'  '}
                                <Link to="/settings"><Button outline color="info" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Settings</Button></Link>{' '}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}