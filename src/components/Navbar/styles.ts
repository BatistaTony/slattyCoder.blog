import styled from 'styled-components'


interface NavbarStyledProps {
    isFixed?:boolean
}

export const NavbarStyled = styled.div<NavbarStyledProps>`
	width: 100%;
	height: 100px;
	background: red;
    position: ${({isFixed})=> isFixed ? "fixed": "relative"};
    left:0;
    top:0;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
`


export const Logo = styled.div`
width:100px;
height:30px;

`


