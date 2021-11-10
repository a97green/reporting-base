function applyMasked() {
    $(".unloadingNumber").mask("8 999 999-9999");
    $("#loadingNumber").mask("8 999 999-9999");
    $("#numberPhone").mask("8(999) 999-9999");
    $("#orgInn").mask("9999999999");
    $("#orgKpp").mask("999999999");
    $("#ogrn").mask("9999999999999");
    $("#ogrnIp").mask("999999999999999");
    $("#inn").mask("9999999999");
    $("#kpp").mask("999999999");
    $("#payAccount").mask("99999999999999999999");
    $("#corAccount").mask("99999999999999999999");
    $("#bik").mask("999999999");
    // $("#serialPassport").mask("9999");
    // $("#numberPassport").mask("999999");
    $("#unloadingDate").mask("99.99.9999");
    $("#loadingDate").mask("99.99.9999");
    $("#loadingTime").mask("с 99:99 до 99:99");
    $("#unloadingTime").mask("с 99:99 до 99:99");
    $(".inpDate").mask("99.99.9999");
}