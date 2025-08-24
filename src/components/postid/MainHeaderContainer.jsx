import PostName from './postname';
import HeaderRight from './HeaderRight';

export default function MainHeaderContainer({
  name,
  recentMessages,
  messageCount,
  topReactions,
}) {
  return (
    <>
      {/* .main-header */}
      <div className="max-w-[1920px] h-[68px] border-t border-[#ededed] bg-white">
        {/* .header-contents */}
        <div className="px-[360px] py-[13px] flex justify-between">
          <PostName name={name} />
          <HeaderRight
            recentMessages={recentMessages}
            messageCount={messageCount}
            topReactions={topReactions}
          />
        </div>
      </div>
    </>
  );
}
