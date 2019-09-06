import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html {
      font-size: 16px;
    }
    body {
      overflow-x: hidden;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #555;
    }
    img {
      max-width: 100%;
    }
    ul,
    li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    a {
      color: #009688;
      text-decoration: none;
      &:hover {
        color: #26a69a;
      }
    }
    * {
      box-sizing: border-box;
    }
    #root {
      width: 100%;
      height: 100vh;
      float: left;
      overflow: hidden;
    }
    .btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: 1px solid #aaa;
      padding: 0.35rem 0.5rem;
      font-size: 1rem;
      line-height: 1.25;
      border-radius: 0.25rem;
      color: #555;
      background-color: #fff;
      transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
        border-color 0.5s ease-in-out;
      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
      &:not(:disabled):not(.disabled):hover {
        color: #111;
        background-color: #f1f1f1;
        border-color: #999;
      }
      &:focus {
        outline: none;
      }
      &.disabled,
      &:disabled {
        opacity: 0.5;
      }
    }
    .form-input {
      display: block;
      border-radius: 0.25rem;
      width: 100%;
      line-height: 1.5;
      padding: 0.35rem 0.75rem;
      font-size: .9rem;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      transition: border-color 0.5s ease-in-out;
      &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #009688;
        outline: 0;
      }
      &.error {
        border-color: red;
      }
      &.disabled,
      &:disabled {
        opacity: 0.5;
      }
    }
    form {
      display: block;
      width: 100%;
      float: left;
    }
    .form-group {
      margin-bottom: 1rem;
      width: 100%;
      float: left;
    }
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 12px;
    }
    .error-block {
      color: red;
      font-size: 0.8rem;
    }
    button,
    input {
      overflow: visible;
    }
    .form-btn {
      display: block;
      width: 100%;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: 1px solid #009688;
      padding: 0.35rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      color: #fff;
      background-color: #009688;
      transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
        border-color 0.5s ease-in-out;
      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
      &:not(:disabled):not(.disabled):hover {
        background-color: #00796b;
        border-color: #00796b;
      }
      &:focus {
        outline: none;
      }
      &.disabled,
      &:disabled {
        opacity: 0.65;
      }
    }
`;
export default GlobalStyle;
