import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    --color-border: #EBF1FB;
    letter-spacing: 0.0125rem;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    overflow: hidden;
    /* background: url('https://cdn.dribbble.com/users/1770290/screenshots/6220590/bg_82.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
  }

  .App {
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  ul li {
    list-style: none;
  }

  input, textarea {
    /* text-transform: capitalize; */
  }

  .row {
    display: flex;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

   .center {
    align-items: center;
  }

  .center-js {
    justify-content: center;
  }

  .btw {
    justify-content: space-between;
  }

  .start {
    align-items: flex-start;
  }

  .margin-btm {
    margin-bottom: 2rem;
  }

  .gap-1 {
    gap: 1rem;
  }

  .avt, .avatar {
    background-color: #1C82FC;
  }

  .orange-hov:hover {
    border-bottom: 1px black solid;
    cursor: pointer;
    padding-bottom: 2px;
  }

  .gap {
    gap: .5rem;
  }

`;
export default GlobalStyle;
