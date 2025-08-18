import { useEffect } from 'react';
import mockRecipients from './mockRecipients';
import arrow from '../../assets/images/arrow-down.png';
import reactionImg from '../../assets/images/reactionimg.png';
import shareImg from '../../assets/images/shareimg.png';

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
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px] bg-white">
          <div>Rolling</div>
          <button />
        </div>
      </header>

      <main>
        <div className="max-w-[1920px] h-[68px] border-t border-[#ededed] bg-white">
          <div className="py-[13px] px-[360px] flex justify-between">
            <div className="text-[24px] font-bold">To. {name}</div>

            <div className="flex gap-[28px]">
              <div className="flex items-center gap-[11px]">
                <div className="flex items-center">
                  {recentMessages.map((r) => (
                    <div
                      key={r.id}
                      className="w-[28px] h-[28px] border-[1.4px] border-white rounded-full first:ml-0 bg-black bg-center bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(${r.profileImageURL})`,
                        marginLeft: '-8px',
                      }}
                    />
                  ))}
                  <div
                    className="w-[28px] h-[28px] -ml-2 first:ml-0 rounded-full flex items-center justify-center bg-white border border-[#e3e3e3] text-[12px]"
                    style={{
                      marginLeft: '-8px',
                    }}
                  >
                    +{messageCount}
                  </div>
                </div>

                <div className="text-black">
                  <span className="font-bold">{messageCount}</span>
                  명이 작성했어요!
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <div className="flex gap-2">
                        {topReactions.map((r) => (
                          <div
                            key={r.id}
                            className="px-3 py-2 rounded-full bg-black/50"
                          >
                            <div className="flex items-center gap-1 text-white leading-none font-semibold">
                              <span className="text-[18px] leading-none">
                                {r.emoji}
                              </span>
                              <span className="text-[14px] leading-none font-variant-tabular">
                                {r.count}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="flex items-center justify-center w-9 h-9">
                        <img
                          src={arrow}
                          alt="아래화살표"
                          className="w-3 h-[6px]"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-[13px]">
                    <button className="px-4 py-[6px] rounded-md border border-[#cccccc]">
                      <div className="flex items-center gap-1">
                        <img
                          src={reactionImg}
                          alt="이모티콘 이미지"
                          className="w-[21px] h-[21px]"
                        />
                        추가
                      </div>
                    </button>
                    <div className="w-px h-7 bg-[#eeeeee]" />
                    <button className="px-4 py-[6px] rounded-md border border-[#cccccc]">
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
        </div>
        <div className="py-[100px] px-[400px] flex gap-5">
          {recentMessages.map((msg) => (
            <div
              key={msg.id}
              className="w-[384px] h-[280px] rounded-2xl bg-white"
            >
              <div className="px-6 py-7 flex gap-[14px]">
                <div
                  className="w-14 h-14 border border-[#eeeeee] rounded-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${msg.profileImageURL})` }}
                />
                <div className="flex flex-col gap-[6px] items-start">
                  <div className="text-[20px]">
                    From. <span className="font-bold">{msg.sender}</span>
                  </div>
                  <span className="inline-flex self-start px-2 rounded bg-[#f8f0ff] text-[14px] leading-[1.4]">
                    {msg.relationship}
                  </span>
                </div>
              </div>
              <div className="w-[336px] h-[106px] px-6 py-3 text-[18px] text-[#4a4a4a] border-t border-[#eeeeee]">
                {msg.content}
              </div>
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
