import arrow from '../../assets/images/arrow-down.png';
import reactionImg from '../../assets/images/reactionimg.png';
import shareImg from '../../assets/images/shareimg.png';

export default function HeaderAction({ topReactions }) {
  return (
    <>
      {/* .btn-contents */}
      <div className="flex gap-2 items-center">
        {/* .btn-reaction */}
        <div className="flex gap-[2px]">
          {/* .message-reactions */}
          <div className="flex gap-2">
            {topReactions.map((r) => (
              <div
                key={r.id}
                className="px-3 py-2 rounded-[32px] bg-[rgba(0,0,0,0.54)]"
              >
                {/* .reaction */}
                <div className="flex gap-[2px] text-white">
                  <div className="w-5 h-5">{r.emoji}</div>
                  <div>{r.count}</div>
                </div>
              </div>
            ))}
          </div>

          {/* .reaction-list */}
          <button className="flex items-center justify-center w-9 h-9">
            <img src={arrow} alt="아래화살표" className="w-3 h-[6px]" />
          </button>
        </div>

        {/* .btn-content */}
        <div className="flex gap-[13px] items-center">
          {/* .reaction-add */}
          <button className="px-4 py-1.5 rounded-md border border-[#cccccc]">
            <div className="flex gap-1 items-center">
              <img
                src={reactionImg}
                alt="이모티콘 이미지"
                className="w-[21px] h-[21px]"
              />
              추가
            </div>
          </button>

          {/* .rectangle */}
          <div className="w-px h-7 bg-[#eeeeee]" />

          {/* .url */}
          <button className="px-4 py-1.5 rounded-md border border-[#cccccc]">
            <img
              src={shareImg}
              alt="공유이미지"
              className="w-[21px] h-[21px]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
