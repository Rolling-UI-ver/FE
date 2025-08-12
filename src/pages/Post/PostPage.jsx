import './PostPage.css';

export default function Postpage() {
  return (
    <>
      <header>
        <div className="header-content">
          <div>Rolling</div>
          <button>버튼</button>
        </div>
      </header>
      <main>
        <div className="post-section">
          <div className="section-input">
            <h1>To.</h1>
            <input
              className="input-name"
              type="text"
              placeholder="받는 사람 이름을 입력해주세요."
            />
          </div>
          <div className="background-section">
            <div className="backgroud-description">
              <h2>배경화면을 선택해주세요.</h2>
              <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
            </div>
            <div className="select-btn">
              <button>컬러</button>
              <button>이미지</button>
            </div>
          </div>
          <div></div>
          <button className="create-btn">생성하기</button>
        </div>
      </main>
    </>
  );
}
