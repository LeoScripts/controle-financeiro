import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;

    button{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 0 10px 0 gray;
        background: blue;
        color: #FFF;
        font-weight: bold;
        margin-top: 10px;
    }

    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 1;
    }
`;

export const Date = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    width: 25%;
    border-right: solid  3px gray;

    label{
        text-align: center;
        font-weight: bold;
    }

    input{
        padding: 5px;
        margin-top: 10px;
        border-radius: 5px;
    }
`;