function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('' +
        '<div class="card animate__animated animate__fadeIn animate__fast">' +
        '<div class="card-body">' +
        '    <h4 class="card-title">Карточка рейса</h4>' +
        '        <form action="/forming/save/' + element.id + '" method="post">' +

        '        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Комментарии к полученным документам</label>' +
        '            <div class="col-sm-9">' +
        '                <input modelAttribute="forming" id="commentDoc" value="' + element.commentDoc + '" text="' + element.commentDoc + '" type="text" name="commentDoc" class="form-control form-details comment" placeholder="Полученные документы"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">№ Счёта</label>' +
        '            <div class="col-sm-3">' +
        '                <input modelAttribute="forming" id="numPay" value="' + element.numPay + '" text="' + element.numPay + '" type="text" name="numPay" class="form-control form-details numPay" placeholder="Номер счёта"  disabled>' +
        '            </div>' +
        '            <label class="col-sm-3 col-form-label">№ Акта/УПД</label>' +
        '            <div class="col-sm-3">' +
        '                <input modelAttribute="forming" id="numAct" value="' + element.numAct + '" text="' + element.numAct + '" type="text" name="numAct" class="form-control form-details numAct" placeholder="Номер Акта/УПД"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany"  disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Менеджер</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="manager" name="manager" class="form-control form-details manager"  disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="customer" name="customer" class="form-control form-details customer"  disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Перевозчик</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="transporter" name="transporter" class="form-control form-details transporter" required disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Водитель</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="driver" name="driver" class="form-control form-details driver" required disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Транспортное средство</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="vehicle" name="vehicle" class="form-control form-details vehicle" required disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="cargo-add"> </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '            <div class="col-sm-9">' +
        '                <input modelAttribute="forming" id="comment" value="' + element.comment + '" text="' + element.comment + '" type="text" name="comment" class="form-control form-details comment" placeholder="Комментарии к перевозке"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <h5 class="card-title text-center border-top"><br>Данные о погрузке<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Дата погрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="loadingDate" value="' + element.loading.date + '" text="' + element.loading.date + '" type="text" name="loadingDate" class="form-control form-details loadingDate" placeholder=""  disabled>' +
        '            </div>' +
        '               <label class="col-sm-3 col-form-label">Время погрузки</label>' +
        '               <div class="col-sm-3">' +
        '                   <input id="loadingTime" value="' + element.loading.time + '" text="' + element.loading.time + '" type="text" name="loadingTime" class="form-control form-details loadingTime" placeholder=""  disabled>' +
        '               </div>' +
        '           </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '            <div class="col-sm-9">' +
        '                 <input id="loadingComment" value="' + element.loading.comment + '" text="' + element.loading.comment + '" type="text" name="loadingComment" class="form-control form-details loadingComment" placeholder="Комментарии к погрузке"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <div class="loading-add">' +
        '            <input type="text" name="loadingPlace" class="loadingPlace" style="display: none">' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '            <div class="col-sm-4">' +
        '                <input id="loadingPerson" value="' + element.loading.person + '" text="' + element.loading.person + '" type="text" name="loadingPerson" class="form-control form-details loadingPerson" placeholder="Имя"  disabled>' +
        '            </div>' +
        '            <label class="col-sm-2 col-form-label">Номер</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="loadingNumber" value="' + element.loading.number + '" text="' + element.loading.number + '" type="text" name="loadingNumber" class="form-control form-details loadingNumber" placeholder=""  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <h5 class="card-title text-center border-top"><br>Данные о выгрузке<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Дата выгрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="unloadingDate" value="' + element.unloading.date + '" text="' + element.unloading.date + '" type="text" name="unloadingDate" class="form-control form-details unloadingDate" placeholder="" disabled>' +
        '            </div>' +
        '               <label class="col-sm-3 col-form-label">Время погрузки</label>' +
        '               <div class="col-sm-3">' +
        '                   <input id="unloadingTime" value="' + element.unloading.time + '" text="' + element.unloading.time + '" type="text" name="unloadingTime" class="form-control form-details unloadingTime" placeholder=""  disabled>' +
        '               </div>' +
        '           </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '               <div class="col-sm-9">' +
        '                <input id="unloadingComment" value="' + element.unloading.comment + '" text="' + element.unloading.comment + '" type="text" name="unloadingComment" class="form-control form-details unloadingComment" placeholder="Комментарии к погрузке"  disabled>' +
        '             </div>' +
        '        </div>' +
        '        <div class="unloading-add">' +
        '            <input type="text" name="unloadingPlace" class="unloadingPlace" style="display: none">' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '            <div class="col-sm-4">' +
        '                <input id="unloadingPerson" value="' + element.unloading.person + '" text="' + element.unloading.person + '" type="text" name="unloadingPerson" class="form-control form-details unloadingPerson" placeholder="Имя"  disabled>' +
        '            </div>' +
        '            <label class="col-sm-2 col-form-label">Номер</label>' +
        '            <div class="col-sm-3">' +
        '                <input id=unloadingNumber" value="' + element.unloading.number + '" text="' + element.unloading.number + '" type="text" name="unloadingNumber" class="form-control form-details unloadingNumber" placeholder=""  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <h5 class="card-title text-center border-top"><br>Оплата для заказчика<br></h5>' +
        '        <input value="CUSTOMER" name="typeCust" style="display: none">' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="formPayCust" name="formPayCust" class="form-control form-details formPayCust"  disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '            <div class="col-sm-2">' +
        '                <input id="amountCust" value="' + element.customerPay.amount + '" text="' + element.customerPay.amount + '" type="number" name="amountCust" class="form-control form-details amountCust" placeholder="Сумма в рублях" step=".01" disabled>' +
        '            </div>' +
        '            <label class="col-sm-2 col-form-label">Прописью</label>' +
        '            <div class="col-sm-5">' +
        '                <input id=amountWordsCust" value="' + element.customerPay.amountWords + '" text="' + element.customerPay.amountWords + '" type="text" name="amountWordsCust" class="form-control form-details amountWordsCust" placeholder="Сумма прописью"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="payTermsCust" value="' + element.customerPay.payTerms + '" text="' + element.customerPay.payTerms + '" type="text" name="payTermsCust" class="form-control form-details payTermsCust" placeholder="Условия оплаты"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <h5 class="card-title text-center border-top"><br>Оплата для перевозчика<br></h5>' +
        '        <input value="CARRIER" name="typeCarr" style="display: none">' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="formPayCarr" name="formPayCarr" class="form-control form-details formPayCarr"  disabled>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '            <div class="col-sm-2">' +
        '                <input id="amountCarr" value="' + element.carrierPay.amount + '" text="' + element.carrierPay.amount + '" type="number" name="amountCarr" class="form-control form-details amountCarr" placeholder="Сумма в рублях" step=".01" disabled>' +
        '            </div>' +
        '            <label class="col-sm-2 col-form-label">Прописью</label>' +
        '            <div class="col-sm-5">' +
        '                <input id=amountWordsCarr" value="' + element.carrierPay.amountWords + '" text="' + element.carrierPay.amountWords + '" type="text" name="amountWordsCarr" class="form-control form-details amountWordsCarr" placeholder="Сумма прописью"  disabled>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="payTermsCarr" value="' + element.carrierPay.payTerms + '" text="' + element.carrierPay.payTerms + '" type="text" name="payTermsCarr" class="form-control form-details payTermsCarr" placeholder="Условия оплаты"  disabled>' +
        '            </div>' +
        '        </div>' +
        '       <div class="form-group row buttons-save" style="display: none">' +
        '           <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>' +
        '           <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>' +
        '       </div>' +
        '    </form>' +
        '    <div class="form-group row buttons-edit">' +
        '            <div class="col-sm-3">' +
        '       <button type="button" id="btn-edit" class=" btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>' +
        '       <form action="/forming/remove/' + element.id + '" method="post">' +
        '           <button type="submit" class="btn btn-danger waves-effect mt-2"><i class="mdi mdi mdi-delete-circle-outline mr-1 ml-5"></i>Удалить</button>' +
        '       </form>' +
        '            </div>' +
        '            <div class="col-sm-6">' +
        '              <div class="dropdown d-inline-block">\n' +
        '                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <i class="mdi mdi-printer-check mr-1"></i>Печать<i class="mdi mdi-chevron-down ml-1"></i>\n' +
        '                </a>\n' +
        ' <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\n' +
        '<form target="_blank" action="/print/act/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Акт</button>\n' +
        '</form>' +
        '<form target="_blank"  action="/print/payment/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Счёт</button>\n' +
        '</form>' +
        '<form target="_blank" action="/print/invoice/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Счёт фактура</button>\n' +
        '</form>' +
        '<form target="_blank" action="/print/app-customer/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Заявка с заказчиком</button>\n' +
        '</form>' +
        '<form target="_blank" action="/print/app-carrier/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Заявка с перевозчиком</button>\n' +
        '</form>' +
        '<form target="_blank" action="/print/attorney/' + element.id + '" method="get">' +
        '    <button type="submit" class="dropdown-item">Доверенность</button>\n' +
        '</form>' +
        ' </div>\n' +
        '               </div>' +
        '               </div>' +
        '    </div>' +
        '</div>' +
        '             </div>');
    innerDetails(element);
    applyMasked();

}

