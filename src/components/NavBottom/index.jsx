import React, { useContext, useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';

import { NavLink, useLocation } from 'react-router-dom';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import chatactive from '../../assets/icons/chatactive.svg';
import walking from '../../assets/icons/walking.svg';
import chatunactive from '../../assets/icons/chatunactive.svg';
import { StyledNavBottom, StyledNavLink, StyledMessageNotification } from './style';
import avatar from '../../assets/icons/profilepic.svg';

const Nav = props => {
  const location = useLocation();
  const { user } = useContext(AuthenticationContext);
  const [newMessageNotification, setNewMessageNotification] = useState(false);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = firestore
      .collection('chat')
      // filter out our conversations
      .where('ids', 'array-contains-any', [user.id])
      .onSnapshot(snapshot => {
        const conversationsData = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const ids = data.ids;
          // find the id of the user we have a conversation with
          const id = ids[0] !== user.id ? ids[0] : ids[1];

          conversationsData.push({ toUserId: id, lastMessage: data.lastMessage }); // .. and store it in an array
        });

        conversationsData.forEach(conversation => {
          if (!conversation.lastMessage) return;

          const isMessagedNotViewed = conversation.lastMessage.userToNotify === user.id;
          if (isMessagedNotViewed) setNewMessageNotification(true);
        });
      });

    return () => unsubscribe();
  }, [user]);

  return (
    <StyledNavBottom {...props}>
      <StyledNavLink as={NavLink} to="/choosechat">
        {location.pathname === '/choosechat' ? (
          <img src={chatactive} alt="Chosechat" />
        ) : (
          <div className="unactive-chat-container">
            <img src={chatunactive} alt="Chosechat" />
            {newMessageNotification ? <StyledMessageNotification /> : null}
          </div>
        )}
        {newMessageNotification ? <div className="new-mess" /> : null}
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/feed">
        <div className="promenad">
          <img src={walking} alt="promenad" />
        </div>
      </StyledNavLink>
      <StyledNavLink as={NavLink} to="/private">
        <img className="avatar" src={user.photoUrl || avatar} alt="avatar" />
      </StyledNavLink>
    </StyledNavBottom>
  );
};

export default Nav;
