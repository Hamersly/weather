import { Container, Typography } from "@mui/material";
import {
  titleParamsStyle,
  titleParamsTypographyStyle,
} from "./TitleParams.styles";

export const TitleParams = () => {
  return (
    <Container sx={titleParamsStyle}>
      <Typography sx={titleParamsTypographyStyle} variant="h5" component="div">
        Дата
      </Typography>

      <Typography sx={titleParamsTypographyStyle} variant="h5" component="div">
        °С
      </Typography>

      <Typography sx={titleParamsTypographyStyle} variant="h5" component="div">
        Осадки
      </Typography>
    </Container>
  );
};
