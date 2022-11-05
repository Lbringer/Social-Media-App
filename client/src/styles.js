import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'black',
        fontFamily: 'Mulish',
        fontSize: '45px',
    },
    image: {
        marginLeft: '15px',
    },
}));