function newForming() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('' +
        '<div class="card animate__animated animate__fadeIn animate__fast">' +
        '<div class="card-body">' +
        '    <h4 class="card-title">Новое формирование</h4>' +
        '    <p class="card-title-desc">Создайте новое формирование</p>' +
        '    <form id="form-input" action="/forming/add" method="post">' +
        '        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '        <div class="form-group row">' +
        '           <label class="col-sm-3 col-form-label">№ Счёта</label>' +
        '           <div class="col-sm-3">' +
        '                <input id="numPay" type="text" name="numPay" class="form-control form-details numPay" placeholder="Номер счёта" >' +
        '           </div>' +
        '           <label class="col-sm-3 col-form-label">№ Акта/УПД</label>' +
        '           <div class="col-sm-3">' +
        '                <input id="numAct" type="text" name="numAct" class="form-control form-details numAct" placeholder="Номер Акта/УПД" >' +
        '           </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '           <div class="col-sm-9">' +
        '                <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany" >' +
        '                </select>' +
        '           </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Менеджер</label>' +
        '           <div class="col-sm-9">' +
        '                <select id="manager" name="manager" class="form-control form-details manager" >' +
        '                </select>' +
        '           </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="customer" name="customer" class="form-control form-details customer" >' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Перевозчик</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="transporter" name="transporter" class="form-control form-details transporter" onchange="innerDV()" required>' +
        '  <option></option>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Водитель</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="driver" name="driver" class="form-control form-details driver" required>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Транспортное средство</label>' +
        '            <div class="col-sm-9">' +
        '                <select id="vehicle" name="vehicle" class="form-control form-details vehicle" required>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Груз</label>' +
        '                <div class="col-sm-5">' +
        '   <input id="cargo" type="text" name="cargo[]" class="form-control form-details cargo" placeholder="Наименование груза" required>' +
        '                </div>' +
        '                <div class="col-sm-4">' +
        '   <input id="weight" type="text" name="weight[]" class="form-control form-details weight" placeholder="Вес груза" required>' +
        '                </div>' +
        '        </div>' +
        '        <div class="cargo-add"> </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label"></label>' +
        '                <div class="col-sm-5">' +
        '     <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="cargoAdd()"><i class="mdi mdi-plus-circle"></i></button>' +
        '                </div>' +
        '        </div>' +
        '     <div class="form-group row">' +
        '         <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="comment" type="text" name="comment" class="form-control form-details comment" placeholder="Комментарии к перевозке" >' +
        '          </div>' +
        '     </div>' +
        '        <h5 class="card-title text-center border-top"><br>Данные о погрузке<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Дата погрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="loadingDate" type="text" name="loadingDate" class="form-control form-details loadingDate" placeholder="" >' +
        '            </div>' +
        '            <label class="col-sm-3 col-form-label">Время погрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="loadingTime" type="text" name="loadingTime" class="form-control form-details loadingTime" placeholder="" >' +
        '            </div>' +
        '        </div>' +
        '     <div class="form-group row">' +
        '         <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="loadingComment" type="text" name="loadingComment" class="form-control form-details loadingComment" placeholder="Комментарии к погрузке" >' +
        '          </div>' +
        '     </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Место погрузки</label>' +
        '            <input type="text" name="loadingPlace" class="loadingPlace" style="display: none">' +

        '            <div class="col-sm-9">' +
        '                <input type="text" name="loadingPlace" class="form-control form-details loadingPlace" placeholder="Адрес места погрузки" required>' +
        '            </div>' +
        '        </div>' +
        '        <div class="loadingPlace-add"></div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label"></label>' +
        '                <div class="col-sm-5">' +
        '     <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="loadingPlaceAdd()"><i class="mdi mdi-plus-circle"></i></button>' +
        '                </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '            <div class="col-sm-5">' +
        '                <input id="loadingPerson" type="text" name="loadingPerson" class="form-control form-details loadingPerson" placeholder="Имя" >' +
        '            </div>' +
        '            <div class="col-sm-4">' +
        '                <input id="loadingNumber" type="text" name="loadingNumber" class="form-control form-details loadingNumber" placeholder="" >' +
        '            </div>' +
        '        </div>' +
        '        <h5 class="card-title text-center border-top"><br>Данные о выгрузке<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Дата выгрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="unloadingDate" type="text" name="unloadingDate" class="form-control form-details unloadingDate" placeholder="" >' +
        '            </div>' +
        '            <label class="col-sm-3 col-form-label">Время выгрузки</label>' +
        '            <div class="col-sm-3">' +
        '                <input id="unloadingTime" type="text" name="unloadingTime" class="form-control form-details unloadingTime" placeholder="" >' +
        '            </div>' +
        '        </div>' +
        '     <div class="form-group row">' +
        '         <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="unloadingComment" type="text" name="unloadingComment" class="form-control form-details unloadingComment" placeholder="Комментарии к выгрузке" >' +
        '          </div>' +
        '     </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Место выгрузки</label>' +
        '            <input type="text" name="unloadingPlace" class="unloadingPlace" style="display: none">' +
        '            <div class="col-sm-9">' +
        '                <input type="text" name="unloadingPlace" class="form-control form-details unloadingPlace" placeholder="Адрес места выгрузки" required>' +
        '            </div>' +
        '        </div>' +
        '        <div class="unloadingPlace-add"></div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label"></label>' +
        '                <div class="col-sm-5">' +
        '     <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="unloadingPlaceAdd()"><i class="mdi mdi-plus-circle"></i></button>' +
        '                </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '            <div class="col-sm-5">' +
        '                <input id="unloadingPerson" type="text" name="unloadingPerson" class="form-control form-details unloadingPerson" placeholder="Имя" >' +
        '            </div>' +
        '            <div class="col-sm-4">' +
        '                <input id=unloadingNumber" type="text" name="unloadingNumber" class="form-control form-details unloadingNumber" placeholder="" >' +
        '            </div>' +
        '        </div>' +
        '       <h5 class="card-title text-center border-top"><br>Оплата для заказчика<br></h5>' +
        '       <input modelAttribute="payingCust" value="CUSTOMER" name="typeCust" style="display: none">' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '            <div class="col-sm-9">' +
        '              <select modelAttribute="payingCust" id="formPayCust" name="formPayCust" class="form-control form-details formPayCust" required>' +
        '             </select>' +
        '          </div>' +
        '      </div>' +
        '      <div class="form-group row">' +
        '         <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '          <div class="col-sm-4">' +
        '                <input modelAttribute="payingCust" id="amountCust" type="number" name="amountCust" class="form-control form-details amountCust" placeholder="Сумма в рублях" step=".01">' +
        '            </div>' +
        '            <div class="col-sm-5">' +
        '              <input modelAttribute="payingCust" id=amountWordsCust" type="text" name="amountWordsCust" class="form-control form-details amountWordsCust" placeholder="Сумма прописью" >' +
        '         </div>' +
        '        </div>' +
        '      <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <input modelAttribute="payingCust" id="payTermsCust" type="text" name="payTermsCust" class="form-control form-details payTermsCust" placeholder="Условия оплаты" >' +
        '            </div>' +
        '       </div>' +

        '       <h5 class="card-title text-center border-top"><br>Оплата для перевозчика<br></h5>' +
        '       <input value="CARRIER" name="typeCarr" style="display: none">' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '            <div class="col-sm-9">' +
        '             <select id="formPayCarr" name="formPayCarr" class="form-control form-details formPayCarr" required>' +
        '             </select>' +
        '           </div>' +
        '        </div>' +
        '      <div class="form-group row">' +
        '           <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '           <div class="col-sm-4">' +
        '               <input id="amountCarr" type="number" name="amountCarr" class="form-control form-details amountCarr" placeholder="Сумма в рублях" step=".01">' +
        '         </div>' +
        '            <div class="col-sm-5">' +
        '                <input id=amountWordsCarr" type="text" name="amountWordsCarr" class="form-control form-details amountWordsCarr" placeholder="Сумма прописью" >' +
        '         </div>' +
        '    </div>' +
        '     <div class="form-group row">' +
        '         <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '            <div class="col-sm-9">' +
        '                <input id="payTermsCarr" type="text" name="payTermsCarr" class="form-control form-details payTermsCarr" placeholder="Условия оплаты">' +
        '          </div>' +
        '     </div>' +
        '       <div class="row">' +
        '        <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '   </div>' +
        '</form>' +
        '</div>' +
        '              </div>' +
        '</div>');
    innerNew();
    applyMasked();
}

