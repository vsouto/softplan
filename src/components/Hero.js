import React, { Component } from 'react'
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const { hero } = this.props
    const series = hero.series.items || []

    let element = (
      <div className="view">
        <input className="toggle"
               type="checkbox" />
        <label>
          {hero.name}
        </label>
        <button className="destroy" onClick={() => this.setState({ open: true })}/>
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{hero.name}</DialogTitle>
          <DialogContent>
            <h5>Series</h5>
            <List>
              {series.map((item) => (
                <ListItem key={item.name}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ open: false })} color="primary" autoFocus>
              Thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )

    return (
      <li>
        {element}
      </li>
    )
  }
}
