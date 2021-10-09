function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">' +
        '                            <div class="card-body">' +
        '                                <h4 class="card-title">Карточка рейса</h4>' +
        '                                <form action="/forming/save/' + element.id + '" method="post">' +
        '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Менеджер</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="manager" name="manager" class="form-control form-details manager" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="cargoOwner" name="cargoOwner" class="form-control form-details cargoOwner" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Перевозчик</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="transporter" name="transporter" class="form-control form-details transporter" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Водитель</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="driver" name="driver" class="form-control form-details driver" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Транспортное средство</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="vehicle" name="vehicle" class="form-control form-details vehicle" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Груз</label>' +
        '                                        <div class="col-sm-9">' +
            '                                        <div class="cargo-add">' +
            '                                            <input id="cargo" value="' + element.cargo.name + '" text="' + element.cargo.name + '" type="text" name="cargo" class="form-control form-details cargo" placeholder="" required disabled>' +
            '                                        </div>' +
        '                                        </div>' +
        '                                    </div>' +

        '                                    <h5 class="card-title text-center border-top"><br>Данные о погрузке<br></h5>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Дата погрузки</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input id="loadingDate" value="' + element.loading.date + '" text="' + element.loading.date + '" type="date" name="loadingDate" class="form-control form-details loadingDate" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Место погрузки</label>' +
        '                                        <div class="col-sm-9">' +
            '                                        <div class="loadingPlace-add">' +
            '                                            <input id="loadingPlace" value="' + element.loading.place + '" text="' + element.loading.place + '" type="text" name="loadingPlace" class="form-control form-details loadingPlace" placeholder="" required disabled>' +
            '                                        </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '                                        <div class="col-sm-5">' +
        '                                            <input id="loadingPerson" value="' + element.loading.person + '" text="' + element.loading.person + '" type="text" name="loadingPerson" class="form-control form-details loadingPerson" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                        <div class="col-sm-4">' +
        '                                            <input id="loadingNumber" value="' + element.loading.date + '" text="' + element.loading.date + '" type="text" name="loadingNumber" class="form-control form-details loadingNumber" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +

        '                                    <h5 class="card-title text-center border-top"><br>Данные о выгрузке<br></h5>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Дата выгрузке</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input id="unloadingDate" value="' + element.unloading.date + '" text="' + element.unloading.date + '" type="date" name="unloadingDate" class="form-control form-details unloadingDate" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Место выгрузке</label>' +
        '                                        <div class="col-sm-9">' +
        '                                        <div class="unloadingPlace-add">' +
        '                                            <input id="unloadingPlace" value="' + element.unloading.place + '" text="' + element.unloading.place + '" type="text" name="unloadingPlace" class="form-control form-details loadingPlace" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Контактное лицо</label>' +
        '                                        <div class="col-sm-5">' +
        '                                            <input id="unloadingPerson" value="' + element.unloading.person + '" text="' + element.unloading.person + '" type="text" name="unloadingPerson" class="form-control form-details loadingPerson" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                        <div class="col-sm-4">' +
        '                                            <input id=unloadingNumber" value="' + element.unloading.date + '" text="' + element.unloading.date + '" type="text" name="unloadingNumber" class="form-control form-details loadingNumber" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +

        '                                    <h5 class="card-title text-center border-top"><br>Оплата для грузовладельца<br></h5>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="ourCompanyCust" name="ourCompanyCust" class="form-control form-details ourCompanyCust" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="formPayCust" name="formPayCust" class="form-control form-details formPayCust" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '                                        <div class="col-sm-4">' +
        '                                            <input id="amountCust" value="' + element.customerPay.amount + '" text="' + element.customerPay.amount + '" type="text" name="amountCust" class="form-control form-details amountCust" placeholder="Сумма" required disabled>' +
        '                                        </div>' +
        '                                        <div class="col-sm-5">' +
        '                                            <input id=amountWordsCust" value="' + element.customerPay.amountWords + '" text="' + element.customerPay.amountWords + '" type="text" name="amountWordsCust" class="form-control form-details amountWordsCust" placeholder="Сумма прописью" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input id="payTermsCust" value="' + element.customerPay.payTerms + '" text="' + element.customerPay.payTerms + '" type="text" name="payTermsCust" class="form-control form-details payTermsCust" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +

        '                                    <h5 class="card-title text-center border-top"><br>Оплата для перевозчика<br></h5>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="ourCompanyCarr" name="ourCompanyCarr" class="form-control form-details ourCompanyCarr" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <select id="formPayCarr" name="formPayCarr" class="form-control form-details formPayCarr" required disabled>' +
        '                                            </select>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '                                        <div class="col-sm-4">' +
        '                                            <input id="amountCarr" value="' + element.customerPay.amount + '" text="' + element.customerPay.amount + '" type="text" name="amountCarr" class="form-control form-details amountCarr" placeholder="Сумма" required disabled>' +
        '                                        </div>' +
        '                                        <div class="col-sm-5">' +
        '                                            <input id=amountWordsCarr" value="' + element.customerPay.amountWords + '" text="' + element.customerPay.amountWords + '" type="text" name="amountWordsCarr" class="form-control form-details amountWordsCarr" placeholder="Сумма прописью" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input id="payTermsCarr" value="' + element.customerPay.payTerms + '" text="' + element.customerPay.payTerms + '" type="text" name="payTermsCarr" class="form-control form-details payTermsCarr" placeholder="" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row buttons-save" style="display: none">' +
        '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>' +
        '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>' +
        '                                   </div>' +
        '                                </form>' +
        '                                <div class="form-group row buttons-edit">' +
        '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>' +
        '                                   <form action="/forming/remove/' + element.id + '" method="post">' +
        '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>' +
        '                                   </form>' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>');
    innerDetails(element);
}