function iDetails(element, ourCompanies, formPays, managers, customers, transporters) {
    let optionManagers = $('.manager');
    let optionCustomers = $('.customer');
    let optionTransporters = $('.transporter');
    let optionDrivers = $('.driver');
    let optionVehicles = $('.vehicle');
    // let optionTrailer = $('.trailer');
    let optionCargo = $('.cargo-add');
    let optionLoading = $('.loading-add');
    let optionUnloading = $('.unloading-add');
    let optionOurCompany = $('.ourCompany');
    let optionFormPayCust = $('.formPayCust');
    let optionFormPayCarr = $('.formPayCarr');

    {
        optionManagers.append('<option value="' + element.manager.id + '">' + element.manager.lastName + ' ' + element.manager.firstName + ' ' + element.manager.patronymic + '</option>')
        optionCustomers.append('<option value="' + element.customer.id + '">' + element.customer.name + '</option>')
        optionTransporters.append('<option value="' + element.transporter.id + '">' + element.transporter.name + '</option>')
        optionDrivers.append('<option value="' + element.driver.id + '">' + element.driver.passport.lastName + ' ' + element.driver.passport.firstName + ' ' + element.driver.passport.patronymic + '</option>')
        optionVehicles.append('<option value="' + element.vehicle.id + '">' + element.vehicle.model + ' (' + element.vehicle.stateNumber + ')</option>')
        // optionTrailer.append('<option value="' + element.vehicle.trailer.id + '">' + element.vehicle.trailer.model + ' (' + element.vehicle.trailer.stateNumber + ')</option>')
        optionOurCompany.append('<option value="' + element.ourCompany.id + '">' + element.ourCompany.name + '</option>')
        optionFormPayCust.append('<option value="' + element.customerPay.paymentForm.id + '">' + element.customerPay.paymentForm.name + '</option>')
        optionFormPayCarr.append('<option value="' + element.carrierPay.paymentForm.id + '">' + element.carrierPay.paymentForm.name + '</option>')
    }

    for (let i = 0; i < managers.length; i++) {
        if (managers[i].id !== element.manager.id) {
            optionManagers.append('<option value="' + managers[i].id + '">' + managers[i].lastName + ' ' + managers[i].firstName + ' ' + managers[i].patronymic + '</option>')
        }
    }
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id !== element.customer.id) {
            optionCustomers.append('<option value="' + customers[i].id + '">' + customers[i].name + '</option>')
        }
    }
    for (let i = 0; i < transporters.length; i++) {
        if (transporters[i].id !== element.transporter.id) {
            optionTransporters.append('<option value="' + transporters[i].id + '">' + transporters[i].name + '</option>')
        }
    }
    for (let i = 0; i < ourCompanies.length; i++) {
        if (ourCompanies[i].id !== element.ourCompany.id) {
            optionOurCompany.append('<option value="' + ourCompanies[i].id + '">' + ourCompanies[i].name + '</option>')
        }
    }
    for (let i = 0; i < formPays.length; i++) {
        if (formPays[i].id !== element.customerPay.paymentForm.id) {
            optionFormPayCust.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
        }
    }
    for (let i = 0; i < formPays.length; i++) {
        if (formPays[i].id !== element.carrierPay.paymentForm.id) {
            optionFormPayCarr.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
        }
    }
    for (let i = 0; i < element.cargo.length; i++) {
        let t = i + 1;
        optionCargo.append('' +
            ' <div class="form-group row">' +
            '     <label class="col-sm-3 col-form-label">Груз №' + t + '</label>' +
            '     <div class="col-sm-5">' +
            '   <input id="" value="' + element.cargo[i].name + '" text="' + element.cargo[i].name + '" type="text" name="cargo[]" class="form-control form-details cargo" placeholder="Наименование груза"  disabled>' +
            '     </div>' +
            '     <label class="col-sm-1 col-form-label">Вес</label>' +
            '     <div class="col-sm-3">' +
            '   <input id="" value="' + element.cargo[i].weight + '" text="' + element.cargo[i].weight + '" type="text" name="weight[]" class="form-control form-details cargo" placeholder="Вес груза"  disabled>' +
            '     </div>' +
            ' </div>');
    }
    for (let i = 0; i < element.loading.positions.length; i++) {
        let t = i + 1;
        optionLoading.append('' +
            ' <div class="form-group row">' +
            '     <label class="col-sm-3 col-form-label">Место погрузки №' + t + '</label>' +
            '     <div class="col-sm-9">' +
            '   <input value="' + element.loading.positions[i].position + '" text="' + element.loading.positions[i].position + '" type="text" name="loadingPlace" class="form-control form-details loadingPlace" placeholder=""  disabled>' +
            '     </div>' +
            ' </div>');
    }
    for (let i = 0; i < element.unloading.positions.length; i++) {
        let t = i + 1;
        optionUnloading.append('' +
            ' <div class="form-group row">' +
            '     <label class="col-sm-3 col-form-label">Место выгрузки №' + t + '</label>' +
            '     <div class="col-sm-9">' +
            '   <input value="' + element.unloading.positions[i].position + '" text="' + element.unloading.positions[i].position + '" type="text" name="unloadingPlace" class="form-control form-details unloadingPlace" placeholder=""  disabled>' +
            '     </div>' +
            ' </div>');
    }
}

