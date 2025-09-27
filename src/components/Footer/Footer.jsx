import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

const socialIcons = [fb, twitter, yt, pinterest];

const FooterLinksSection = ({ links }) => (
  <Stack spacing={2}>
    {links.map((link, index) => (
      <FooterLink key={index}>{link}</FooterLink>
    ))}
  </Stack>
);

export default function Footer() {
  const footerLinks1 = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
  const footerLinks2 = ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"];

  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack alignItems="flex-start" justifyContent="space-between" height={1}>
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                {socialIcons.map((icon, index) => (
                  <Box key={index} component="img" src={icon} height={36} />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <FooterLinksSection links={footerLinks1} />
          </Grid>

          <Grid item xs={12} md={2.5}>
            <FooterLinksSection links={footerLinks2} />
          </Grid>

          <Grid item xs={12} md={2.5}>
            <FooterLinksSection links={footerLinks1} />
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
