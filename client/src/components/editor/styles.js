import styled from "styled-components";

export const Style = styled.div`
  width: 70%;
  height: calc(100% - 75px);
  float: left;
  background: #fff;
  @media (max-width: 992px) {
    height: auto;
    width: 100%;
    overflow: hidden;
  }
  .editor-header {
    width: 100%;
    height: 50px;
    color: #ccc;
    font-size: 13px;
    padding: 15px 20px 0 20px;
    position: relative;
    vertical-align: bottom;
  }
  .btn {
    position: absolute;
    top: 10px;
    &.save {
      right: 110px;
    }
    &.delete {
      right: 20px;
    }
  }
  textarea {
    width: 100%;
    height: calc(100% - 50px);
    background: #fff;
    border: none;
    overflow-y: auto;
    padding: 10px 20px;
    font-size: 1rem;
    line-height: 1.75;
    &:focus {
      border: none;
      outline: 0;
    }
  }
  .editor-placeholder {
    display: block;
    width: 100%;
    padding: 20px;
    margin-top: 100px;
    font-size: 1.5rem;
    line-height: 2;
    color: #ccc;
    text-align: center;
  }
`;
