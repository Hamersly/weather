import { Container, Typography } from "@mui/material";

export const TitleParams = () => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "15px 0",
      }}
    >
      <Typography
        sx={{
          color: "#679ED2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
        variant="h6"
        component="div"
      >
        Дата
      </Typography>

      <Typography
        sx={{
          color: "#679ED2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        variant="h6"
        component="div"
      >
        °С
      </Typography>

      <Typography
        sx={{
          color: "#679ED2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
        }}
        variant="h6"
        component="div"
      >
        Осадки
      </Typography>
    </Container>
  );
};
