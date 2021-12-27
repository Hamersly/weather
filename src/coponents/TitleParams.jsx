import { Container, Typography } from "@mui/material";

export const TitleParams = () => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "15px 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#679ED2" }} variant="h6" component="div">
          Дата
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#679ED2" }} variant="h6" component="div">
          °С
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#679ED2" }} variant="h6" component="div">
          Осадки
        </Typography>
      </Container>
    </Container>
  );
};
