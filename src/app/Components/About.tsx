"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/joy/Stack";
import Sheet from "@mui/joy/Sheet";
import { styled } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const data = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    title: "HTML",
  },
  {
    src: "https://img.icons8.com/fluent/512/css3.png",
    title: "React",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "a",
  },
];

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography["body-sm"],
  textAlign: "center",
  fontWeight: theme.fontWeight.md,
  color: "white",
  border: "1px solid",
  padding: theme.spacing(2),
  borderRadius: theme.radius.md,
  flexGrow: 1,
  background: "#061738",
}));

export default function About() {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{ bgcolor: "#061738" }}
    >
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          useFlexGap
          sx={{ flexWrap: "wrap", padding: "2rem" }}
        >
          <Item>About me</Item>
          <Item>Education</Item>
          <Item>
            Tecn Stack
            <Box
              sx={{
                display: "flex",
                overflow: "auto",
                scrollSnapType: "x mandatory",
                "& > *": {
                  scrollSnapAlign: "center",
                },
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              {data.map((item) => (
                <Card
                  orientation="vertical"
                  size="sm"
                  key={item.title}
                  variant="outlined"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                  }}
                >
                  <AspectRatio ratio="1" sx={{ minWidth: 60, background: 'none'}}>
                    <img
                      srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.src}?h=120&fit=crop&auto=format`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                    <Typography sx={{ color: "white" }} level="title-md">
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
              ))}
            </Box>
          </Item>
        </Stack>
      </Box>
    </Container>
  );
}
