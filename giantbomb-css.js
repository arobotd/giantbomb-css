// ==UserScript==
// @name         GiantBomb FullWidth
// @namespace    http://robot-d.com
// @version      0.2
// @description  Removes padding from GiantBomb.com chat pages 
// @author       Adam Drobotij
// @match        https://www.giantbomb.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle(`
       .site-container { width: 100% !important; }
       .chat, .player, .chat-panel { padding: 0 !important; }
       .wrapper-container { padding-right: 0 !important; }
       .chat-wrapper { padding: 0 !important; }
       .chat-conversation { padding-top: 0 !important; }
       .chat-history__itemWrap {
          padding: 3px 3px 5px 0 !important;
          line-height: 1.3;
          font-size: 12px;
       }
       .chat-history__avatar {
          width: 25px !important;
          height: auto !important:
          margin-top: initial !important;
          top: 3px !important;
          left: 3px !important;
       }
       .chat-panel__container {
          padding-top: 88px !important;
       }
       .chat-history__username, .chat-history__username:visited {
          color: #9d9d9d !important;
       }
    `)
})();
