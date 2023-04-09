import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FooterBox = styled(Box)({
  background:
    "radial-gradient(at 0% 100%, hsla(261,75%,79%,1) 0px, transparent 50%),\nradial-gradient(at 74% 100%, hsla(195,54%,66%,1) 0px, transparent 50%),\nradial-gradient(at 48% 100%, hsla(200,76%,63%,1) 0px, transparent 50%),\nradial-gradient(at 98% 100%, hsla(195,72%,71%,1) 0px, transparent 50%),\nradial-gradient(at 1% 100%, hsla(261,53%,59%,1) 0px, transparent 50%)",
  boxShadow: "0 0 0 0",
});

export default function Footer() {
  return (
    <FooterBox sx={{ p: 0.1 }} component="footer" marginTop="50px">
      <Typography
        variant="h1"
        align="center"
        color="text.secondary"
        fontSize="40px"
        paragraph
        fontWeight="750"
        marginTop="50px"
      >
        Footer
      </Typography>
      <Typography
        variant="h1"
        align="center"
        color="text.secondary"
        fontSize="15px"
        paragraph
        fontWeight="600"
      >
        Something here to give the footer a purpose!
      </Typography>
    </FooterBox>
  );
}
