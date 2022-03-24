import React from "react";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";


const Home = ({navigation}) => {

    return ( 
        <> 
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <PageTitle home={true}>Registo de Exercicios</PageTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={ require('../img/running-icon-27.png') } />
                        <StyledButton onPress={() => navigation.navigate('Pulsaçao')}>
                            <ButtonText>
                                Pulsaçao
                            </ButtonText>
                        </StyledButton>
                    <Line />
                        <StyledButton onPress={() => navigation.navigate('Mapa')}>
                            <ButtonText>
                                Mapa
                            </ButtonText>
                        </StyledButton>
                    <Line />
                        <StyledButton onPress={() => navigation.navigate('Exercicio')}>
                            <ButtonText>
                                Exercicio
                            </ButtonText>
                        </StyledButton>

                    </StyledFormArea>
                </HomeContainer>
            </InnerContainer>
        </>
    );
}

export default Home;