function newForming() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">'  +
        '                                        <div class="card-body">'  +
        '                                            <h4 class="card-title">Новое формирование</h4>'  +
        '                                            <p class="card-title-desc">Создайте новое формирование</p>'  +
        '                                            <form id="form-input" action="/forming" method="post">'  +
        // '                                                <div class="form-group row">'  +
        // '                                                    <label class="col-sm-3 col-form-label">Организации</label>'  +
        // '                                                    <div class="col-sm-9">'  +
        // '                                                        <div class="btn-group btn-group-toggle organization" data-toggle="buttons">'  +
        // '                                                        </div>'  +
        // '                                                    </div>'  +
        // '                                                </div>'  +
        '                                                <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Менеджер</label>'  +
        '                                                   <div class="col-sm-9">'  +
        '                                                        <select id="manager" name="manager" class="form-control form-details manager" required>' +
        '                                                           <option></option>'  +
        '                                                        </select>'  +
        '                                                   </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Заказчик</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <select id="cargoOwner" name="cargoOwner" class="form-control form-details cargoOwner" required>'  +
        '                                                           <option></option>'  +
        '                                                        </select>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Перевозчик</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <select id="transporter" name="transporter" class="form-control form-details transporter" onchange="innerDV()" required>'  +
        '                                                           <option></option>'  +
        '                                                        </select>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Водитель</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <select id="driver" name="driver" class="form-control form-details driver" required>'  +
        '                                                        </select>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Транспортное средство</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <select id="vehicle" name="vehicle" class="form-control form-details vehicle" required>'  +        '                                                           <option disabled></option>'  +
        '                                                        </select>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Груз</label>'  +
        '                                                        <div class="col-sm-5">'  +
        '                                                            <input id="cargo" type="text" name="cargo[]" class="form-control form-details cargo" placeholder="Наименование груза" required>'  +
        '                                                        </div>'  +
        '                                                        <div class="col-sm-4">'  +
        '                                                            <input id="weight" type="text" name="weight[]" class="form-control form-details weight" placeholder="Вес груза" required>'  +
        '                                                        </div>'  +
        '                                                </div>'  +
        '                                                <div class="cargo-add"> </div>'  +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label"></label>'  +
        '                                                        <div class="col-sm-5">'  +
        '                                                              <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="cargoAdd()"><i class="mdi mdi-plus-circle"></i></button>'  +
        '                                                        </div>'  +
        '                                                </div>'  +
        '                                             <div class="form-group row">' +
        '                                                 <label class="col-sm-3 col-form-label">Комментарий</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                        <input id="comment" type="text" name="comment" class="form-control form-details comment" placeholder="" required>' +
        '                                                  </div>' +
        '                                             </div>' +
        '                                                <h5 class="card-title text-center border-top"><br>Данные о погрузке<br></h5>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Дата погрузки</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <input id="loadingDate" type="date" name="loadingDate" class="form-control form-details loadingDate" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Место погрузки</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <input id="loadingPlace" type="text" name="loadingPlace[]" class="form-control form-details loadingPlace" placeholder="Адрес места погрузки" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="loadingPlace-add"></div>'  +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label"></label>'  +
        '                                                        <div class="col-sm-5">'  +
        '                                                              <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="loadingPlaceAdd()"><i class="mdi mdi-plus-circle"></i></button>'  +
        '                                                        </div>'  +
        '                                                </div>'  +

        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Контактное лицо</label>'  +
        '                                                    <div class="col-sm-5">'  +
        '                                                        <input id="loadingPerson" type="text" name="loadingPerson" class="form-control form-details loadingPerson" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                    <div class="col-sm-4">'  +
        '                                                        <input id="loadingNumber" type="text" name="loadingNumber" class="form-control form-details loadingNumber" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '            ' +
        '                                                <h5 class="card-title text-center border-top"><br>Данные о выгрузке<br></h5>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Дата выгрузке</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <input id="unloadingDate" type="date" name="unloadingDate" class="form-control form-details unloadingDate" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Место выгрузке</label>'  +
        '                                                    <div class="col-sm-9">'  +
        '                                                        <input id="unloadingPlace" type="text" name="unloadingPlace[]" class="form-control form-details unloadingPlace" placeholder="Адрес места выгрузки" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                                <div class="unloadingPlace-add"></div>'  +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label"></label>'  +
        '                                                        <div class="col-sm-5">'  +
        '                                                              <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="unloadingPlaceAdd()"><i class="mdi mdi-plus-circle"></i></button>'  +
        '                                                        </div>'  +
        '                                                </div>'  +

        '                                                <div class="form-group row">'  +
        '                                                    <label class="col-sm-3 col-form-label">Контактное лицо</label>'  +
        '                                                    <div class="col-sm-5">'  +
        '                                                        <input id="unloadingPerson" type="text" name="unloadingPerson" class="form-control form-details loadingPerson" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                    <div class="col-sm-4">'  +
        '                                                        <input id=unloadingNumber" type="text" name="unloadingNumber" class="form-control form-details loadingNumber" placeholder="" required>'  +
        '                                                    </div>'  +
        '                                                </div>'  +
        '                                               <h5 class="card-title text-center border-top"><br>Оплата для грузовладельца<br></h5>' +
        '                                               <div class="form-group row">' +
        '                                                  <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                                                   <div class="col-sm-9">' +
        '                                                     <select id="ourCompanyCust" name="ourCompanyCust" class="form-control form-details ourCompanyCust" required>' +
        '                                                            <option></option>'  +
        '                                                        </select>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                      <select id="formPayCust" name="formPayCust" class="form-control form-details formPayCust" required>' +
        '                                                           <option></option>'  +
        '                                                     </select>' +
        '                                                  </div>' +
        '                                              </div>' +
        '                                              <div class="form-group row">' +
        '                                                 <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '                                                  <div class="col-sm-4">' +
        '                                                        <input id="amountCust" type="text" name="amountCust" class="form-control form-details amountCust" placeholder="Сумма" required>' +
        '                                                    </div>' +
        '                                                    <div class="col-sm-5">' +
        '                                                      <input id=amountWordsCust" type="text" name="amountWordsCust" class="form-control form-details amountWordsCust" placeholder="Сумма прописью" required>' +
        '                                                 </div>' +
        '                                                </div>' +
        '                                              <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                        <input id="payTermsCust" type="text" name="payTermsCust" class="form-control form-details payTermsCust" placeholder="" required>' +
        '                                                    </div>' +
        '                                               </div>' +

        '                                               <h5 class="card-title text-center border-top"><br>Оплата для перевозчика<br></h5>' +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                      <select id="ourCompanyCarr" name="ourCompanyCarr" class="form-control form-details ourCompanyCarr" required>' +
        '                                                           <option></option>'  +
        '                                                        </select>' +
        '                                                    </div>' +
        '                                              </div>' +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                     <select id="formPayCarr" name="formPayCarr" class="form-control form-details formPayCarr" required>' +
        '                                                           <option></option>'  +
        '                                                     </select>' +
        '                                                   </div>' +
        '                                                </div>' +
        '                                              <div class="form-group row">' +
        '                                                   <label class="col-sm-3 col-form-label">Сумма рейса</label>' +
        '                                                   <div class="col-sm-4">' +
        '                                                       <input id="amountCarr" type="text" name="amountCarr" class="form-control form-details amountCarr" placeholder="Сумма" required>' +
        '                                                 </div>' +
        '                                                    <div class="col-sm-5">' +
        '                                                        <input id=amountWordsCarr" type="text" name="amountWordsCarr" class="form-control form-details amountWordsCarr" placeholder="Сумма прописью" required>' +
        '                                                 </div>' +
        '                                            </div>' +
        '                                             <div class="form-group row">' +
        '                                                 <label class="col-sm-3 col-form-label">Условия оплаты</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                        <input id="payTermsCarr" type="text" name="payTermsCarr" class="form-control form-details payTermsCarr" placeholder="" required>' +
        '                                                  </div>' +
        '                                             </div>' +
        '                                               <div class="row">' +
        '                                                <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '                                           </div>' +
        '                                        </form>' +
        '                                  </div>' +
        '                               </div>' +
        '</div>');
    innerNew();
}

