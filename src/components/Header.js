import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
        <a href="https://www.linkedin.com/in/praveen-sinnur/" target="_blank">
            {/* <img src="/images/logo.svg" alt="" /> */}
            praveen
        </a>
    
        

        
    </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 0 30px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        color: rgba( 255, 255, 255, 0.8);
    }
`
