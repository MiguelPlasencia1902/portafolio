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
    src: "https://w7.pngwing.com/pngs/410/100/png-transparent-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-text-thumbnail.png",
    title: "HTML",
  },
  {
    src: "https://img.icons8.com/fluent/512/css3.png",
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
    src: "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_512.png",
    title: "GitHub",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1RzTzQFA_9h3qbValKOs0mjsATDkHwMOTA&s",
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
          sx={{ flexWrap: "wrap", padding: "2rem"}}
        >
          <Item sx={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <h2>About me</h2>
            <br />
            <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left'}}>¡Hola! 👋 Soy un estudiante de Ingeniería de Sistemas apasionado por el desarrollo web y 
              la tecnología. Me encanta aprender y explorar nuevas herramientas para crear soluciones eficientes e innovadoras.</span>
          </Item>
          <Item sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}><h2>Education</h2>
          <li className="custom-li"><span style={{fontSize: '1.1rem', marginLeft:'-0.30rem'}}>Systems Engineer</span></li>
          <li style={{textDecoration: 'none', listStyle: 'none', paddingLeft: '1.2rem', fontStyle: 'italic',}}>San Ignacio de Loyola University</li>
          <li style={{textDecoration: 'none', listStyle: 'none', paddingLeft: '1.2rem', fontStyle: 'italic'}}>2021 - present</li>
          <li className="custom-li"><span style={{fontSize: '1.1rem', marginLeft:'-0.30rem'}}>Frontend Developer</span></li>
          <li style={{textDecoration: 'none', listStyle: 'none', paddingLeft: '1.2rem', fontStyle: 'italic'}}>San Ignacio de Loyola University</li>
          <li style={{textDecoration: 'none', listStyle: 'none', paddingLeft: '1.2rem', fontStyle: 'italic'}}>2023 - present</li>
          </Item>
          
          <Item sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <h2>Tech Stack:</h2>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
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
                  <AspectRatio
                    ratio="1"
                    sx={{ minWidth: 50, maxHeight: 50, background: "none" }}
                  >
                    <img
                      srcSet={`${item.src}`}
                      src={`${item.src}`}
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
