document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Rahmat! Sizning buyurtmangiz muvaffaqiyatli yuborildi.");
  this.reset();
});