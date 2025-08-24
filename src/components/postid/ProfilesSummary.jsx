export default function ProfilesSummary({ recentMessages, messageCount }) {
  return (
    <>
      {/* .proflies-content */}
      <div className="flex gap-[11px] items-center">
        {/* .proflies */}
        <div className="flex items-center">
          {recentMessages.map((r) => (
            <div
              key={r.id}
              className="w-[28px] h-[28px] border-[1.4px] border-white rounded-[140px] first:ml-0 bg-center bg-cover bg-no-repeat"
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
          <span className="font-bold">{messageCount}</span>명이 작성했어요!
        </div>
      </div>
    </>
  );
}
