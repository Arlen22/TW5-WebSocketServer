/*\
title: $:/plugins/arlen22/WebSocketServer/WS/ws.js
type: application/javascript
module-type: library
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */


/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */

'use strict';

const WebSocket = require('$:/plugins/arlen22/WebSocketServer/WS/WebSocket');

WebSocket.Server = require('$:/plugins/arlen22/WebSocketServer/WS/WebSocketServer');
WebSocket.Receiver = require('$:/plugins/arlen22/WebSocketServer/WS/Receiver');
WebSocket.Sender = require('$:/plugins/arlen22/WebSocketServer/WS/Sender');

module.exports = WebSocket;

})();
