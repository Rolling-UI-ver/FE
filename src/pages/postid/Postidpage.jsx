import { useEffect } from 'react';
import mockRecipients from './mockRecipients';
import './Postidpage.css';

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

  return (
    <>
      <header>
        <div className="max-w-[1920px] px-[360px] py-[11px] flex justify-between items-center mb-[60px] bg-[#ffffff]">
          <div>Rolling</div>
          <button></button>
        </div>
      </header>
      <main>
        <div className="main-header">
          <div className="header-contents">
            <div className="post-name">To. {name}</div>
            <div className="header-content">
              <div className="proflies-content">
                <div className="proflies">
                  {recentMessages.map((r) => (
                    <div
                      className="proflie"
                      key={r.id}
                      style={{ backgroundImage: `url(${r.profileImageURL})` }}
                    ></div>
                  ))}
                  <div className="proflie rest-count"></div>
                </div>
                <div className="message-counts">
                  <span>{messageCount}</span>명이 작성했어요!
                </div>
              </div>
              <div className="btn-contents">
                <div className="btn-reaction">
                  <div className="message-reactions">
                    {topReactions.map((r) => (
                      <div className="message-reaction" key={topReactions.id}>
                        <div className="reaction">
                          <div className="reaction-emotion">{r.emoji}</div>
                          <div className="reaction-count">{r.count}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="reaction-add"></div>
                </div>
                <div className="btn-content"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-contents">
          {recentMessages.map((msg) => (
            <div key={msg.id} className="card">
              <div className="card-head">
                <div
                  className="card-proplie"
                  style={{ backgroundImage: `url(${msg.profileImageURL})` }}
                ></div>
                <div className="card-contents">
                  <div className="card-sender">
                    From. <span>{msg.sender}</span>
                  </div>
                  <div className="card-relationship">{msg.relationship}</div>
                </div>
              </div>
              <div className="card-body">
                <div>{msg.content}</div>
              </div>
              <div className="card-footer">{msg.createdAt}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
