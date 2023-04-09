import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {line} from "./Constants.js";

export const LineBox = styled(Box)({
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexFlow: "row",
  paddingTop: 128,
  paddingBottom: 64,
  backgroundColor: "hsla(228,39%,82%,1)",
  backgroundImage: line,
});
