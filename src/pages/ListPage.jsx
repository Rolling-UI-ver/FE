import React from 'react';

const Header = "p-[16px] m-[8px] bg-[#FFFFFF] text-center border-b mb-[50px]";
const sectionClass = "w-[1200px] text-center ml-[380px]";

const HotPaperClass = "mb-[36px]";
const BoxClass = "flex justify-start items-center gap-[16px]";
const h2Class = "font-bold text-[24px] text-left mb-[12px]";
const Box1 = "text-left bg-[#ECD9FF] p-[12px] rounded-[16px]";
const Box2 = "text-left bg-[#FFF2AD] p-[12px] rounded-[16px]";
const Box3 = "text-left bg-[#B1E4FF] p-[12px] rounded-[16px]";
const Box4 = "text-left bg-[#D0F5C3] p-[12px] rounded-[16px]";
const BoxH2 = "font-bold text-[24px]";
const BoxP = "font-bold text-[16px] mb-[24px] ";
const EmojiBoxClass = "flex justify-between items-center gap-[8px] m-[12px]";
const emoji = "rounded-[16px] bg-[#FFFFFF] py-[8px] px-[16px]";

const CurrentPaperClass = "";

function ListPage() {
  return (
    <>
      <main>
        <div className={Header}>Header</div>
        <section className={sectionClass}>
          <div className={HotPaperClass}>
            <h2 className={h2Class}>인기 롤링 페이퍼 🔥</h2>
            <div className={BoxClass}>
              <div className={Box1}>
                <h2 className={BoxH2}>To. Sowon</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box2}>
                <h2 className={BoxH2}>To. SowonKim</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box3}>
                <h2 className={BoxH2}>To. SowonChoi</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box4}>
                <h2 className={BoxH2}>To. SowonLee</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>
            </div>
          </div>

          <div className={CurrentPaperClass}>
            <h2 className={h2Class}>최근에 만든 롤링 페이퍼 ⭐️️</h2>
            <div className={BoxClass}>
              <div className={Box1}>
                <h2 className={BoxH2}>To. Sowon</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box2}>
                <h2 className={BoxH2}>To. SowonKim</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box3}>
                <h2 className={BoxH2}>To. SowonChoi</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>

              <div className={Box4}>
                <h2 className={BoxH2}>To. SowonLee</h2>
                <p>imglist</p>
                <p className={BoxP}>30명이 작성했어요!</p>
                <hr className="border-gray-300" />
                <div className={EmojiBoxClass}>
                  <div className={emoji}>👍 20</div>
                  <div className={emoji}>😍 12</div>
                  <div className={emoji}>😂 7</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ListPage;