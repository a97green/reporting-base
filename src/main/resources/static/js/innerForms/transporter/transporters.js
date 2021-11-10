function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    if (element.type === "OOO") {
        innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">' +
            '                            <div class="card-body">' +
            '                                <h4 class="card-title">Карточка перевозчика: ' + element.name + '</h4>' +
            '                                <form action="/transporter/save/' + element.id + '" method="post">' +
            '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +

            '                                    <input type="text" modelAttribute="enterprise" name="subType" value="TRANSPORTER" style="display: none">' +
            '                                    <input type="text" modelAttribute="enterprise" name="type" value="OOO" style="display: none">' +
            '                                    <input type="text" modelAttribute="enterprise" name="id" value="' + element.id + '" text="' + element.id + '" style="display: none">' +
            '                                    <input type="text" modelAttribute="passport" style="display: none">' +

            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Название организации</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.name + '" text="' + element.name + '" type="text" name="name" class="form-control form-details" placeholder="Название организации" required disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Юридический адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.legalAddress + '" text="' + element.legalAddress + '" type="text" name="legalAddress" class="form-control form-details" placeholder="Юридический адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Почтовый адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.postalAddress + '" text="' + element.postalAddress + '" type="text" name="postalAddress" class="form-control form-details" placeholder="Почтовый адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Фактический адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.actualAddress + '" text="' + element.actualAddress + '" type="text" name="actualAddress" class="form-control form-details" placeholder="Фактический адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">ИНН/КПП</label>' +
            '                                        <div class="col-sm-4">' +
            '                                            <input modelAttribute="enterprise" id="orgInn" value="' + element.inn + '" text="' + element.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН"  disabled>' +
            '                                        </div>' +

            '                                        <div class="col-sm-5">' +
            '                                            <input modelAttribute="enterprise" id="orgKpp" value="' + element.kpp + '" text="' + element.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">ОГРН</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" id="ogrn" value="' + element.ogrn + '" text="' + element.ogrn + '" type="text" name="ogrn" class="form-control form-details" placeholder="ОГРН"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Номер телефона</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" id="numberPhone" value="' + element.numberPhone + '" text="' + element.numberPhone + '" type="text" name="numberPhone" class="form-control form-details" placeholder="Номер телефона"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Код АТИ</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="enterprise" id="atiCode" value="' + element.atiCode + '" text="' + element.atiCode + '" type="text" name="atiCode" class="form-control form-details" placeholder="Код АТИ"  disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                    <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>' +
            // '                                    <div class="form-group row">' +
            // '                                        <label class="col-sm-3 col-form-label">ИНН</label>' +
            // '                                        <div class="col-sm-9">' +
            // '                                            <input modelAttribute="requisites" id="inn" value="' + element.requisites.inn + '" text="' + element.requisites.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН" disabled>' +
            // '                                        </div>' +
            // '                                    </div>' +
            // '                                    <div class="form-group row">' +
            // '                                        <label class="col-sm-3 col-form-label">КПП</label>' +
            // '                                        <div class="col-sm-9">' +
            // '                                            <input modelAttribute="requisites" id="kpp" value="' + element.requisites.kpp + '" text="' + element.requisites.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП" disabled>' +
            // '                                        </div>' +
            // '                                    </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="payAccount" value="' + element.requisites.payAccount + '" text="' + element.requisites.payAccount + '" type="text" name="payAccount" class="form-control form-details" placeholder="Расчётный счёт" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="corAccount" value="' + element.requisites.corAccount + '" text="' + element.requisites.corAccount + '" type="text" name="corAccount" class="form-control form-details" placeholder="Корр. счёт" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">БИК</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="bik" value="' + element.requisites.bik + '" text="' + element.requisites.bik + '" type="text" name="bik" class="form-control form-details" placeholder="БИК" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Филиал</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" value="' + element.requisites.nameBank + '" text="' + element.requisites.nameBank + '" type="text" name="nameBank" class="form-control form-details" placeholder="Филиал" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                   <div class="form-group row buttons-save" style="display: none">' +
            '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>' +
            '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>' +
            '                                   </div>' +
            '                                </form>' +
            '                                <div class="form-group row buttons-edit">' +
            '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>' +
            '                                   <form action="/transporter/remove/' + element.id + '" method="post">' +
            '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>' +
            '                                   </form>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>');
        applyMasked();
    }
    else if (element.type === "IP") {
        innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">' +
            '                            <div class="card-body">' +
            '                                <h4 class="card-title">Карточка перевозчика: ' + element.name + '</h4>' +
            '                                <form action="/transporter/save/' + element.id + '" method="post">' +
            '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +

            '                                    <input type="text" modelAttribute="enterprise" name="subType" value="TRANSPORTER" style="display: none">' +
            '                                    <input type="text" modelAttribute="enterprise" name="type" value="IP" style="display: none">' +
            '                                    <input type="text" modelAttribute="enterprise" name="id" value="' + element.id + '" style="display: none">' +

            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Название организации</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.name + '" text="' + element.name + '" type="text" name="name" class="form-control form-details" placeholder="Название организации" required disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Юридический адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.legalAddress + '" text="' + element.legalAddress + '" type="text" name="legalAddress" class="form-control form-details" placeholder="Юридический адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Почтовый адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.postalAddress + '" text="' + element.postalAddress + '" type="text" name="postalAddress" class="form-control form-details" placeholder="Почтовый адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Фактический адрес</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" value="' + element.actualAddress + '" text="' + element.actualAddress + '" type="text" name="actualAddress" class="form-control form-details" placeholder="Фактический адрес"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">ИНН</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" id="inn" value="' + element.inn + '" text="' + element.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">ОГРНИП</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" id="ogrnIp" value="' + element.ogrnIp + '" text="' + element.ogrnIp + '" type="text" name="ogrnIp" class="form-control form-details" placeholder="ОГРН"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Номер телефона</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="enterprise" id="numberPhone" value="' + element.numberPhone + '" text="' + element.numberPhone + '" type="text" name="numberPhone" class="form-control form-details" placeholder="Номер телефона"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Код АТИ</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input id="atiCode" type="text" modelAttribute="enterprise" name="atiCode" value="' + element.atiCode + '" text="' + element.atiCode + '" class="form-control" placeholder="Код АТИ" ="">' +
            '                                            </div>' +
            '                                        </div>' +
            '                                    <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>' +
            // '                                    <div class="form-group row">' +
            // '                                        <label class="col-sm-3 col-form-label">ИНН</label>' +
            // '                                        <div class="col-sm-9">' +
            // '                                            <input modelAttribute="requisites" id="inn" value="' + element.requisites.inn + '" text="' + element.requisites.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН" disabled>' +
            // '                                        </div>' +
            // '                                    </div>' +
            // '                                    <div class="form-group row">' +
            // '                                        <label class="col-sm-3 col-form-label">КПП</label>' +
            // '                                        <div class="col-sm-9">' +
            // '                                            <input modelAttribute="requisites" id="kpp" value="' + element.requisites.kpp + '" text="' + element.requisites.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП" disabled>' +
            // '                                        </div>' +
            // '                                    </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="payAccount" value="' + element.requisites.payAccount + '" text="' + element.requisites.payAccount + '" type="text" name="payAccount" class="form-control form-details" placeholder="Расчётный счёт" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="corAccount" value="' + element.requisites.corAccount + '" text="' + element.requisites.corAccount + '" type="text" name="corAccount" class="form-control form-details" placeholder="Корр. счёт" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">БИК</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" id="bik" value="' + element.requisites.bik + '" text="' + element.requisites.bik + '" type="text" name="bik" class="form-control form-details" placeholder="БИК" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                        <div class="form-group row">' +
            '                                            <label class="col-sm-3 col-form-label">Филиал</label>' +
            '                                            <div class="col-sm-9">' +
            '                                                <input modelAttribute="requisites" value="' + element.requisites.nameBank + '" text="' + element.requisites.nameBank + '" type="text" name="nameBank" class="form-control form-details" placeholder="Филиал" ="" disabled>' +
            '                                            </div>' +
            '                                        </div>' +

            '                                    <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Фамилия</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" value="' + element.passport.lastName + '" text="' + element.passport.lastName + '" type="text" name="lastName" class="form-control form-details" placeholder="Фамилия"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Имя</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" value="' + element.passport.firstName + '" text="' + element.passport.firstName + '" type="text" name="firstName" class="form-control form-details" placeholder="Имя"  disabled>' +
            '                                        </div>' +
            '                                    </div>' + '                                    ' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Отчество</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" value="' + element.passport.patronymic + '" text="' + element.passport.patronymic + '" type="text" name="patronymic" class="form-control form-details" placeholder="Отчество"  disabled>' +
            '                                        </div>' +
            '                                    </div>' + '                                    ' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Серия паспорта</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" id="serialPassport" value="' + element.passport.serialPassport + '" text="' + element.passport.serialPassport + '" type="text" name="serialPassport" class="form-control form-details" placeholder="Серия паспорта"  disabled>' +
            '                                        </div>' +
            '                                    </div>' + '                                    ' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Номер паспорта</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" id="numberPassport" value="' + element.passport.numberPassport + '" text="' + element.passport.numberPassport + '" type="text" name="numberPassport" class="form-control form-details" placeholder="Номер паспорта"  disabled>' +
            '                                        </div>' +
            '                                    </div>' + '                                    ' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Кем выдан</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" value="' + element.passport.issued + '" text="' + element.passport.issued + '" type="text" name="issued" class="form-control form-details" placeholder="Кем выдан"  disabled>' +
            '                                        </div>' +
            '                                    </div>' + '                                    ' +
            '                                    <div class="form-group row">' +
            '                                        <label class="col-sm-3 col-form-label">Дата выдачи</label>' +
            '                                        <div class="col-sm-9">' +
            '                                            <input modelAttribute="passport" value="' + element.passport.issuedDate + '" text="' + element.passport.issuedDate + '" type="text" name="issuedDate" class="form-control form-details inpDate" placeholder="Дата выдачи"  disabled>' +
            '                                        </div>' +
            '                                    </div>' +

            '                                   <div class="form-group row buttons-save" style="display: none">' +
            '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>' +
            '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>' +
            '                                   </div>' +
            '                                </form>' +
            '                                <div class="form-group row buttons-edit">' +
            '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>' +
            '                                   <form action="/transporter/remove/' + element.id + '" method="post">' +
            '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>' +
            '                                   </form>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>');
        applyMasked();
    }
}

