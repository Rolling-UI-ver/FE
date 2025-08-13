// import './PostPage.css';

export default function Postpage() {
  return (
    <>
      <header>
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px]">
          <div>Rolling</div>
          <button>버튼</button>
        </div>
      </header>
      <main>
        <div className="mx-auto w-[720px] flex flex-col gap-[60px]">
          {/* 입력 영역 */}
          <div className="flex flex-col gap-[12px]">
            <h1 className="text-[24px] font-bold">To.</h1>
            <input
              className="px-[16px] py-[12px] border border-[#d9d9d9] rounded-[8px]"
              type="text"
              placeholder="받는 사람 이름을 입력해주세요."
            />
          </div>

          {/* 배경 선택 영역 */}
          <div>
            <div className="mb-[40px]">
              <h2 className="text-[24px] font-bold">
                배경화면을 선택해주세요.
              </h2>
              <p className="text-[#555555]">
                컬러를 선택하거나, 이미지를 선택할 수 있습니다.
              </p>
            </div>
            <div className="mt-[40px]">
              <div className="flex">
                <button className="w-[122px] h-[40px] px-[16px] py-[7px] rounded-[6px] bg-[#F6F6F6]">
                  컬러
                </button>
                <button className="w-[122px] h-[40px] px-[16px] py-[7px] rounded-[6px] bg-[#F6F6F6]">
                  이미지
                </button>
              </div>

              {/* 색상 박스들 */}
              <div className="mt-[40px] flex gap-[16px]">
                <div className="w-[168px] h-[168px] rounded-[8%] bg-[#ffe2ad]"></div>
                <div className="w-[168px] h-[168px] rounded-[8%] bg-[#ecd9ff]"></div>
                <div className="w-[168px] h-[168px] rounded-[8%] bg-[#b1e4ff]"></div>
                <div className="w-[168px] h-[168px] rounded-[8%] bg-[#d0f5c3]"></div>
              </div>
            </div>
          </div>

          {/* 생성 버튼 */}
          <button className="w-full h-[56px] text-white bg-[#9935ff] rounded-[12px] px-[24px] py-[14px]">
            생성하기
          </button>
        </div>
      </main>
    </>
  );
}
