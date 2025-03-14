// contactMessage-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('html/contactMessage.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Contact Message 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('contactMessage-placeholder').innerHTML = html;
      })
      .catch(error => console.error('에러 발생:', error));
  });
  