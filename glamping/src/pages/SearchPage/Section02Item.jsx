import styled from "styled-components";

const Sec02ImgBoxDiv = styled.div`
  position: relative;

  & > img {
    width: 417px;
    height: 253px;
    border-radius: 10px;
  }
  
  & > button {
    width: 104px;
    height: 35px;
    background: #fff;
    border-radius: 100px;
    border: 1px solid #FDFDFD;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    color: #0CB47F;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Sec02TitleDiv = styled.div`
  width: 732px;
  height: 253px;

  & > h4 {
    font-size: 24px;
    line-height: 130%;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 5px;
  }
`;
const Sec02Text01 = styled.p`
  font-size: 14px;
  letter-spacing: -1px;
  line-height: 130%;
  margin-bottom: 7px;
`;
const Sec02Text02 = styled.p`
  margin-bottom: 22px;
`;
const Sec02ReserveDiv = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin-bottom: 0px;
  }
  & > img {
    width: 6px;
    height: 10px;
  }
`;

function Section02Item ( { item } ) {

  return (
    <div className="row">
      <div className="col-md-11 d-flex justify-content-between">
        <Sec02ImgBoxDiv>
          <img src={item.imgUrl} alt="search1" />
          <button>자세히보기</button>
        </Sec02ImgBoxDiv>
        <Sec02TitleDiv>
          <Sec02Text01>{item.location}</Sec02Text01>
          <h4>{item.name}</h4>
          <Sec02Text02>{item.option}</Sec02Text02>
          <Sec02Text02>{item.price}원 / 1박<br />체크인 {item.checkIn} ~ 체크아웃 {item.checkOut}</Sec02Text02>
          <img src="assets/images/search_icon.png" alt="search_icon" />
        </Sec02TitleDiv>
      </div>
      <div className="col-md-1">
        <Sec02ReserveDiv>
          <p>예약하기</p>
          <img src="assets/images/search_icon_right.png" alt="search_icon_right" />
        </Sec02ReserveDiv>
      </div>
    </div>
  );
}

export default Section02Item;