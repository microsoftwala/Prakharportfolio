import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function ProjectCard({ image, data, title, width, method, key, link,linksval }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
      <Card
        key={key}
        sx={{
          width: width === undefined ? 400 : width / 3,
          "@media (width < 768px)": {
            width: "90%",
            justifyItems: "center",
          },
          boxShadow: "6px 6px 10px rgba(0,0,0,0.7)",
          border: "1px solid black",
        }}
      >
        <CardHeader title=<div className="font-bold">{title}</div> />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography className="pt-4" variant="body2" color="text.primary">
            {data}
          </Typography>
          <motion.a href={link} target="_blank" className="font-bold text-2xl">{linksval} <ArrowRightAltIcon/></motion.a>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>{method}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
