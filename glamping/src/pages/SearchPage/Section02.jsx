import React, { useState } from "react";
import styled from "styled-components";
import Section02Item from "./Section02Item";

const ContainerDiv = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .container {
       margin-top: 150px;

       & > .row {
        margin-bottom: 60px;
       }
    }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0 120px 0;
`;
const PrevButton = styled.button`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #e5e7eb;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s ease;
  margin-right: 15px;

  &:hover {
    background-color: #d1d5db;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const NextButton = styled.button`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: #e5e7eb;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  margin-left: 15px;

  &:hover {
    background-color: #d1d5db;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const PageNumberButton = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  border: 1px solid #000;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  margin: 0 5px;

  background-color: ${(props) => (props.active ? "#3b82f6" : "#e5e7eb")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
`;

function Section02(){
  const items = [
    {
      imgUrl: "assets/images/search1.png",
      location: "인천광역시 강화군",
      name: "바다로캠핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "150,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search2.png",
      location: "인천광역시 남동구",
      name: "에제르 파크",
      option: "글램핑+침대+전실+개별바비큐",
      price: "30,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search3.png",
      location: "인천광역시 옹진군",
      name: "퀸스비치 글램핑 펜션",
      option: "글램핑+침대+전실+개별바비큐",
      price: "221,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search4.png",
      location: "인천광역시 강화군",
      name: "하늘바다 글램핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "100,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search5.png",
      location: "인천광역시 강화군",
      name: "어반티지 글램핑 펜션",
      option: "글램핑+침대+전실+개별바비큐",
      price: "130,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search6.png",
      location: "인천광역시 강화군",
      name: "강화캠핑파크",
      option: "글램핑+침대+전실+개별바비큐",
      price: "160,000",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    
    {
      imgUrl: "assets/images/search7.png",
      location: "인천광역시 옹진군",
      name: "글램하이 글램핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "189,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search8.png",
      location: "인천광역시 옹진군",
      name: "블랙트리캠핑장",
      option: "글램핑+침대+전실+개별바비큐",
      price: "210,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search9.png",
      location: "인천광역시 옹진군",
      name: "선재담 글램핑&카라반",
      option: "글램핑+침대+전실+개별바비큐",
      price: "230,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search10.png",
      location: "인천광역시 강화군",
      name: "노을빛바다애글램핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "150,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search11.png",
      location: "인천광역시 강화군",
      name: "오크힐 글램핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "150,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search12.png",
      location: "인천광역시 강화군",
      name: "해이든 지앤에스",
      option: "글램핑+침대+전실+개별바비큐",
      price: "149,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },

    {
      imgUrl: "assets/images/search13.png",
      location: "인천광역시 중구",
      name: "왕산오토캠핑장",
      option: "글램핑+침대+전실+개별바비큐",
      price: "105,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search14.png",
      location: "인천광역시 중구",
      name: "섬뜰아래 캠핑장",
      option: "글램핑+침대+전실+개별바비큐",
      price: "150,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search15.png",
      location: "인천광역시 옹진군",
      name: "메리글램핑",
      option: "글램핑+침대+전실+개별바비큐",
      price: "189,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search16.png",
      location: "인천광역시 강화군",
      name: "헬로카라반",
      option: "글램핑+침대+전실+개별바비큐",
      price: "110,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search17.png",
      location: "인천광역시 강화군",
      name: "씨사이드힐캠핑장",
      option: "글램핑+침대+전실+개별바비큐",
      price: "120,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search18.png",
      location: "인천광역시 옹진군",
      name: "십리포힐링카라반",
      option: "글램핑+침대+전실+개별바비큐",
      price: "149,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search19.png",
      location: "인천광역시 옹진군",
      name: "글램독 애견펜션",
      option: "글램핑+침대+전실+개별바비큐",
      price: "99,000원 ",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search20.png",
      location: "인천광역시 서구",
      name: "청라 해변공원 캠핑장",
      option: "글램핑+침대+전실+개별바비큐",
      price: "40,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    },
    {
      imgUrl: "assets/images/search21.png",
      location: "인천광역시 강화군",
      name: "글램조이",
      option: "글램핑+침대+전실+개별바비큐",
      price: "250,000원",
      checkIn: "14:00",
      checkOut: "11:00"
    }
  ];
  const ITEM_CNT = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEM_CNT);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  const startIndex = (currentPage - 1) * ITEM_CNT;
  const currentItems = items.slice(startIndex, startIndex + ITEM_CNT);

  return (
    <ContainerDiv>
      <div className="container">
        {currentItems.map((item, idx) => (
          <Section02Item key={idx} item={item} />
        ))}
      </div>

      {/* 페이지네이션 컨트롤 */}
      <ButtonDiv>
        <PrevButton
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          이전
        </PrevButton>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <PageNumberButton
              key={page}
              active={page === currentPage}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PageNumberButton>
          );
        })}

        <NextButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          다음
        </NextButton>
      </ButtonDiv>
    </ContainerDiv>
  );
};

export default Section02;