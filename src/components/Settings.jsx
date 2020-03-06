import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import ShippingPanel from './ShippingPanel'

class Settings extends Component {
    render() {
        return (
            <Container maxWidth="lg" style={{ padding: 10 }}>
                <ShippingPanel />
            </Container>
        );
    }
}

export default Settings;