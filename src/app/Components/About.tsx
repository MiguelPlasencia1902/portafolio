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
import "../styles/global.css";

const data = [
  {
    src: "https://res.cloudinary.com/dfjn83ofc/image/upload/f_png/v1738807180/SS_zwzbzc.png",
    title: "HTML",
  },
  {
    src: "https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg",
    title: "CSS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
    title: "JavaScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    title: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    title: "Tailwind",
  },
  {
    src: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
    title: "Git",
  },
  {
    src: "https://res.cloudinary.com/dfjn83ofc/image/upload/v1738807180/Gato_kfqtvx.png",
    title: "GitHub",
  },
  {
    src: "https://res.cloudinary.com/dfjn83ofc/image/upload/v1738807180/ssss_bbmrjq.png",
    title: "Svelte",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    title: "PostgreSQL",
  },
];

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography["body-sm"],
  textAlign: "center",
  fontWeight: theme.fontWeight.md,
  color: "white",
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
      <Box sx={{ width: "100%", padding: "1rem" }}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          useFlexGap
          sx={{ flexWrap: "wrap", padding: "5%" }}
        >
          <Item
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2>About</h2>
            <br />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              ¡Hola! 👋 Soy un estudiante de Ingeniería de Sistemas apasionado
              por el desarrollo web y la tecnología. Me encanta aprender y
              explorar nuevas herramientas para crear soluciones eficientes e
              innovadoras.
            </span>
          </Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "auto",
            }}
          >
            <h2>Education</h2>
            <li className="custom-li">
              <span style={{ fontSize: "1.1rem", marginLeft: "-0.30rem" }}>
                Systems Engineer
              </span>
            </li>
            <li
              style={{
                textDecoration: "none",
                listStyle: "none",
                paddingLeft: "1.2rem",
                fontStyle: "italic",
              }}
            >
              San Ignacio de Loyola University
            </li>
            <li
              style={{
                textDecoration: "none",
                listStyle: "none",
                paddingLeft: "1.2rem",
                fontStyle: "italic",
              }}
            >
              2021 - present
            </li>
            <li className="custom-li">
              <span style={{ fontSize: "1.1rem", marginLeft: "-0.30rem" }}>
                Frontend Developer
              </span>
            </li>
            <li
              style={{
                textDecoration: "none",
                listStyle: "none",
                paddingLeft: "1.2rem",
                fontStyle: "italic",
              }}
            >
              San Ignacio de Loyola University
            </li>
            <li
              style={{
                textDecoration: "none",
                listStyle: "none",
                paddingLeft: "1.2rem",
                fontStyle: "italic",
              }}
            >
              2023 - present
            </li>
          </Item>

          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "auto",
              backgroundColor: "transparent",
            }}
          >
            <h2>Tech Stack:</h2>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                scrollSnapType: "x mandatory",
                backgroundColor: "transparent",
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
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    border: 'none',
                    borderRadius: '1rem',
                    transition: "transform 0.3s ease-in-out", // Transición suave
                    "&:hover": {
                      transform: "scale(1.05)", // Efecto de zoom
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <AspectRatio
                    variant="plain"
                    objectFit="contain"
                    sx={{
                      minWidth: 65,
                    }}
                  >
                    <img
                      srcSet={`${item.src}`}
                      src={`${item.src}`}
                      alt={item.title}
                      style={{ backgroundColor: "transparent"}}
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
