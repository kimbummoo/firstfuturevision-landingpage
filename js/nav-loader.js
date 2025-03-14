document.addEventListener('DOMContentLoaded', function() {
    fetch('html/nav.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('네비게이션 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('nav-placeholder').innerHTML = html;
      })
      .catch(error => console.error('에러 발생:', error));
  });
  