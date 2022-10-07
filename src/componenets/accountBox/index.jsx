import {React, useState} from 'react'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'
import {SignupForm} from './SignupForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'
const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, .28);
    position: relative;
    overflow: hidden;

`
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`
const BackDrop = styled(motion.div)`
    position: absolute;
    displayL flex;
    flex-direction: column;
    border-radius: 50%;
    top: 0;
    width: 160%;
    height: 550px;
    top: -270px;
    left: -70px;
    background: rgb(115,121,9);
    background: linear-gradient(90deg,  rgba(115,121,9,0.5326505602240896) 35%,rgba(241,255,0,0.9108018207282913) 100%);
    transform: rotate(60deg)
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const HeaderText = styled.h2`
    font-size: 33px;
    font-weight: 800;
    letter-spacing: .1em;
    color: #fff;
    z-index: 10;
    margin: 0;
    
`
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    margin: 0;
    position: relative;
    margin-top: .5rem
`
export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`
// const backDropVarients = {
//     expanded: {
//         width: '233%',
//         height: '1050px',
//         borderRadius: '20%',
//         transform: 'rotate(60deg)',

//     },
//     collapsed: {
//         width: '160%',
//         height: '550px',
//         borderRadius: '50%',
//         transform: 'rotate(60deg)'
//     }
// }
// const expandingTransition = {
//     type: 'spring',
//     duration: 2.3,
//     stiffness: 30,
// }

export function AccountBox(props) {
    // const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin")
    // const playExpandingAnimation = () => {
    //     setExpanded(true);
    //     setTimeout(() => {
            
    //     },3000)
    
    // }
    const switchToSignUp = () => {
        // playExpandingAnimation();
        setTimeout(() => {
            setActive("signup")
        }, 400)
    }
    const switchToSignIn = () => {
        // playExpandingAnimation();
        setTimeout(() => {
            setActive("signin")
        }, 400)
    }
    const contextValue = {switchToSignUp, switchToSignIn};

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
            <TopContainer>
                <BackDrop initial={{opacity: 0, height: 5000}} animate={{opacity: 1, height: 500}} transition={{delay: .5, duration: 1.5}}/>
                
                {active === "signin" && <HeaderContainer>
                    <HeaderText>Welcome</HeaderText> 
                    <HeaderText>Back</HeaderText>
                    <SmallText>please sign-in to continue</SmallText>
                </HeaderContainer>}

                {active === 'signup' && <HeaderContainer>
                    <HeaderText>Let's</HeaderText> 
                    <HeaderText>Begin</HeaderText>
                    <SmallText>please sign-up to continue</SmallText>
                </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
                {active === 'signin' && <LoginForm /> }
                {active === 'signup' && <SignupForm />}
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    )
}