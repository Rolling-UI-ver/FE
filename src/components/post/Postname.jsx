export default function Postname() {
  return (
    <div className="flex flex-col gap-[12px]">
      <h1 className="text-[24px] font-bold">To.</h1>
      <input
        className="px-[16px] py-[12px] border border-[#d9d9d9] rounded-[8px]"
        type="text"
        placeholder="받는 사람 이름을 입력해주세요."
      />
    </div>
  );
}
