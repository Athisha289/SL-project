// small client-side niceties
    document.getElementById('orderForm').addEventListener('submit', function(e){
      // basic validation example
      const phone = this.phone.value.trim();
      if(!/^[0-9]{10}$/.test(phone)){ e.preventDefault(); 
        alert('Please enter 10 digit number.'); return false; }
      // show quick feedback (Formspree will send email)
      alert('Your order placed successfully!! We will contact you soon');
    });