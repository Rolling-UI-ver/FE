import { useEffect } from 'react';

export default function MainContents({ backgroundColor, recentMessages }) {
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
    </>
  );
}
