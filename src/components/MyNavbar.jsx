import React, { Component } from 'react'
import { Toolbar, Typography, AppBar, Tab, Tabs } from '@material-ui/core'
import { Link } from 'react-router-dom';

class MyNavbar extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        return (
            <AppBar position='static'>
                <Typography variant='h6'>Ω</Typography>
                <Tabs
                    variant="fullWidth"
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="Bot" component={Link} to="/bot" />
                    <Tab label="Settings" component={Link} to="/settings" />
                </Tabs>
            </AppBar>
        );
    }
}

export default MyNavbar;