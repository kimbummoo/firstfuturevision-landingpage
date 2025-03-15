// contact-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('html/contact.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Contact Us 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('contact-placeholder').innerHTML = html;
        initializeContact();
      })
      .catch(error => console.error('에러 발생:', error));
  });

  function initializeContact()
  {
      // // config.json에서 카카오톡 채널 URL을 가져와서 버튼의 href에 할당
      // fetch('/firstfuturevision-landingpage/data/config.json')
      // .then(response => response.json())
      // .then(config => {
      //   const kakaoLink = document.getElementById('kakaoLink');
      //   kakaoLink.href = config.kakaoChannelUrl;
      // })
      // .catch(error => console.error('설정 파일 로드 실패:', error));
  }

