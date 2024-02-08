import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250vh;
  padding: 20px;
  background-color: #eef4f7;
`
export const Heading = styled.h1`
font-family:"Roboto"
height:60px;
border-bottom:4px solid  #52bbf0;
font-size:32px;
color:#334155;
padding-left:0px;
background-color:transparent;
`
export const BottomCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px;
  background-color: pink;
  position: relative;
`
export const PlaceAndContentCont = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 90%;
  height: 50vh;
  margin: 20px;
  position: relative;
  padding: 10px;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
