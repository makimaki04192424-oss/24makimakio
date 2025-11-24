// シンプルなインタラクション
document.addEventListener('DOMContentLoaded',function(){
  const cta = document.getElementById('cta');
  const themeToggle = document.getElementById('themeToggle');
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');

  cta.addEventListener('click',()=>{
    alert('CTAがクリックされました。テスト用の挙動です。');
  });

  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
  });

  form.addEventListener('submit',function(e){
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name');
    // 簡単なデモ表示
    result.textContent = `送信ありがとうございます、${name} さん（実際には送信していません）。`;
    result.classList.remove('muted');
    form.reset();
  });
});