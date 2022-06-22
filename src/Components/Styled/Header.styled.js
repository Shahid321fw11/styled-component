import styled from "styled-components";

export const StyledHeaderComp = styled.header`
    // background-color: #ebfbff;
    // we can use also prop 
    // background-color: ${(props) => props.bg};
    // we can destruct this as well
    // background-color: ${({ bg }) => bg};
    // color:'black';

    // we can use also theme as a prop
    background-color: ${({ theme }) => theme.colors.header};

    // padding: 40px 0;

    // h1 {
    //     font-size: 1.5rem;
    //     font-weight: bold;
    //     margin: 0;
    //     // color: red;
    // }

    // &:hover {
    //     background-color: black;
    // }
`;


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;


  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
