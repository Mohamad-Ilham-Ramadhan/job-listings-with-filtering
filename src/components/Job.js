import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Paper from "@material-ui/core/Paper";

export default function Job() {
  return (
    <div>
      <Paper elevation={5} style={{ marginBottom: 30 }}>
        Paper
      </Paper>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={<IconButton aria-label="settings">action</IconButton>}
          title="How to quit porn"
          subheader="Agustus 13 2020"
        />
        <CardMedia>Card Media</CardMedia>
        <CardActionArea>Card action area</CardActionArea>

        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ducimus esse, numquam velit, non ipsa excepturi dignissimos, dolores
          molestias possimus consequatur a omnis consectetur! Ad error iusto
          voluptatem nostrum maxime?
        </CardContent>
        <CardActions>Card actions</CardActions>
      </Card>
    </div>
  );
}
