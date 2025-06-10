import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBarDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #fff;
  align-items: center;
`;
const LogoDiv = styled.div`
  width: 206px;
  margin-right: 375px;
  padding-left: 0px;
`;
const GlampingSpan = styled.span`
  font-size: 40px;
  line-height: 50px;
  font-family: Inter Variable;
  font-weight: 800;
  letter-spacing: -2PX;
  background: linear-gradient(182deg,rgba(57, 220, 114, 1) 30%, rgba(39, 228, 168, 1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
const MainNavUl = styled.ul`
  display: flex;
  width: 38%;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  padding-left: 0px;
  list-style: none;
`;
const MainNavLi = styled.li`
  font-size: 20px;
  list-style: none;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: all .5s;
    color: #3DAD72;
    cursor: pointer;
  }
`;

function NavBar () {
  const navigate = useNavigate();

  return (
    <NavBarDiv>
      <LogoDiv>
        <GlampingSpan onClick={() => navigate("/")}>glamping</GlampingSpan>
      </LogoDiv>
      <MainNavUl>
        <MainNavLi>글램핑장 검색</MainNavLi>
        <MainNavLi>추천</MainNavLi>
        <MainNavLi>관광지</MainNavLi>
        <MainNavLi>테마별</MainNavLi>
        <MainNavLi>이벤트</MainNavLi>
      </MainNavUl>
    </NavBarDiv>
  );
}

export default NavBar;