import React from "react";
import "./ChatListItem.css";

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem-avatar" src="https://www.fernandesedutra.com.br/wp-content/uploads/2021/02/avatar.png" alt="" />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">João Grilo</div>
                    <div className="chatListItem-date">19:06</div>
            </div>
            <div className="chatListItem-line">
                <div className="chatListItem-lastMsg">
                    <p>Estava procurando um projeto similar a esse, porém tenho a ideia de usar autenticação por SMS que nem no WhatsApp. Usar o número do telefone e ao invés de contatos o app seria um chatbot com IA usando IBM Assistant</p>
                </div>
            </div>
            </div>

        </div>
    );
};