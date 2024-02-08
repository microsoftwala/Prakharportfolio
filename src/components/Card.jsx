import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const OutlinedCard = ({ values, ques, color, width, need,content,content1,content2 }) => {
  const [widths, setWidths] = useState();
  if (need === "true") {
    need = true;
  } else {
    need = false;
  }
  useEffect(() => {
    const handleResize = () => {
      setWidths(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [widths]);
  return (
    <div style={{ position: "relative" }}>
      {need === true ? (
        <div
          style={{
            position: "absolute",
            top: "-30px",
            paddingLeft:"2px",
            paddingTop:"1px",
            left: "25px",
            zIndex: "1",
            width: "49px",
            height: "49px",
            borderRadius: "100%",
            backgroundColor: "rgb(234,234,0)",
            border: "solid gray 1px",
            color:"rgb(255,255,255)",
            justifyItems:"center",
            justifyContent:"center"
          }}
        >
          {content2}
        </div>
      ) : (
        ""
      )}
      <Box
        sx={{
          minHeight:200,
          minWidth: widths >= 450 ? 375 : 200,
          paddingTop: 2,
          paddingLeft: 5,
          paddingRight: 5,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          background: color,
          borderRadius: 2,
          border: "0.5px solid gray",
        }}
      >
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
              gutterBottom
            >
              {ques}
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {values}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {content}
            </Typography>
            <Typography variant="body2">
              {content1}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Box>
    </div>
  );
};

export default OutlinedCard;
