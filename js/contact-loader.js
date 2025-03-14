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
      })
      .catch(error => console.error('에러 발생:', error));
  });
  