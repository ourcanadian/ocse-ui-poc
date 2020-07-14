import React from "react";
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core";

import { ThemeContext } from "../components/ThemeContext";
import CompareIcon from '../icons/CompareIcon'

const styles = {
  cardMedia: {
    width: "95%",
    margin: "auto",
    textAlign: "center",
  },
  image: {
    margin: "auto",
  }
}

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { classes, product } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div>
            <Card>
              <CardHeader title={product.title} action={<IconButton><CompareIcon /></IconButton>}/>
              <CardMedia className={classes.cardMedia}><img src={product.images[0]} alt={product.title} /></CardMedia>
              <CardActions>
                {product.images.length > 0 ? <Button>View More Images</Button> : null }
              </CardActions>
            </Card>
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