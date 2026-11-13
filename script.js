document.addEventListener('DOMContentLoaded',function(){
  // set year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const shown = nav.style.display === 'block';
      nav.style.display = shown ? '' : 'block';
    });
  }

  // simple contact form handling
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name')?.toString().trim();
      const email = data.get('email')?.toString().trim();
      const message = data.get('message')?.toString().trim();
      if(!name || !email || !message){
        msg.textContent = 'Please fill out all fields.';
        msg.style.color = 'crimson';
        return;
      }
      // simulate submission
      msg.style.color = 'green';
      msg.textContent = 'Thanks, your message was sent.';
      form.reset();
    });
  }
});
