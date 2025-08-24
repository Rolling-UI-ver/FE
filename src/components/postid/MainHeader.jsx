import MainHeaderContainer from './MainHeaderContainer';

export default function MainHeader({
  name,
  recentMessages,
  messageCount,
  topReactions,
}) {
  return (
    <MainHeaderContainer
      name={name}
      recentMessages={recentMessages}
      messageCount={messageCount}
      topReactions={topReactions}
    />
  );
}
