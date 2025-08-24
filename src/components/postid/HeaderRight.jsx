import ProfilesSummary from './ProfilesSummary';
import HeaderAction from './HeaderAction';

export default function HeaderRight({
  recentMessages,
  messageCount,
  topReactions,
}) {
  return (
    <>
      {/* .header-content */}
      <div className="flex gap-[28px]">
        <ProfilesSummary
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
        <HeaderAction topReactions={topReactions} />
      </div>
    </>
  );
}
