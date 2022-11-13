import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FooterBox = styled(Box)({
  background:
    "linear-gradient(to bottom, #ffea98, #fbdd81, #f8cf6a, #f5c153, #f3b23c, #f2ab31, #f2a526, #f19e18, #f19e18, #f19e18, #f19e18, #f19e18)",
  boxShadow: "0 0 0 0"
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
