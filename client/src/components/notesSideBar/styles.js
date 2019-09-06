import styled from "styled-components";

export const Style = styled.div`
  width: 30%;
  height: calc(100% - 66px);
  float: left;
  background: #ecf0f1;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  @media (max-width: 992px) {
    height: auto;
    max-height: 50px;
    width: 100%;
    overflow: hidden;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
    &.open {
      max-height: none;
    }
  }
  .btn.mobile {
    display: none;
    @media (max-width: 992px) {
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 9px;
      margin: 0;
    }
  }
  h2 {
    height: 60px;
    font-size: 0.9rem;
    padding: 10px 150px 10px 10px;
    margin: 0;
    @media (max-width: 992px) {
      padding: 10px;
      height: auto;
    }
  }
  .btn {
    position: absolute;
    right: 10px;
    top: 10px;
    @media (max-width: 992px) {
      position: relative;
      float: left;
      margin: 10px 0;
      right: 0;
      top: 0;
      margin: 10px;
    }
  }
  ul {
    height: calc(100% - 60px);
    overflow-y: auto;
    width: 100%;
    @media (max-width: 992px) {
      height: auto;
    }
    li {
      display: block;
      width: 100%;
      padding: 10px 15px;
      color: #555;
      cursor: pointer;
      text-transform: capitalize;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      h3 {
        margin: 0;
        padding: 0;
        font-size: 0.9rem;
      }
      span {
        font-style: italic;
        font-size: 11px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      &.active {
        background: #fff;
        color: #333;
      }
    }
  }
`;
