function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    if (element.typeOrganization === "ООО") {
        innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">\n' +
            '                            <div class="card-body">\n' +
            '                                <h4 class="card-title">Карточка заказчика: ' + element.name + '</h4>\n' +
            '                                <form action="/cargo-owner/save/ooo/' + element.id + '" method="post">\n' +
            '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Название организации</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.name + '" text="' + element.name + '" type="text" name="name" class="form-control form-details" placeholder="Название организации" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Юридический адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.legalAddress + '" text="' + element.legalAddress + '" type="text" name="legalAddress" class="form-control form-details" placeholder="Юридический адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Почтовый адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.postalAddress + '" text="' + element.postalAddress + '" type="text" name="postalAddress" class="form-control form-details" placeholder="Почтовый адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Фактический адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.actualAddress + '" text="' + element.actualAddress + '" type="text" name="actualAddress" class="form-control form-details" placeholder="Фактический адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ИНН/КПП</label>\n' +
            '                                        <div class="col-sm-4">\n' +
            '                                            <input id="orgInn" value="' + element.inn + '" text="' + element.inn + '" type="text" name="orgInn" class="form-control form-details" placeholder="ИНН" required disabled>\n' +
            '                                        </div>\n' +

            '                                        <div class="col-sm-5">\n' +
            '                                            <input id="orgKpp" value="' + element.kpp + '" text="' + element.kpp + '" type="text" name="orgKpp" class="form-control form-details" placeholder="КПП" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ОГРН</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="ogrn" value="' + element.ogrn + '" text="' + element.ogrn + '" type="text" name="ogrn" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="numberPhone" value="' + element.numberPhone + '" text="' + element.numberPhone + '" type="text" name="numberPhone" class="form-control form-details" placeholder="Номер телефона" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +


            '                                    <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ИНН</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="inn" value="' + element.requisites.inn + '" text="' + element.requisites.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">КПП</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="kpp" value="' + element.requisites.kpp + '" text="' + element.requisites.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="payAccount" value="' + element.requisites.payAccount + '" text="' + element.requisites.payAccount + '" type="text" name="payAccount" class="form-control form-details" placeholder="Расчётный счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="corAccount" value="' + element.requisites.corAccount + '" text="' + element.requisites.corAccount + '" type="text" name="corAccount" class="form-control form-details" placeholder="Корр. счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="bik" value="' + element.requisites.bik + '" text="' + element.requisites.bik + '" type="text" name="bik" class="form-control form-details" placeholder="БИК" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input value="' + element.requisites.nameBank + '" text="' + element.requisites.nameBank + '" type="text" name="nameBank" class="form-control form-details" placeholder="Филиал" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +

            '                                   <div class="form-group row buttons-save" style="display: none">\n' +
            '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>\n' +
            '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>\n' +
            '                                   </div>\n' +
            '                                </form>\n' +
            '                                <div class="form-group row buttons-edit">\n' +
            '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>\n' +
            '                                   <form action="/cargo-owner/remove/' + element.id + '" method="post">\n' +
            '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>\n' +
            '                                   </form>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');
    }
    else if (element.typeOrganization === "ИП") {
        innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">\n' +
            '                            <div class="card-body">\n' +
            '                                <h4 class="card-title">Карточка заказчика: ' + element.name + '</h4>\n' +
            '                                <form action="/cargo-owner/save/ip/' + element.id + '" method="post">\n' +
            '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Название организации</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.name + '" text="' + element.name + '" type="text" name="name" class="form-control form-details" placeholder="Название организации" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Юридический адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.legalAddress + '" text="' + element.legalAddress + '" type="text" name="legalAddress" class="form-control form-details" placeholder="Юридический адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Почтовый адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.postalAddress + '" text="' + element.postalAddress + '" type="text" name="postalAddress" class="form-control form-details" placeholder="Почтовый адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Фактический адрес</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.actualAddress + '" text="' + element.actualAddress + '" type="text" name="actualAddress" class="form-control form-details" placeholder="Фактический адрес" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ИНН</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="orgInn" value="' + element.inn + '" text="' + element.inn + '" type="text" name="orgInn" class="form-control form-details" placeholder="ИНН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ОГРНИП</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="ogrnIp" value="' + element.ogrnIp + '" text="' + element.ogrnIp + '" type="text" name="ogrnIp" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="numberPhone" value="' + element.numberPhone + '" text="' + element.numberPhone + '" type="text" name="numberPhone" class="form-control form-details" placeholder="Номер телефона" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +


            '                                    <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ИНН</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="inn" value="' + element.requisites.inn + '" text="' + element.requisites.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">КПП</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="kpp" value="' + element.requisites.kpp + '" text="' + element.requisites.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="payAccount" value="' + element.requisites.payAccount + '" text="' + element.requisites.payAccount + '" type="text" name="payAccount" class="form-control form-details" placeholder="Расчётный счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="corAccount" value="' + element.requisites.corAccount + '" text="' + element.requisites.corAccount + '" type="text" name="corAccount" class="form-control form-details" placeholder="Корр. счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="bik" value="' + element.requisites.bik + '" text="' + element.requisites.bik + '" type="text" name="bik" class="form-control form-details" placeholder="БИК" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input value="' + element.requisites.nameBank + '" text="' + element.requisites.nameBank + '" type="text" name="nameBank" class="form-control form-details" placeholder="Филиал" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +

            '                                    <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>\n' +

            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.lastName + '" text="' + element.passport.lastName + '" type="text" name="lastName" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Имя</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.firstName + '" text="' + element.passport.firstName + '" type="text" name="firstName" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Отчество</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.patronymic + '" text="' + element.passport.patronymic + '" type="text" name="patronymic" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Серия паспорта</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="serialPassport" value="' + element.passport.serialPassport + '" text="' + element.passport.serialPassport + '" type="text" name="serialPassport" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Номер паспорта</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="numberPassport" value="' + element.passport.numberPassport + '" text="' + element.passport.numberPassport + '" type="text" name="numberPassport" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Кем выдан</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.issued + '" text="' + element.passport.issued + '" type="text" name="issued" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Дата выдачи</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.issuedDate + '" text="' + element.passport.issuedDate + '" type="text" name="issuedDate" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +

            '                                   <div class="form-group row buttons-save" style="display: none">\n' +
            '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>\n' +
            '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>\n' +
            '                                   </div>\n' +
            '                                </form>\n' +
            '                                <div class="form-group row buttons-edit">\n' +
            '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>\n' +
            '                                   <form action="/cargo-owner/remove/' + element.id + '" method="post">\n' +
            '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>\n' +
            '                                   </form>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');
    }
    else if (element.typeOrganization === "ЧЛ") {
        innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">\n' +
            '                            <div class="card-body">\n' +
            '                                <h4 class="card-title">Карточка заказчика: ' + element.name + '</h4>\n' +
            '                                <form action="/cargo-owner/save/chl/' + element.id + '" method="post">\n' +
            '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
            '                                        <div class="form-group row" style="display: none">\n' +
            '                                            <label class="col-sm-3 col-form-label"></label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input type="text" value="Частное лицо" name="name" class="form-control" placeholder="" required="">\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="numberPhone" value="' + element.numberPhone + '" text="' + element.numberPhone + '" type="text" name="numberPhone" class="form-control form-details" placeholder="Номер телефона" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +


            '                                    <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">ИНН</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="inn" value="' + element.requisites.inn + '" text="' + element.requisites.inn + '" type="text" name="inn" class="form-control form-details" placeholder="ИНН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">КПП</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="kpp" value="' + element.requisites.kpp + '" text="' + element.requisites.kpp + '" type="text" name="kpp" class="form-control form-details" placeholder="КПП" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="payAccount" value="' + element.requisites.payAccount + '" text="' + element.requisites.payAccount + '" type="text" name="payAccount" class="form-control form-details" placeholder="Расчётный счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="corAccount" value="' + element.requisites.corAccount + '" text="' + element.requisites.corAccount + '" type="text" name="corAccount" class="form-control form-details" placeholder="Корр. счёт" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input id="bik" value="' + element.requisites.bik + '" text="' + element.requisites.bik + '" type="text" name="bik" class="form-control form-details" placeholder="БИК" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                        <div class="form-group row">\n' +
            '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
            '                                            <div class="col-sm-9">\n' +
            '                                                <input value="' + element.requisites.nameBank + '" text="' + element.requisites.nameBank + '" type="text" name="nameBank" class="form-control form-details" placeholder="Филиал" required="" disabled>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +

            '                                    <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.lastName + '" text="' + element.passport.lastName + '" type="text" name="lastName" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Имя</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.firstName + '" text="' + element.passport.firstName + '" type="text" name="firstName" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Отчество</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.patronymic + '" text="' + element.passport.patronymic + '" type="text" name="patronymic" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Серия паспорта</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="serialPassport" value="' + element.passport.serialPassport + '" text="' + element.passport.serialPassport + '" type="text" name="serialPassport" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Номер паспорта</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input id="numberPassport" value="' + element.passport.numberPassport + '" text="' + element.passport.numberPassport + '" type="text" name="numberPassport" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Кем выдан</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.issued + '" text="' + element.passport.issued + '" type="text" name="issued" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' + '                                    <div class="form-group row">\n' +
            '                                        <label class="col-sm-3 col-form-label">Дата выдачи</label>\n' +
            '                                        <div class="col-sm-9">\n' +
            '                                            <input value="' + element.passport.issuedDate + '" text="' + element.passport.issuedDate + '" type="text" name="issuedDate" class="form-control form-details" placeholder="ОГРН" required disabled>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +

            '                                   <div class="form-group row buttons-save" style="display: none">\n' +
            '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>\n' +
            '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>\n' +
            '                                   </div>\n' +
            '                                </form>\n' +
            '                                <div class="form-group row buttons-edit">\n' +
            '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>\n' +
            '                                   <form action="/cargo-owner/remove/' + element.id + '" method="post">\n' +
            '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>\n' +
            '                                   </form>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');

    }
}

