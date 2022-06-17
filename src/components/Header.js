import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/Logo.png" /> 
        <NavMenu>
          <a>
            <img src="/images/home-icon.svg"/>
            <span>HOME</span>
          </a>

          <a>
            <span>SUPPORT</span>
          </a>
          <a>
            <span>ACTIVITIES</span>
          </a>

          <a>
            <span>PRAYER REQUEST</span>
          </a>


        </NavMenu>
        <UserImg src = '/images/mypic.png' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
align-items: center;
padding: 0 50 px;
`
const Logo = styled.img`
width: 100px;


`
const NavMenu = styled.div`
display: flex;
flex:1;
margin-left: 30px;
align-items: center;
cursor: pointer;
a{
  display: flex;
  align-items: center;
  padding: 0 12px;
    img{
    height: 20px;
    }
    
    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);

      }
    }

    &:hover{
      span:after{
        transform: scaleX(1);
        opacity:1;
      }
    }
}

`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
` 