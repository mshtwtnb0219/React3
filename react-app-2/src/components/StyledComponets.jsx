import styled from 'styled-components';



export const StyledComponets = () => {
    return (
            <SContainer>
              <p>Styled Componentsの例</p>
              <button>Fight</button>
            </SContainer>
    )
}


const SContainer = styled.div`
  border: solid 2px;
  border-radius: 16px;
  padding: 8px;
  margin: 8px;
`;