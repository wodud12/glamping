import styled  from "styled-components";


const ContainerDiv = styled.div`
  width: 100%;
  height: 830px;
  display: flex;
  align-items: center;
  position: relative;

  @media(max-width:1399px) {
    height: 780px;
  }
`;
const Sec01Img = styled.div`
  width: 100%;
  height: 830px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  @media(max-width:1399px) {
    height: 780px;
  }

  & > img {
    width: 100%;
    height: 830px;
    object-fit: cover;

    @media(max-width:1399px) {
     height: 780px;
    }
  }
`;
const Sec01ContainerDiv = styled.div`
  width: 100%;
  padding: 0px;
  z-index: 11;
`;
const Sec01TitleDiv = styled.div`
  margin-bottom: 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media(max-width:1199px) {
    margin-bottom: 50px;
  }
  
  & > h4 {
    text-align: center;
    padding: 10px 20px;
    color: #fff;
    font-size: 80px;
    font-weight: 500;
    margin-bottom: 30px;
    border-radius: 5px;
    font-family: 'KOTRA HOPE';


    @media(max-width:1399px) {
      padding: 10px 10px;
      font-size: 38px;
      margin-bottom: 20px;
    }
  }
`;
const Sec01TextDiv = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 20px;
  margin: 0 auto;

  @media(max-width:1399px) {
    width: 100%;
    height: 210px;
  }
  @media(max-width:1199px) {
    width: 80%;
    height: 380px;
  }

  & img {
    width: 24px;
    height: 24px;
    margin: 0 25px;
    
    @media(max-width:1399px) {
      margin: 0 10px 0 0;
    }
  }
`;
const TextTopDiv = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #C8BCBC;
  display: flex;
  align-items: flex-end;

  & > p {
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    color: #3DAD72;
    width: 130px;
    height: 50.5px;
    border-bottom: 3px solid #3DAD72;
    z-index: 50;
    margin-bottom: 0;
    padding-bottom: 20px;
    text-align: center;
  }
`;
const TextBottomDiv = styled.div`
  padding: 10px 26px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-radius: 20px;
  opacity: 1;
  cursor: pointer;

  & > input {
    width: 70%;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    border: none;
    font-size: 18px;
    background: #fff;

    &:hover {
      border: 0.5px solid #3DAD72;
    }

    @media(max-width:1399px) {
      width: 90%;
    }
    
    @media(max-width:1199px) {
      width: 100%;
    }
  }
`;
const TextBottomUserDiv = styled.div`
  padding: 10px 26px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-radius: 20px;
  opacity: 1;
  cursor: pointer;

  & > input {
    width: 70%;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    border: none;
    font-size: 18px;
    background: #fff;

    @media(max-width:1399px) {
      width: 90%;
    }
    
    @media(max-width:1199px) {
      width: 100%;
    }
  }
`;
const Sec01Button = styled.button`
  width: 100% ;
  height: 60px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: #fff;
  background: #0DCD90;
  border-radius: 20px;
  text-align: center;
  border: none;

  &:hover {
    background: #3CB977;
    transform: all .5s;
    cursor: pointer;
  }
`;

function Section01() {
  return (
    <ContainerDiv>
      <Sec01Img><img src="assets/images/Search_bg.png" alt="Search_bg" /></Sec01Img>
      <Sec01ContainerDiv className="container">
        <div className="row">
          <Sec01TitleDiv className="col-md-12">
            <h4>BADARO GLAMPING</h4>
          </Sec01TitleDiv>
        </div>
        <Sec01TextDiv className="row bg-white gy-xl-3 gy-2 ">
          <div className="col-xl-12 col-sm-12">
            <TextTopDiv>
              <p>국내숙소</p>
            </TextTopDiv>
          </div>
          <div className="col-xl-4 col-sm-12">
            <TextBottomDiv>
              <img src="assets/images/search.png" alt="검색아이콘" />
              <input type="choose" placeholder="인천광역시" />
            </TextBottomDiv>
          </div>
          <div className="col-xl-4 col-sm-12">
            <TextBottomDiv>
              <img src="assets/images/cal.png" alt="달력아이콘" />
              <input type="date" placeholder="04월29일 - 04월30일 (1박)" />
            </TextBottomDiv>
          </div>
          <div className="col-xl-2 col-sm-12">
            <TextBottomUserDiv>
              <img src="assets/images/user.png" alt="사람아이콘" />
              <input type="number" width="50px" placeholder="인원 : 1" />
            </TextBottomUserDiv>
          </div>
          <div className="col-xl-2 col-sm-12">
            <Sec01Button type="button" onClick="">
              검색
            </Sec01Button>
          </div>
        </Sec01TextDiv>
      </Sec01ContainerDiv>
    </ContainerDiv>
  );
};

export default Section01;