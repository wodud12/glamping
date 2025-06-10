import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  height: 256px;
  background: #383838;
  padding-top: 59px;

  & h2 {
    font-size: 40px;
    font-family: 'KOTRA HOPE';
    line-height: 50px;
    font-weight: 600;
    background: linear-gradient(#39DC72 60%, #27E4A8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 20px;
  }
    
  & p {
    color: #fff;
  }
`;
const FooterUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #fff;
  gap:20px;
`;
const FooterATag = styled.a`
  text-decoration: none;
  color: inherit;
`;
function Footer() {

  return (
    <ContainerDiv>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>glamping</h2>
            <p>사업자등록번호 : 123-45-67890 대표번호 : 070-1478-9632 본사 : 인천광역시 남동구 인주대로 593 , 12층 (구월동)</p>
            <FooterUl>
              <li><FooterATag href="#">이용약관</FooterATag></li>
              <li><FooterATag href="#">법적고지</FooterATag></li>
              <li><FooterATag href="#">개인정보이용처리방침</FooterATag></li>
              <li><FooterATag href="#">고객센터 1661-8514</FooterATag></li>
            </FooterUl>
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
};

export default Footer;