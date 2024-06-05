import { Component } from "react";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: '',
      selectedFile: null,
      selectedFileName: '',
    };
  }

  handleChange = (e) => {
    this.setState({ currentMessage: e.target.value });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState({ 
        selectedFile: file,
        selectedFileName: file.name,
        currentMessage: file.name
      });
    }
  };

  sendMessage = () => {
    const { currentMessage, selectedFile, messages } = this.state;
    if (currentMessage.trim() || selectedFile) {
      const newMessage = {
        text: currentMessage,
        file: selectedFile,
        author: 'You',
        type: selectedFile ? 'file' : 'text',
      };
      this.setState({
        messages: [...messages, newMessage],
        currentMessage: '',
        selectedFile: null,
        selectedFileName: '',
      });
    }
  };

  render() {
    const { messages, currentMessage } = this.state;
    return (
      <div className="rbt-main-content">
        <div className="rbt-daynamic-page-content">
          <div className="rbt-dashboard-content">
            <div className="content-page">
              <div className="chat-box-list pt--30" id="chatContainer">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-box ${msg.author === 'You' ? 'author-speech' : 'ai-speech'} bg-flashlight`}>
                    <div className="inner">
                      <div className="chat-section">
                        <div className="author">
                          <img
                            className="w-100"
                            src={msg.author === 'You' ? "../images/team/team-01.jpg" : "../images/team/avater.png"}
                            alt="Author"
                          />
                        </div>
                        <div className="chat-content">
                          <h6 className="title">{msg.author}</h6>
                          <p>{msg.text}</p>
                          {msg.file && (
                            <div className="file-preview">
                              <p>File: {msg.file.name}</p>
                              <p>Status: Work in progress...</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rbt-static-bar">
                <form className="new-chat-form border-gradient" onSubmit={(e) => e.preventDefault()} style={{marginRight: '50px'}}>
                  <textarea
                    id="txtarea"
                    rows="1"
                    placeholder="Send a message..."
                    value={currentMessage}
                    onChange={this.handleChange}
                  ></textarea>
                  <div className="left-icons">
                    <div title="ChatenAI" className="form-icon icon-gpt">
                      <i className="feather-aperture"></i>
                    </div>
                  </div>
                  <div className="right-icons">
                    <div
                      className="form-icon icon-plus"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Choose File"
                    >
                      <input
                        type="file"
                        className="input-file"
                        onChange={this.handleFileChange}
                      />
                      <i className="feather-plus-circle"></i>
                    </div>
                    <button
                      className="form-icon icon-send"
                      id="sendButton"
                      onClick={this.sendMessage}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Send message"
                    >
                      <i className="feather-send"></i>
                    </button>
                  </div>
                </form>
                <ul class="staticbar-btn-grp d-none d-md-flex">
                                <li>
                                    <button class="btn-default btn-small btn-border"><span>Ask Tough Question</span>
                                    </button>
                                </li>
                                <li>
                                    <button class="btn-default btn-small btn-border"><span>Create Image Artwork</span>
                                    </button>
                                </li>
                                <li>
                                    <button class="btn-default btn-small btn-border"><span>Image Editor Options</span>
                                    </button>
                                </li>
                                <li>
                                    <button class="btn-default btn-small btn-border"><span>Give Voice command</span>
                                    </button>
                                </li>
                            </ul>
                <p className="b3 small-text">
                  ChatenAi can make mistakes. Consider checking important information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
