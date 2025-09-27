import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const blogTitleStyle = {
    color: "primary.main",
    fontWeight: 600,
    textAlign: "center",
  };

  const blogSubtitleStyle = {
    textAlign: "center",
    variant: "h2",
    mb: 2,
  };

  return (
    <Box py={6}>
      <Container>
        <Typography sx={blogTitleStyle}>Blog & News</Typography>
        <Typography sx={blogSubtitleStyle}>Read Our Latest News</Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((_, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BlogCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
