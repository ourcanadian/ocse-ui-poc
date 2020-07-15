import React from "react";
import PropTypes from "prop-types";

//image carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  DialogTitle,
  Dialog,
} from "@material-ui/core";

import { ThemeContext } from "../components/ThemeContext";
import CompareIcon from "../icons/CompareIcon";

const styles = {
  cardMedia: {
    width: "95%",
    margin: "auto",
    textAlign: "center",
  },
  card: {
    marginTop: "10px",
    width: "95%",
    margin: "auto",
  },
  //should change to not be px
  slider: {
    height: "300px",
    width: "300px",
  },
  dialog: {
    height: "330px",
    overflow: "hidden",
  }
};

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    console.log(this.props);
    const { classes, product } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div>
            <Card className={classes.card}>
              <CardHeader
                title={product.title}
                subheader={`${product.price}.00$`}
                action={
                  <IconButton>
                    <CompareIcon />
                  </IconButton>
                }
              />
              <CardMedia className={classes.cardMedia}>
                <img src={product.images[0]} alt={product.title} />
              </CardMedia>
              <CardActions>
                <Button variant="contained" color="primary">
                  View Product
                </Button>
                {product.images.length > 0 ? (
                  <Button
                    onClick={() => this.setState({ open: true })}
                    color="primary"
                  >
                    View More Images
                  </Button>
                ) : null}
              </CardActions>
            </Card>
            <Dialog
              onClose={() => this.setState({ open: false })}
              aria-labelledby="simple-dialog-title"
              open={this.state.open}
            >
              <DialogTitle className={classes.dialog} id="simple-dialog-title">
                <AwesomeSlider className={classes.slider}>
                  {product.images.map(image => (
                    <div data-src={image} />
                  ))}
                </AwesomeSlider>
              </DialogTitle>
            </Dialog>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default withStyles(styles)(ProductCard);
