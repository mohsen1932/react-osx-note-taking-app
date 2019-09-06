import styled from "styled-components";

export const Style = styled.div`
  width: 20%;
  height: 100vh;
  float: left;
  background: #2d3235;
  color: #fff;
  position: relative;
  @media (max-width: 992px) {
    height: auto;
    max-height: 50px;
    width: 100%;
    overflow: hidden;
    &.open {
      max-height: none;
    }
  }
  h1 {
    padding: 15px;
    margin: 0;
    font-size: 1.5rem;
    height: 65px;
    @media (max-width: 992px) {
      height: auto;
      padding: 8px 15px;
    }
  }
  .btn.mobile {
    display: none;
    @media (max-width: 992px) {
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 8px;
    }
  }
  ul {
    height: calc(100% - 205px);
    overflow-y: auto;
    @media (max-width: 992px) {
      height: auto;
    }
    li {
      display: block;
      width: 100%;
      padding: 10px 15px;
      color: #ccc;
      cursor: pointer;
      text-transform: capitalize;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      &.active {
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
      }
    }
  }
  .form-group {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 140px;
    padding: 15px;
    background: #2d3235;
    @media (max-width: 992px) {
      position: relative;
      float: left;
      margin-bottom: 0;
    }
    label {
      color: #aaa;
    }
    .form-btn {
      margin-top: 5px;
    }
  }
`;
