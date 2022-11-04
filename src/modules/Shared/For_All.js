/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const FooterBox = styled(Box)({
  background: 'linear-gradient(to bottom, #ffea98, #fbdd81, #f8cf6a, #f5c153, #f3b23c, #f2ab31, #f2a526, #f19e18, #f19e18, #f19e18, #f19e18, #f19e18)',
  boxShadow: '0 0 0 0',
});

export const MyButton = styled(Button)({
  background: 'linear-gradient(to right bottom, #dc9104, #e09c1a, #e4a729, #e7b137, #ebbc44)',
  border: 0,
  borderRadius: 8,
  boxShadow: '0 0 6px 2px rgba(255, 105, 135, .2)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  fontSize: '18px',
  fontFamily: 'Nunito',
  fontWeight: 700,
});