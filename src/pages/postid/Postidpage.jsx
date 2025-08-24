import mockRecipients from './mockRecipients';
import MainHeader from '../../components/postid/MainHeader';
import MainContents from '../../components/postid/MainContents';
import './Postidpage.css';

export default function PostidPage() {
  const recipient = mockRecipients.find((r) => r.id === 1);
  const { name, recentMessages, backgroundColor, messageCount, topReactions } =
    recipient;

  return (
    <>
      <header>
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px] bg-[#ffffff]">
          <div>Rolling</div>
          <button></button>
        </div>
      </header>
      <main>
        <MainHeader
          name={name}
          recentMessages={recentMessages}
          messageCount={messageCount}
          topReactions={topReactions}
        />
        <MainContents
          backgroundColor={backgroundColor}
          recentMessages={recentMessages}
        />
      </main>
    </>
  );
}
