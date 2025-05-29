import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
  height: 830px;
  display: flex;
  align-items: center;
`;
const Sec02Top = styled.div`
  & > h2 {
    font-size: 45px;
    font-weight: 45px;
    font-family: 'KOTRA HOPE';
    font-weight: normal;
    font-style: normal;
    background: linear-gradient(#39DC72 60%, #27E4A8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 20px;
  }
  & > p {
    font-size: 18px;
    font-weight: 20px;
    color: #3DAD72;
    margin-bottom: 50px;
  }
`;
const Sec02ContainerDiv = styled.div`
  width: 100%;
  position: relative;
`;
const Sec02Img = styled.div`
  & > img {
    width: 100%;
    border-radius: 20px;
  }
`;
const Sec02Text = styled.div`
  z-index: 1;
  display: flex;
  position: absolute;
  top:0;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: #3DAD72;
  text-align: center;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.6s;
  & > h2{
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
  }
  &:hover{
     opacity: 0.9;
  }
`;

function Section02() {
  return (
    <ContainerDiv>
      <div className="container">
        <div className="row">
          <Sec02Top className="col-md-12 text-center">
            <h2>추천글램핑</h2>
            <p>여행 일정을 선택하고 특가를 확인하세요!<br/>
            여행 일정을 특가를 확인하세요!</p>
          </Sec02Top>
        </div>
        <div className="row gy-4">
          <div className="col-lg-3 col-sm-6">
            <Sec02ContainerDiv>
              <Sec02Img>
                <img src="assets/images/glam1.png" alt="glam1"/>
              </Sec02Img>
              <Sec02Text>
                <h2>강화 아로니움</h2>
                <p>캠핑 · 글램핑</p>
              </Sec02Text>
            </Sec02ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec02ContainerDiv>
              <Sec02Img>
                <img src="assets/images/glam2.png" alt="glam2"/>
              </Sec02Img>
              <Sec02Text>
                <h2>홍천 휴토피아 글램핑</h2>
                <p>캠핑 · 글램핑</p>
              </Sec02Text>
            </Sec02ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec02ContainerDiv>
              <Sec02Img>
                <img src="assets/images/glam3.png" alt="glam3"/>
              </Sec02Img>
              <Sec02Text>
                <h2>청포대썬셋카라반</h2>
                <p>캠핑 · 글램핑</p>
              </Sec02Text>
            </Sec02ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec02ContainerDiv>
              <Sec02Img>
                <img src="assets/images/glam4.png" alt="glam4"/>
              </Sec02Img>
              <Sec02Text>
                <h2>여수 루미너스글램핑</h2>
                <p>캠핑 · 글램핑</p>
              </Sec02Text>
            </Sec02ContainerDiv>
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
};
export default Section02;