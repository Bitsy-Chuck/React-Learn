import React from 'react'
// import { StyleSheet} from 'react-native'
import { Dialog, DialogTitle } from '@material-ui/core';
// import "./CloseButton.css";
function PopUp(props) {

    const { display, showIt } = props;
    return (
        <div>
            <Dialog open={display} onClose={() => showIt()}>
                <DialogTitle>
                    <div>
                        Hello I Welcome to the Pop-Up
                    </div>
                    
                    <div>
                        <span style={mystyles}><button onClick={showIt} style={mystyles}> X </button></span>

                    </div>
                </DialogTitle>
            </Dialog>
        </div>
    )
}

export default PopUp

const mystyles =
{
    padding:{top: '10px', right: 'auto'},
    textAlign: 'center',
    fontSize: '15px',
    position: 'absolute',
    right: 0,
    top: 0
};
