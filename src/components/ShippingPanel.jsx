import React, { Component } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails,
    TextField,
    Grid,
    Button
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ShippingPanel extends Component {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Billing/Shipping Information</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <form autoComplete="off">
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField label="Name" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="E-mail" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Phone Number" fullWidth />
                            </Grid>
                            <Grid item xs={9}>
                                <TextField label="Address" fullWidth />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField label="Unit" />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField label="Zip" />
                            </Grid>
                            <Grid item xs={7}>
                                <TextField label="City" fullWidth />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField label="State" />
                            </Grid>
                            <Grid item xs={12} justify="center" style={{paddingTop: 10}}>
                                <Button variant="outlined" color="primary">Save</Button>
                            </Grid>
                        </Grid>
                    </form>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default ShippingPanel;