function cargoAdd() {
    $('.cargo-add').append(
        '                                               <div class="form-group row">' +
        '                                                     <label class="col-sm-3 col-form-label"></label>' +
        '                                                     <div class="col-sm-5">' +
        '                                                         <input id="cargo" type="text" name="cargo[]" class="form-control form-details cargo" placeholder="Наименование груза">' +
        '                                                     </div>' +
        '                                                     <div class="col-sm-4">' +
        '                                                         <input id="weight" type="text" name="weight[]" class="form-control form-details cargo" placeholder="Вес груза">' +
        '                                                     </div>' +
        '                                                </div>')
}
function loadingPlaceAdd() {
    $('.loadingPlace-add').append('                                               <div class="form-group row">' +
        '                                                   <label class="col-sm-3 col-form-label"></label>' +
        '                                                   <div class="col-sm-9">' +
        '                                                        <input id="loadingPlace" type="text" name="loadingPlace[]" class="form-control form-details loadingPlace" placeholder="Адрес места погрузки">' +
        '                                                   </div>' +
        '                                               </div>')
}
function unloadingPlaceAdd() {
    $('.unloadingPlace-add').append('                                               <div class="form-group row">' +
        '                                                   <label class="col-sm-3 col-form-label"></label>' +
        '                                                   <div class="col-sm-9">' +
        '                                                        <input id="unloadingPlace" type="text" name="unloadingPlace[]" class="form-control form-details unloadingPlace" placeholder="Адрес места выгрузки">' +
        '                                                   </div>' +
        '                                               </div>')
}