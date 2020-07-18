import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';
import AddIcon from '@material-ui/icons/Add';

class AddButton extends Component {
    // constructor(props) {
    //     super(props)
    // }

    handleFileDownload = (attachment) => {
        saveAs(attachment.blob, attachment.file_name)
    }

    render() {
        return (
            <Button
              aria-label="save"
              size="small"
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => this.handleFileDownload(this.props.attachment)}>
              Add to my packages
            </Button>
          );
    }
}

export default AddButton;
