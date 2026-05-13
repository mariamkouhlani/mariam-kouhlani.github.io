$(document).ready(function () {
  $(window).on("scroll", function () {
    let position = $("#competences").offset().top;
    let scroll = $(window).scrollTop() + $(window).height();

    if (scroll > position + 50) {
      $(".remplissage").each(function () {
        let largeur = $(this).data("width") + "%";
        $(this).animate({ width: largeur }, 600);
      });
    }
  });

  $(".acc-titre").on("click", function () {
    let contenu = $(this).next(".acc-contenu");
    let estOuvert = contenu.is(":visible");

    $(".acc-contenu").slideUp(300);

    if (!estOuvert) {
      contenu.slideDown(300);
    }
  });

  $("#formulaire").on("submit", function (e) {
    e.preventDefault();

    let valide = true;

    let nom = $("#nom").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    $(".erreur").text("");
    $(".champ input, .champ textarea").removeClass("erreur-champ");

    if (nom === "") {
      $("#erreur-nom").text("Le nom est obligatoire.");
      $("#nom").addClass("erreur-champ");
      valide = false;
    }

    if (email === "") {
      $("#erreur-email").text("L'email est obligatoire.");
      $("#email").addClass("erreur-champ");
      valide = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      $("#erreur-email").text("Format d'email invalide.");
      $("#email").addClass("erreur-champ");
      valide = false;
    }

    if (message === "") {
      $("#erreur-message").text("Le message est obligatoire.");
      $("#message").addClass("erreur-champ");
      valide = false;
    }

    if (valide) {
      $("#formulaire")[0].reset();
      $(".succes").fadeIn(400);
      setTimeout(function () {
        $(".succes").fadeOut(400);
      }, 3000);
    }
  });
});
