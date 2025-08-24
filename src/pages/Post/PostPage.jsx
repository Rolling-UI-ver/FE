// import './PostPage.css';
import Postname from '../../components/post/Postname';
import BackgroundSelect from '../../components/post/BackgroundSelect';

export default function Postpage() {
  return (
    <>
      <header>
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px]">
          <div>Rolling</div>
          <button>버튼</button>
        </div>
      </header>
      <main className="px-[480px]">
        <div className="mx-auto w-[720px] flex flex-col gap-[60px]">
          <Postname />
          <BackgroundSelect />
          <button className="w-full h-[56px] text-white bg-[#9935ff] rounded-[12px] px-[24px] py-[14px]">
            생성하기
          </button>
        </div>
      </main>
    </>
  );
}
