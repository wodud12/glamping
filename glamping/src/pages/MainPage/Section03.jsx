import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
  height: 830px;
  display: flex;
  align-items: center;
`;
const Sec03TopDiv = styled.div`
  text-align: center;

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
const Sec03ContainerDiv = styled.div`
  position: relative;

  & > img {
    width: 100%;
    border-radius: 20px;
  }
`;
const Sec03TextDiv = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

function Section03() {

  return (
    <ContainerDiv>
      <div className="container">
        <div className="row">
          <Sec03TopDiv className="col-md-12">
            <h2>Travel</h2>
            <p>여행 일정을 선택하고 특가를 확인하세요!</p>
          </Sec03TopDiv>
        </div>
        <div className="row gy-3">
          <div className="col-md-6">
            <Sec03ContainerDiv>
              <img src="assets/images/glam7.png" alt="glam7" />
              <Sec03TextDiv>
                <p>석모도미네랄스파</p>
                <p>노천탕은 바닷가와 인접돼 있어 색다른 정취를 느낄 수 있습니다.</p>
              </Sec03TextDiv>
            </Sec03ContainerDiv>
          </div>
          <div className="col-md-6">
            <div className="row gy-3">
              <div className="col-md-6">
                <Sec03ContainerDiv>
                  <img src="assets/images/glam8.png" alt="glam8" />
                  <Sec03TextDiv>
                    <p>알파카 월드</p>
                    <p>알파카와 사슴을 만날 수 있고 조류 사육장과 푸드코트가 있는 넓고 푸르른 공원입니다.</p>
                  </Sec03TextDiv>
                </Sec03ContainerDiv>
              </div>
              <div className="col-md-6">
                <Sec03ContainerDiv>
                  <img src="assets/images/glam9.png" alt="glam9" />
                  <Sec03TextDiv>
                    <p>여수 해상케이블카</p>
                    <p>아시아에서는 홍콩, 싱가포르, <br/>베트남에 이어 네번째, 대한민국에서는 첫번째로 설치된 해상 <br/>케이블카이다.</p>
                  </Sec03TextDiv>
                </Sec03ContainerDiv>
              </div>
              <div className="col-md-12">
                <Sec03ContainerDiv>
                  <img src="assets/images/glam10.png" alt="glam10" />
                  <Sec03TextDiv>
                    <p>석모도미네랄스파</p>
                    <p>노천탕은 바닷가와 인접돼 있어 색다른 정취를 느낄 수 있습니다.</p>
                  </Sec03TextDiv>
                </Sec03ContainerDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
};

export default Section03;