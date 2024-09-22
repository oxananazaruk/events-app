import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme } from "./vars.js";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('../public/fonts/Inter-Medium.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('../public/fonts/Inter-Regular.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('../public/fonts/Inter-SemiBold.ttf') format('ttf'); 
  }

    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.color.text};
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
    }

    .container {
        width: 1240px;
        padding: 0 20px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    button {
        cursor: pointer;
    }

    
    .disable-scroll {
        overflow: hidden;
    }

    .react-datepicker__month-container {
        padding: 16px;
    }

    .react-datepicker__navigation {
        top: 16px !important;
    }

    .react-datepicker__header {
    background-color: transparent !important;
    border-bottom: none !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${(p) => p.theme.color.main} !important;
  }

  .react-datepicker__day-names {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .react-datepicker__day-name {
    font-weight: 600 !important;
    font-size: 12px !important;
    line-height: 1.2;
    text-align: center;
    color: ${(p) => p.theme.color.text} !important;
    text-transform: uppercase;
  }
`;
