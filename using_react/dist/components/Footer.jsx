import React, { Component } from 'react';

class Footer extends Component {
  state = {
    value: '',
  };
  
  onChangeInput = (e) => {
    e.preventDefault();
    const {value} = this.state;
    
    this.setState({
      value: e.target.value,
    });
  };
  
  menus = ['회사소개', '문의하기', '이용약관', '개인정보처리방침', '매물관리규정', '자동저장서비스'];
  
  menu = this.menus.map((v) => (
    <li key={v}>{v}</li>
  ));
  
  render() {
    const {value} = this.state;
    
    return (
      <>
        <footer id="footer" className="footer">
          <div className="container">
            <div className="footer-top">
              <nav className="nav">
                <ul>
                  {this.menu}
                </ul>
              </nav>
              <div className="search">
                <input placeholder="매물번호 조회" value={value} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="footer-wrap">
              <div className="info">
                <div className="name">스테이션3</div>
                <address className="address">
                  <span>대표 : 한유순, 유형석</span>
                  <span>주소 : 서울시 서초구 서초대로 301 동익 성봉빌딩 10층 (주)스테이션3</span>
                </address>
                <p className="txt">
                  <span>고객센터 : 02-1899-6840</span>
                  <span>팩스 : 02-554-9774</span>
                </p>
                <p className="txt">
                  <span>사업자 번호: 220-88-59156</span>
                  <span>프로모션/사업 제휴문의 : biz@station3.co.kr</span>
                  <span>통신판매업신고번호 : 제2013-서울 강남-02884호</span>
                </p>
                <div className="copyright">Station3, Inc. All rights reserved.</div>
              </div>
              <div className="social-btn">
                <div className="btn insta">
                  <a><img src="" alt=""/></a>
                </div>
                <div className="btn fb">
                  <a><img src="" alt=""/></a>
                </div>
                <div className="btn naver">
                  <a><img src="" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;