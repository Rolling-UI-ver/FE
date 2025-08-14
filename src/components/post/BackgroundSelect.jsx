import ColorSelect from './ColorSelect';

export default function BackgroundSelect() {
  return (
    <div>
      <div className="mb-[30px]">
        <h2 className="text-[24px] font-bold">배경화면을 선택해주세요.</h2>
        <p className="text-[#555555]">
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </p>
      </div>
      <div className="mt-[20px]">
        <div className="flex">
          <button className="w-[122px] h-[40px] px-[16px] py-[7px] rounded-[6px] bg-[#F6F6F6]">
            컬러
          </button>
          <button className="w-[122px] h-[40px] px-[16px] py-[7px] rounded-[6px] bg-[#F6F6F6]">
            이미지
          </button>
        </div>
        <ColorSelect />
      </div>
    </div>
  );
}
