// Add to Cart Button
const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

const endTime = new Date();
endTime.setHours(endTime.getHours() + 24); // Kết thúc sau 24 giờ

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm lần đầu để tránh trễ 1 giây
updateCountdown();

