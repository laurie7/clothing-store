$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();
    const address1Input = $("input#address1").val();
    const address2Input = $("input#address2").val();
    const cityInput = $("input#city").val();
    const stateInput = $("#state").val();
    const zipCodeInput = $("input#zipCode").val();
    const clothingInput = $("input:radio[name=clothing]:checked").val();
    const color = $("#color").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipCode").text(zipCodeInput);
    $(".clothing").text(clothingInput);
    $(".color").text(color);
    

    $("#receipt").show();

  event.preventDefault();
  });
});