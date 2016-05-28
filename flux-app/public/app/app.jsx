var React = require('react');
var ReactDOM = require('react-dom');
var Messages = require('./components/Messages.jsx');
var APIUtils = require('./utils/APIUtils');

APIUtils.getAllMessages();



ReactDOM.render(<Messages />, document.getElementById('messages'));