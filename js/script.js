const testimonialBtn = document.querySelectorAll('.btn');
const testimonials = document.querySelectorAll('.testimonial-wrapper');

let i = 0;

testimonialBtn.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.class === 'previous') {
      i--;
        if (i < 0) {
          i = testimonials.length - 1;
        }
      displayTestimonial();
    } else {
      i++;
        if (i > testimonials.length - 1) {
          i = 0;
        }
      displayTestimonial();
    }
  });
});

function displayTestimonial() {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = 'none';
  });
  testimonials[i].style.display = 'flex';
};