function iDv(drivers, vehicles, trailers) {
    let id = $('#transporter').val();
    let optionDrivers = $('.driver');
    let optionVehicles = $('.vehicle');
    let optionTrailer = $('.trailer');
    optionDrivers.empty();
    optionVehicles.empty();
    optionTrailer.empty();
    for (let i = 0; i < drivers.length; i++) {
        if (drivers[i].transporter.id == id) {
            optionDrivers.append('<option value="' + drivers[i].id + '">' + drivers[i].passport.lastName + ' ' + drivers[i].passport.firstName + ' ' + drivers[i].passport.patronymic + '</option>')
        }
    }
    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].transporter.id == id) {
            optionVehicles.append('<option value="' + vehicles[i].id + '">' + vehicles[i].model + '(' + vehicles[i].stateNumber + ')</option>')
        }
    }
}

function iNew(ourCompanies, formPays, managers, customers, transporters) {
    let optionManagers = $('.manager');
    let optionCustomers = $('.customer');
    let optionTransporters = $('.transporter');
    let optionOurCompany = $('.ourCompany');
    let optionFormPayCust = $('.formPayCust');
    let optionFormPayCarr = $('.formPayCarr');

    for (let i = 0; i < managers.length; i++) {
        optionManagers.append('<option value="' + managers[i].id + '">' + managers[i].lastName + ' ' + managers[i].firstName + ' ' + managers[i].patronymic + '</option>')
    }
    for (let i = 0; i < customers.length; i++) {
        optionCustomers.append('<option value="' + customers[i].id + '">' + customers[i].name + '</option>')
    }
    for (let i = 0; i < transporters.length; i++) {
        optionTransporters.append('<option value="' + transporters[i].id + '">' + transporters[i].name + '</option>')
    }
    for (let i = 0; i < ourCompanies.length; i++) {
        optionOurCompany.append('<option value="' + ourCompanies[i].id + '">' + ourCompanies[i].name + '</option>')
    }
    for (let i = 0; i < formPays.length; i++) {
        optionFormPayCust.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
        optionFormPayCarr.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
    }
}

