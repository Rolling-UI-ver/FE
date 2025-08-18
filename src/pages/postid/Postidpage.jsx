import { useEffect } from 'react';
import mockRecipients from './mockRecipients';
import arrow from '../../assets/images/arrow-down.png';
import reactionImg from '../../assets/images/reactionimg.png';
import shareImg from '../../assets/images/shareimg.png';
import './Postidpage.css'; // Tailwind로 대체됨. 필요 시 빈 파일로 두세요.

export default function PostidPage() {
  const recipient = mockRecipients.find((r) => r.id === 1);
  const { name, recentMessages, backgroundColor, messageCount, topReactions } =
    recipient;

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor || 'white';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [backgroundColor]);

  function formatDate(isoString) {
    const d = new Date(isoString);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }

  return (
    <>
      <header>
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px] bg-[#ffffff]">
          <div>Rolling</div>
          <button></button>
        </div>
      </header>
      <main>
        {/* .main-header */}
        <div className="max-w-[1920px] h-[68px] border-t border-[#ededed] bg-white">
          {/* .header-contents */}
          <div className="px-[360px] py-[13px] flex justify-between">
            {/* .post-name */}
            <div className="text-[24px] font-bold">To. {name}</div>

            {/* .header-content */}
            <div className="flex gap-[28px]">
              {/* .proflies-content */}
              <div className="flex gap-[11px] items-center">
                {/* .proflies */}
                <div className="flex items-center">
                  {recentMessages.map((r) => (
                    <div
                      key={r.id}
                      className="w-[28px] h-[28px] border-[1.4px] border-white rounded-full first:ml-0 bg-center bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${r.profileImageURL})`,
                        marginLeft: '-8px',
                      }}
                    />
                  ))}

                  {/* .rest-count (proflie + center + border 회색 + 글자 12px) */}
                  <div
                    className="w-[28px] h-[28px] -ml-2 first:ml-0 rounded-full flex items-center justify-center bg-white border border-[#e3e3e3] text-[12px]"
                    style={{
                      marginLeft: '-8px',
                    }}
                  >
                    +{messageCount}
                  </div>
                </div>

                {/* .message-counts (span은 볼드) */}
                <div className="text-black">
                  <span className="font-bold">{messageCount}</span>명이
                  작성했어요!
                </div>
              </div>

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
            </div>
          </div>
        </div>

        {/* .main-contents */}
        <div className="py-[100px] px-[400px] flex gap-5">
          {recentMessages.map((msg) => (
            <div
              key={msg.id}
              className="w-[384px] h-[280px] rounded-2xl bg-white"
            >
              {/* .card-head */}
              <div className="py-7 px-6 flex gap-[14px]">
                {/* .card-proplie */}
                <div
                  className="w-14 h-14 border border-[#eeeeee] rounded-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${msg.profileImageURL})` }}
                />
                {/* .card-contents */}
                <div className="flex flex-col gap-[6px] items-start">
                  {/* .card-sender */}
                  <div className="text-[20px]">
                    From. <span className="font-bold">{msg.sender}</span>
                  </div>
                  {/* .card-relationship */}
                  <div className="px-2 rounded bg-[#f8f0ff] text-[14px]">
                    {msg.relationship}
                  </div>
                </div>
              </div>

              {/* .card-body */}
              <div className="w-[336px] h-[106px] px-6 py-3 text-[18px] text-[#4a4a4a] border-t border-[#eeeeee]">
                <div>{msg.content}</div>
              </div>

              {/* .card-footer */}
              <div className="px-6 py-3 text-[12px] text-[#999999]">
                {formatDate(msg.createdAt)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
