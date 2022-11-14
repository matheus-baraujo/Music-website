import styled from "styled-components";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    gap: 16px;
    position: fixed;
    width: 100%;
`;

function Menu() {
    return (
        <StyledMenu>
            <div>
                <a href="">Teste</a>
                <a href="">Teste</a>
                <a href="">Teste</a>
                <a href="">Teste</a>
            </div>
        </StyledMenu>
    );
}

export default Menu;
