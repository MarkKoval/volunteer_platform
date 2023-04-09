import { Box } from "@mui/material";
import styled from "styled-components";

export const Background = styled(Box)({
  width: "60%",
  backgroundImage:
    "linear-gradient(180deg, rgba(191,198,227,0) 0%, rgba(191,198,227,1) 8%, rgba(191,198,227,1) 95%, rgba(191,198,227,0) 100%)",
  justifyContent: "center",
  display: "flex",
  borderRadius: "25px",
  marginTop: "45px",
  marginBottom: "25px",
  paddingTop: "25px",
  paddingBottom: "25px",
});