function cargoAdd() {
    $('.cargo-add').append(
        '       <div class="form-group row">' +
        '             <label class="col-sm-3 col-form-label"></label>' +
        '             <div class="col-sm-5">' +
        '<input id="cargo" type="text" name="cargo[]" class="form-control form-details cargo" placeholder="Наименование груза">' +
        '             </div>' +
        '             <div class="col-sm-4">' +
        '<input id="weight" type="text" name="weight[]" class="form-control form-details cargo" placeholder="Вес груза">' +
        '             </div>' +
        '        </div>')
}

function loadingPlaceAdd() {
    $('.loadingPlace-add').append('       <div class="form-group row">' +
        '           <label class="col-sm-3 col-form-label"></label>' +
        '           <div class="col-sm-9">' +
        '                <input type="text" name="loadingPlace" class="form-control form-details loadingPlace" placeholder="Адрес места погрузки">' +
        '           </div>' +
        '       </div>')
}

let unloadingPlacei = 1;
let loadingPlacei = 1;

function unloadingPlaceAdd() {
    $('.unloadingPlace-add').append('       <div class="form-group row">' +
        '           <label class="col-sm-3 col-form-label"></label>' +
        '           <div class="col-sm-9">' +
        '                <input type="text" name="unloadingPlace" class="form-control form-details unloadingPlace" placeholder="Адрес места выгрузки">' +
        '           </div>' +
        '       </div>')
}


