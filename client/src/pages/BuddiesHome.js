import { React, useEffect, useState } from 'react';

//utilities
import { makeStyles, useTheme } from '@material-ui/core/styles';

//components
import Header from '../components/misc/Header.js'
import Footer from '../components/misc/Footer.js'

import Buddies from '../components/buddies/Buddies.js'

import { Grid, Container, Typography } from '@material-ui/core'

import socket from "../services/Socket";

const useStyles = makeStyles((theme) => ({

}));


function CollectionHome(props) {

    const classes = useStyles();
    const theme = useTheme();

    const [inventoryData, updateInventoryData] = useState({});
    const [loadout, setLoadout] = useState({});

    useEffect(() => {
        updateInventory();
        updateLoadout();
        document.title = "VIM // Buddies"
    }, []);

    function updateLoadout() {
        function callback(response) {
            console.log("loadout")
            console.log(response.loadout)
            setLoadout(response.loadout);
        }
        socket.request({ "request": "fetch_loadout" }, callback)
        socket.subscribe("loadout_updated", callback)
    }

    function updateInventory() {
        function callback(response) {
            updateInventoryData(response.buddies);
        }
        socket.request({ "request": "fetch_inventory" }, callback)
    }

    return (
        <>
            <div style={{ width: "100%", height: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "auto", flexGrow: 1 }}>
                <Container maxWidth={null} style={{ height: "100%", display: "flex", flexGrow: 1, }}>
                    <Buddies loadout={loadout} inventory={inventoryData} />
                </Container>
            </div>
        </>
    )
}


export default CollectionHome