function showOoo() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append(
        '                            <div class="card animate__animated animate__fadeIn animate__fast">\n' +
        '                                <div class="card-body">\n' +
        '                                    <h4 class="card-title">Новый заказчик</h4>\n' +
        '                                    <p class="card-title-desc">Добавьте нового заказчика</p>\n' +
        '                                    <form id="form-input" action="/cargo-owner/ooo" method="post">\n' +
        '\n' +
        '\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Тип организации</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n' +
        '                                                    <label class="btn btn-primary active">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ООО" id="radioOoo" checked="" onclick="showOoo()"> ООО\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ИП" id="radioIp" onclick="showIp()"> ИП\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ЧЛ" id="radioCHL" onclick="showChl()"> Частное лицо\n' +
        '                                                    </label>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Название организации</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="name" class="form-control" placeholder="Название организации" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Юридический адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="legalAddress" class="form-control" placeholder="Юридический адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Почтовый адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="postalAddress" class="form-control" placeholder="Почтовый адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Фактический адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="actualAddress" class="form-control" placeholder="Фактический адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ИНН/КПП</label>\n' +
        '                                            <div class="col-sm-4">\n' +
        '                                                <input id="orgInn" type="text" name="orgInn" class="form-control" placeholder="ИНН" required="">\n' +
        '                                        </div>\n' +

        '                                        <div class="col-sm-5">\n' +
        '                                                <input id="orgKpp" type="text" name="orgKpp" class="form-control" placeholder="КПП" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                            <div class="form-group row">\n' +
        '                                                <label class="col-sm-3 col-form-label">ОГРН</label>\n' +
        '                                                <div class="col-sm-9">\n' +
        '                                                    <input id="ogrn" type="text" name="ogrn" class="form-control" placeholder="ОГРН" required="">\n' +
        '                                                </div>\n' +
        '                                            </div>' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="numberPhone" type="text" name="numberPhone" class="form-control" placeholder="Номер телефона" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +

        '                                        <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ИНН</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="inn" type="text" name="inn" class="form-control" placeholder="ИНН" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">КПП</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="kpp" type="text" name="kpp" class="form-control" placeholder="КПП" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="payAccount" type="text" name="payAccount" class="form-control" placeholder="Расчётный счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="corAccount" type="text" name="corAccount" class="form-control" placeholder="Корр. счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="bik" type="text" name="bik" class="form-control" placeholder="БИК" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="nameBank" class="form-control" placeholder="Филиал" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="row">\n' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>\n' +
        '                                        </div>\n' +
        '                                    </form>\n' +
        '                                </div>\n' +
        '                            </div>\n');
    applyMasked();
}
function showIp() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append(
        '                            <div class="card animate__animated animate__fadeIn animate__fast">\n' +
        '                                <div class="card-body">\n' +
        '                                    <h4 class="card-title">Новый заказчик</h4>\n' +
        '                                    <p class="card-title-desc">Добавьте нового заказчика</p>\n' +
        '                                    <form id="form-input" action="/cargo-owner/ip" method="post">\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Тип организации</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ООО" id="radioOoo" onclick="showOoo()"> ООО\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary active">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ИП" id="radioIp" checked="" onclick="showIp()"> ИП\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ЧЛ" id="radioCHL" onclick="showChl()"> Частное лицо\n' +
        '                                                    </label>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Название организации</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="name" class="form-control" placeholder="Название организации" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Юридический адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="legalAddress" class="form-control" placeholder="Юридический адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Почтовый адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="postalAddress" class="form-control" placeholder="Почтовый адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Фактический адрес</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="actualAddress" class="form-control" placeholder="Фактический адрес" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ИНН</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="orgInn" type="text" name="orgInn" class="form-control" placeholder="ИНН" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ОГРНИП</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="ogrnIp" type="text" name="ogrnIp" class="form-control" placeholder="ОГРНИП" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="numberPhone" type="text" name="numberPhone" class="form-control" placeholder="Номер телефона" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +

        '                                        <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ИНН</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="inn" type="text" name="inn" class="form-control" placeholder="ИНН" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">КПП</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="kpp" type="text" name="kpp" class="form-control" placeholder="КПП" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="payAccount" type="text" name="payAccount" class="form-control" placeholder="Расчётный счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="corAccount" type="text" name="corAccount" class="form-control" placeholder="Корр. счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="bik" type="text" name="bik" class="form-control" placeholder="БИК" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="nameBank" class="form-control" placeholder="Филиал" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="lastName" class="form-control" placeholder="Имя" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Имя</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="firstName" class="form-control" placeholder="Фамилия" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Отчество</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="patronymic" class="form-control" placeholder="Отчество" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Серия паспорта</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="serialPassport" type="text" name="serialPassport" class="form-control" placeholder="Серия паспорта" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Номер паспорта</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="numberPassport" type="text" name="numberPassport" class="form-control" placeholder="Номер паспорта" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Кем выдан</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="issued" class="form-control" placeholder="Кем выдан" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Дата выдачи</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="date" name="issuedDate" class="form-control" placeholder="Дата выдачи" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>' +
        '                                        <div class="row">\n' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>\n' +
        '                                        </div>\n' +
        '                                    </form>\n' +
        '                                </div>\n' +
        '                            </div>\n');
    applyMasked();
}
function showChl() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append(
        '                            <div class="card animate__animated animate__fadeIn animate__fast">\n' +
        '                                <div class="card-body">\n' +
        '                                    <h4 class="card-title">Новый заказчик</h4>\n' +
        '                                    <p class="card-title-desc">Добавьте нового заказчика</p>\n' +
        '                                    <form id="form-input" action="/cargo-owner/chl" method="post">\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Тип организации</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <div class="btn-group btn-group-toggle" data-toggle="buttons">\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ООО" id="radioOoo" onclick="showOoo()"> ООО\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ИП" id="radioIp" onclick="showIp()"> ИП\n' +
        '                                                    </label>\n' +
        '                                                    <label class="btn btn-primary active">\n' +
        '                                                        <input type="radio" name="typeOrganization" value="ЧЛ" id="radioCHL" checked="" onclick="showChl()"> Частное лицо\n' +
        '                                                    </label>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
        '                                        <div class="form-group row" style="display: none">\n' +
        '                                            <label class="col-sm-3 col-form-label"></label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" value="Частное лицо" name="name" class="form-control" placeholder="" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Номер телефона</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="numberPhone" type="text" name="numberPhone" class="form-control" placeholder="Номер телефона" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Банковские реквизиты<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">ИНН</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="inn" type="text" name="inn" class="form-control" placeholder="ИНН" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">КПП</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="kpp"" type="text" name="kpp" class="form-control" placeholder="КПП" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Расчётный счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="payAccount" type="text" name="payAccount" class="form-control" placeholder="Расчётный счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Корр. счёт</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="corAccount" type="text" name="corAccount" class="form-control" placeholder="Корр. счёт" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">БИК</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="bik" type="text" name="bik" class="form-control" placeholder="БИК" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Филиал</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="nameBank" class="form-control" placeholder="Филиал" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +

        '                                        <h5 class="card-title text-center border-top"><br>Паспортные данные<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="lastName" class="form-control" placeholder="Имя" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Имя</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="firstName" class="form-control" placeholder="Фамилия" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Отчество</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="patronymic" class="form-control" placeholder="Отчество" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Серия паспорта</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="serialPassport" type="text" name="serialPassport" class="form-control" placeholder="Серия паспорта" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Номер паспорта</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input id="numberPassport" type="text" name="numberPassport" class="form-control" placeholder="Номер паспорта" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Кем выдан</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="text" name="issued" class="form-control" placeholder="Кем выдан" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Дата выдачи</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input type="date" name="issuedDate" class="form-control" placeholder="Дата выдачи" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>' +
        '                                        <div class="row">\n' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>\n' +
        '                                        </div>\n' +
        '                                    </form>\n' +
        '                                </div>\n' +
        '                            </div>\n');
    applyMasked();
}