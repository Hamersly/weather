import {Container, Typography} from "@mui/material";

export const TitleParams = () => {

  const style = {
    color: "#679ED2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "5px 0",
        borderBottom: "1px solid #679ed2",
      }}
    >

      <Typography sx={style} variant="h6" component="div">
        Дата
      </Typography>

      <Typography sx={style} variant="h6" component="div">
        °С
      </Typography>

      <Typography sx={style} variant="h6" component="div">
        Осадки
      </Typography>

    </Container>
  );
};
