import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
   
`;

export const MonthArea = styled.div`
    flex:1;
    display: flex;
    
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-sinze: 25px;
    cursor: pointer;
`;

// o flex 1 neste caso esta sendo usado pra pegar o espaço restante
export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;


// esse tera o dobro do espaço do monthArea 
// por essa razao usamos flex 2
export const ResumeArea = styled.div`
    flex:2;
    display: flex;
`;