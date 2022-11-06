import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { theme } from './styles'
import FileBase from 'react-file-base64'

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles();

    const handleSubmit = () => { };
    const clear = () => { };
    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper} >
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6" > Creating a memory</Typography>
                    <TextField className={classes.mb} name="creator" variant="outlined" label="creator"
                        fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <TextField className={classes.mb} name="title" variant="outlined" label="Title"
                        fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <TextField className={classes.mb} name="message" variant="outlined" label="Message"
                        fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <TextField className={classes.mb} name="tags" variant="outlined" label="Tags"
                        fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Button classname={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>submit</Button>
                    <Button color="secondary" variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper >
        </ThemeProvider>
    )
}


export default Form;