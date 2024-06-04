import { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <div class="rbt-right-side-panel popup-dashboardright-section">
        <div class="right-side-top">
          <a
            class="btn-default bg-solid-primary"
            data-bs-toggle="modal"
            data-bs-target="#newchatModal"
          >
            <span class="icon">
              <i class="feather-plus-circle"></i>
            </span>
            <span>New Chat</span>
          </a>
        </div>
        <div class="right-side-bottom">
          <div class="small-search search-section mb--20">
            <input type="search" placeholder="Search Here..." />
            <i class="feather-search"></i>
          </div>

          <div class="chat-history-section">
            <h6 class="title">Today</h6>
            <ul class="chat-history-list">
              <li class="history-box active">
                ChatenAI Defination
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Your last Question
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Business Shortcurt Methode
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Best way to maintain code Quality
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div class="chat-history-section has-show-more">
            <h6 class="title">Yesterday</h6>
            <ul class="chat-history-list has-show-more-inner-content">
              <li class="history-box">
                How to write a code
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Form Html CSS JS
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                HTML Shortcurt Methode
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Best way to maintain code Quality
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                ChatenAI Defination
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Your last Question
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Unique Shortcurt Methode
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Generate a circle Image
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="rbt-show-more-btn">Show More</div>
          </div>

          <div class="chat-history-section has-show-more">
            <h6 class="title">Previous 7 days</h6>
            <ul class="chat-history-list has-show-more-inner-content">
              <li class="history-box">
                User Assistant Request
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Funtion Js
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Generate a Image
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Best way to maintain code Quality
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                ChatenAI Defination
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Your last Question
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Business Shortcurt Methode
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Best way to maintain Remote Team
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="rbt-show-more-btn">Show More</div>
          </div>

          <div class="chat-history-section mb--100 has-show-more">
            <h6 class="title">November</h6>
            <ul class="chat-history-list has-show-more-inner-content">
              <li class="history-box">
                AI writing: Free Trial
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Your last Question
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Education Shortcurt Methode
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                1992 Environment Policy
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Senior UX/UI Design
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Your last Question
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Dark Mode Html CSS JS
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="history-box">
                Best way to maintain code Quality
                <div class="dropdown history-box-dropdown">
                  <button
                    type="button"
                    class="more-info-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="feather-more-horizontal"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-refresh-cw"></i> Regenerate
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-tag"></i> Pin Chat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-file-text"></i> Rename
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="feather-share-2"></i> Share
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item delete-item" href="#">
                        <i class="feather-trash-2"></i> Delete Chat
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="rbt-show-more-btn">Show More</div>
          </div>
        </div>
      </div>
    );
  }
}
