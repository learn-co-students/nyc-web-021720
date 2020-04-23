import styled from 'styled-components';

export const StyledPreview = styled.div`
    background: no-repeat url(${props => props.image});
    height: 600px;
    background-size: cover;
`

export const PreviewText = styled.div`
    height: 600px;
    width: 100.5vw;
    background-color: rgba(10,10,10,0.5);
    padding: 5px 0px 0px 5px;
`

export const TopLevelStyle = styled.div`
    background-color: black;
    color: white;
    width: 101vw;
    min-height: 100vh;

    h2 {
        margin: 10px 10px 0px;
    }
`

export const CarouselRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 100vw;
    align-items: center;
`

export const CarouselContainer = styled.div`
    padding: 10px;
`

export const StyledCard = styled.div`
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 23%;
    margin: 0px 5px;
`

export const CarouselImg = styled.img`
    max-height: 250px;
    max-width: 100%;
`

export const FlexGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

export const NavRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-between;

    > div {
        flex-basis: 10%;
    }

`

export const VerticalFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > label {
        margin: 8px 0px;
    }
`