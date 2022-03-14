import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;

  button {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px 0 gray;
    background: blue;
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
  }

  button:hover {
    opacity: 0.8;
  }
  button:active {
    opacity: 1;
  }
`;

export const ContainerInfos = styled.div`
  display: flex;
`;

export const Date = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: solid 3px gray;

  label {
    text-align: center;
    font-weight: bold;
  }

  input {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;

export const Category = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: solid 3px gray;

  label {
    text-align: center;
    font-weight: bold;
  }

  select {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;
export const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: solid 3px gray;

  label {
    text-align: center;
    font-weight: bold;
  }

  input {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;

export const Price = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;


  label {
    text-align: center;
    font-weight: bold;
  }

  input {
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
  }
`;
