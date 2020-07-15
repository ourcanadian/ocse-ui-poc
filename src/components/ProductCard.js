import React, {useState} from "react";
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

function ProductCard(props) {
  const [open, toggleDialog] = useState(false);

  
  const { classes, product } = props;
  return (
    //I'm sure theme will be needed, so I'm keeping it here
      <ThemeContext.Consumer>
        {(theme) => (
          <div>
            <Card className={classes.card}>
              <CardHeader
                title={product.title}
                subheader={`${product.price}.00$`} //might need to be changed depending how real product prices will be given. I'm assuming will have cents
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
                {product.images.length > 0 ? ( //if there are no other images, don't show the button. Might be better to show the button and disable tho?
                  <Button
                    onClick={() => toggleDialog(!open)}
                    color="primary"
                  >
                    View More Images
                  </Button>
                ) : null}
              </CardActions>
            </Card>
            <Dialog
              onClose={() => toggleDialog(false)}
              aria-labelledby="simple-dialog-title"
              open={open}
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
  )
}

ProductCard.propTypes = {
  product: PropTypes.object, //should be a lot more specific than just object
};

export default withStyles(styles)(ProductCard);
