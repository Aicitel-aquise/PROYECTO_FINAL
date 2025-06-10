$(document).ready(function () {
  // Animación de scroll al hacer clic en el menú
  $("nav a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top - 60
    }, 800);
  });

  // Validación y mensaje del formulario
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    this.reset();
  });
});

$(document).ready(function () {
  function startSlider(selector, interval) {
    const $imgs = $(selector + " img");
    let index = 0;

    $imgs.eq(index).addClass("active");

    setInterval(function () {
      $imgs.eq(index).removeClass("active");
      index = (index + 1) % $imgs.length;
      $imgs.eq(index).addClass("active");
    }, interval);
  }

  startSlider("#slider-mecanica", 3000);     // cada 3 segundos
  startSlider("#slider-informatica", 3000);  // cada 3 segundos
});
// Cerrar modal de noticias al hacer click en la "X"
document.getElementById('cerrarModal').addEventListener('click', function() {
  document.getElementById('modalNoticias').style.display = 'none';
});

// Opcional: cerrar modal si se hace click fuera del contenido
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modalNoticias');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
