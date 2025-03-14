// xr-solution-loader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('html/xr-solution.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('XR-SOLUTION 파일 로드 실패');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('xr-solution-placeholder').innerHTML = html;
      })
      .catch(error => console.error('에러 발생:', error));
  });
  