function showOoo() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append(
        '                            <div class="card animate__animated animate__fadeIn animate__fast">' +
        '                                <div class="card-body">' +
        '                                    <h4 class="card-title">Новый перевозчик</h4>' +
        '                                    <p class="card-title-desc">Добавьте нового перевозчика</p>' +
        '                                    <form id="form-input" action="/transporter/add" method="post">' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Тип организации</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">' +
        '                                                    <label class="btn btn-primary active">' +
        '                                                        <input type="radio" modelAttribute="enterprise" name="type" value="OOO" id="radioOoo" checked="" onclick="showOoo()"> Компания' +
        '                                                    </label>' +
        '                                                    <label class="btn btn-primary">' +
        '                                                        <input type="radio" modelAttribute="enterprise" name="type" value="IP" id="radioIp" onclick="showIp()"> ИП' +
        '                                                    </label>' +
        '                                                </div>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +

        '                                        <input type="text" modelAttribute="enterprise" name="subType" value="TRANSPORTER" class="form-control" style="display: none">' +
        '                                        <input type="text" modelAttribute="passport" style="display: none">' +

        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Название организации</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="name" class="form-control" placeholder="Название организации" required="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Юридический адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="legalAddress" class="form-control" placeholder="Юридический адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Почтовый адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="postalAddress" class="form-control" placeholder="Почтовый адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Фактический адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="actualAddress" class="form-control" placeholder="Фактический адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">ИНН/КПП</label>' +
        '                                            <div class="col-sm-4">' +
        '                                                <input id="orgInn" type="text" modelAttribute="enterprise" name="inn" class="form-control" placeholder="ИНН" ="">' +
        '                                        </div>' +

        '                                        <div class="col-sm-5">' +
        '                                                <input id="orgKpp" type="text" modelAttribute="enterprise" name="kpp" class="form-control" placeholder="КПП" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                            <div class="form-group row">' +
        '                                                <label class="col-sm-3 col-form-label">ОГРН</label>' +
        '                                                <div class="col-sm-9">' +
        '                                                    <input id="ogrn" type="text" modelAttribute="enterprise" name="ogrn" class="form-control" placeholder="ОГРН" ="">' +
        '                                                </div>' +
        '                                            </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Номер телефона</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="numberPhone" type="text" modelAttribute="enterprise" name="numberPhone" class="form-control" placeholder="Номер телефона" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Код АТИ</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="atiCode" type="text" modelAttribute="enterprise" name="atiCode" class="form-control" placeholder="Код АТИ">' +
        '                                            </div>' +
        '                                        </div>' +

        '                                        <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>' +
        // '                                        <div class="form-group row">' +
        // '                                            <label class="col-sm-3 col-form-label">ИНН</label>' +
        // '                                            <div class="col-sm-9">' +
        // '                                                <input id="inn" type="text" modelAttribute="requisites" name="inn" class="form-control" placeholder="ИНН">' +
        // '                                            </div>' +
        // '                                        </div>' +
        // '                                        <div class="form-group row">' +
        // '                                            <label class="col-sm-3 col-form-label">КПП</label>' +
        // '                                            <div class="col-sm-9">' +
        // '                                                <input id="kpp" type="text" modelAttribute="requisites" name="kpp" class="form-control" placeholder="КПП">' +
        // '                                            </div>' +
        // '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="payAccount" type="text" modelAttribute="requisites" name="payAccount" class="form-control" placeholder="Расчётный счёт" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="corAccount" type="text" modelAttribute="requisites" name="corAccount" class="form-control" placeholder="Корр. счёт" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">БИК</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="bik" type="text" modelAttribute="requisites" name="bik" class="form-control" placeholder="БИК" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Филиал</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="requisites" name="nameBank" class="form-control" placeholder="Филиал" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="row">' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '                                        </div>' +
        '                                    </form>' +
        '                                </div>' +
        '                            </div>');
    applyMasked();
}
function showIp() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append(
        '                            <div class="card animate__animated animate__fadeIn animate__fast">' +
        '                                <div class="card-body">' +
        '                                    <h4 class="card-title">Новый перевозчик</h4>' +
        '                                    <p class="card-title-desc">Добавьте нового перевозчика</p>' +
        '                                    <form id="form-input" action="/transporter/add" method="post">' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Тип организации</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">' +
        '                                                    <label class="btn btn-primary">' +
        '                                                        <input type="radio" modelAttribute="enterprise" name="type" value="OOO" id="radioOoo" onclick="showOoo()"> Компания' +
        '                                                    </label>' +
        '                                                    <label class="btn btn-primary active">' +
        '                                                        <input type="radio" modelAttribute="enterprise" name="type" value="IP" id="radioIp" checked="" onclick="showIp()"> ИП' +
        '                                                    </label>' +
        '                                                </div>' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +

        '                                        <input type="text" modelAttribute="enterprise" name="subType" value="TRANSPORTER" class="form-control" style="display: none">' +

        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Название организации</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="name" class="form-control" placeholder="Название организации" required="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Юридический адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="legalAddress" class="form-control" placeholder="Юридический адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Почтовый адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="postalAddress" class="form-control" placeholder="Почтовый адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Фактический адрес</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="enterprise" name="actualAddress" class="form-control" placeholder="Фактический адрес" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">ИНН</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="orgInn" type="text" modelAttribute="enterprise" name="inn" class="form-control" placeholder="ИНН" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">ОГРНИП</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="ogrnIp" type="text" modelAttribute="enterprise" name="ogrnIp" class="form-control" placeholder="ОГРНИП" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Номер телефона</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="numberPhone" type="text" modelAttribute="enterprise" name="numberPhone" class="form-control" placeholder="Номер телефона" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Код АТИ</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="atiCode" type="text" modelAttribute="enterprise" name="atiCode" class="form-control" placeholder="Код АТИ">' +
        '                                            </div>' +
        '                                        </div>' +

        '                                        <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>' +
        // '                                        <div class="form-group row">' +
        // '                                            <label class="col-sm-3 col-form-label">ИНН</label>' +
        // '                                            <div class="col-sm-9">' +
        // '                                                <input id="inn" type="text" modelAttribute="requisites" name="inn" class="form-control" placeholder="ИНН">' +
        // '                                            </div>' +
        // '                                        </div>' +
        // '                                        <div class="form-group row">' +
        // '                                            <label class="col-sm-3 col-form-label">КПП</label>' +
        // '                                            <div class="col-sm-9">' +
        // '                                                <input id="kpp" type="text" modelAttribute="requisites" name="kpp" class="form-control" placeholder="КПП">' +
        // '                                            </div>' +
        // '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="payAccount" type="text" modelAttribute="requisites" name="payAccount" class="form-control" placeholder="Расчётный счёт" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="corAccount" type="text" modelAttribute="requisites" name="corAccount" class="form-control" placeholder="Корр. счёт" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">БИК</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="bik" type="text" modelAttribute="requisites" name="bik" class="form-control" placeholder="БИК" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Филиал</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="requisites" name="nameBank" class="form-control" placeholder="Филиал" ="">' +
        '                                            </div>' +
        '                                        </div>' +

        '                                        <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Фамилия</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="passport" name="lastName" class="form-control" placeholder="Фамилия" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Имя</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="passport" name="firstName" class="form-control" placeholder="Имя" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Отчество</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="passport" name="patronymic" class="form-control" placeholder="Отчество" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Серия паспорта</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="serialPassport" type="text" modelAttribute="passport" name="serialPassport" class="form-control" placeholder="Серия паспорта" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Номер паспорта</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input id="numberPassport" type="text" modelAttribute="passport" name="numberPassport" class="form-control" placeholder="Номер паспорта" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Кем выдан</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="passport" name="issued" class="form-control" placeholder="Кем выдан" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="form-group row">' +
        '                                            <label class="col-sm-3 col-form-label">Дата выдачи</label>' +
        '                                            <div class="col-sm-9">' +
        '                                                <input type="text" modelAttribute="passport" name="issuedDate" class="form-control inpDate" placeholder="Дата выдачи" ="">' +
        '                                            </div>' +
        '                                        </div>' +
        '                                        <div class="row">' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '                                        </div>' +
        '                                    </form>' +
        '                                </div>' +
        '                            </div>');
    applyMasked();
}