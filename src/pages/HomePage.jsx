import React from "react";
import { Link } from "react-router-dom";
import cardImage from '../assets/cardimage.png';
import emojiImage from '../assets/emojiimage.png';

const Header = "p-[16px] m-[8px] bg-[#FFFFFF] text-center border-b mb-[50px]";
const sectionClass = "w-[1200px] text-center ml-[380px]";
const pointWrapClass =
  "flex justify-between items-center bg-[#F6F8FF] rounded-[16px] p-[32px] m-[16px] text-left";
const pointClass =
  "text-[14px] text-white rounded-[12px] bg-[#9935FF] p-[4px] m-[9px]";
const h2Class = "p-[12px] font-bold text-[24px]";
const h3Class = "p-[12px] text-[#555555]";
//------point1 tailwind----------

const pointH2Class = "p-[12px] font-bold text-[24px] mr-[180px]";
const ButtonClass =
  "py-[14px] px-[24px] w-[280px] bg-[#9935FF] text-white text-center rounded-[16px]";

function HomePage() {
  return (
    <>
      <main>
        <div className={Header}>Header</div>
        <section className={sectionClass}>
          <div className={pointWrapClass}>
            <div>
              <span className={pointClass}>Ponit. 01</span>
              <h2 className={h2Class}>
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h2>
              <h3 className={h3Class}>로그인 없이 자유롭게 만들어요</h3>
            </div>
            <img src={cardImage} alt="card" />
          </div>

          <div className={pointWrapClass}>
            <img src={emojiImage} alt="emoji" className="w-[50%]" />
            <div>
              <span className={pointClass}>Point. 02</span>
              <h2 className={pointH2Class}>
                서로에게 이모지로 감정을
                <br />
                표현해보세요
              </h2>
              <h3 className={h3Class}>
                롤링 페이퍼에 이모지를 추가할 수<br />
                있어요
              </h3>
            </div>
          </div>
          <Link to="/listpage" className={ButtonClass}>
            구경해보기
          </Link>
        </section>
      </main>
    </>
  );
}

export default HomePage;