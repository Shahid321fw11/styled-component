import React from 'react'
import { Button } from './Styled/Buttons.styled'
import { Container } from './Styled/Container.styled'
import { Flex } from './Styled/Flex.styled'
import { Image, Logo, Nav, StyledHeaderComp } from './Styled/Header.styled'


const StyledHeader = () => {
    return <>
        <StyledHeaderComp>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='' />
                    <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>
                            Huddle re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src='./images/illustration-mockups.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeaderComp>

    </>
}

export default StyledHeader