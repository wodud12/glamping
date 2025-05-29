import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
  height: 830px;
  display: flex;
  align-items: center;
`;
const Sec04TopDiv = styled.div`
  & > h2 {
    font-size: 45px;
    font-family: 'KOTRA HOPE', sans-serif;
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
const Sec04ContainerDiv = styled.div`
  width: 309px;
  height: 398px;
  margin-top: 25px;
  border: 1px solid #d6d6d6;
`;
const Sec04ImgDiv = styled.div`
  & > img {
    width: 100%;
    margin-bottom: 35px;
  }
`;
const Sec04TextDiv = styled.div`
  font-size: 16px;
`;
function Section04() {

  return (
    <ContainerDiv>
      <div className="container">
        <div className="row">
          <Sec04TopDiv className="col-md-12 text-center">
            <h2>공지사항</h2>
            <p>여행 일정을 선택하고 특가를 확인하세요!</p>
          </Sec04TopDiv>
        </div>
        <div className="row gy-4">
          <div className="col-lg-3 col-sm-6">
            <Sec04ContainerDiv>
              <Sec04ImgDiv>
                <img src="assets/images/glam11.png" alt="" />
              </Sec04ImgDiv>
              <Sec04TextDiv>
                <p>
                  애견동반 가능합니다!
                  동반시 체크란에 꼭 체크해주시고,
                  주의사항 꼭! 읽어주세요.
                  궁금하 신 부분 있으시면 하단에 있는
                  연락처로 연락해주세요.
                </p>
              </Sec04TextDiv>
            </Sec04ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec04ContainerDiv>
              <Sec04ImgDiv>
                <img src="assets/images/glam12.png" alt="" />
              </Sec04ImgDiv>
              <Sec04TextDiv>
                <p>
                  매점 있어요!
                  스낵,라면,음료,주류 등 있답니다.
                  궁금 하 신 부분 있으시면 하단에 있는 
                  연락처로 연락해주세요.
                </p>
                <p>( 오픈시간 10:00 ~ 22:00 )</p>
              </Sec04TextDiv>
            </Sec04ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec04ContainerDiv>
              <Sec04ImgDiv>
                <img src="assets/images/glam13.png" alt=""/>
              </Sec04ImgDiv>
              <Sec04TextDiv>
                <p>
                  바베큐장 리모델링 완료!! 
                  더욱 쾌적하고 감각적인 공간에서 
                  특별한 바베큐 타임을 즐겨보세요.
                </p>
                <p>(바베큐 이용시 20:00 까지 이용 가능)</p>
              </Sec04TextDiv>
            </Sec04ContainerDiv>
          </div>
          <div className="col-lg-3 col-sm-6">
            <Sec04ContainerDiv>
              <Sec04ImgDiv>
                <img src="assets/images/glam14.png" alt=""/>
              </Sec04ImgDiv>
              <Sec04TextDiv>
                <p>전기 충전소가 설치 되었습니다.
                  테슬라는 변환잭이 필요하며 
                  그밖에 국내외 전기자동차는 
                  모두 충전 가능합니다. 많이 이용하세요~</p>
              </Sec04TextDiv>
            </Sec04ContainerDiv>
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
};

export default Section04;