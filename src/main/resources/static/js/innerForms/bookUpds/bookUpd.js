function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">' +
        '                            <div class="card-body">' +
        '                                <h4 class="card-title">Карточка УПД</h4>' +
        '                                <form action="/book" method="post">' +
        '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '                                            <input modelAttribute="bookUpd" value="' + element.id + '" type="text" name="id" class="form-control form-details" placeholder=""  disabled style="display:none;">' +
        '                         <div class="form-group row">' +
        '                             <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                             <div class="col-sm-9">' +
        '                                 <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany"  disabled>' +
        '                                 </select>' +
        '                             </div>' +
        '                         </div>' +
        '                         <div class="form-group row">' +
        '                             <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '                             <div class="col-sm-9">' +
        '                                 <select id="customer" name="customer" class="form-control form-details customer"  disabled>' +
        '                                 </select>' +
        '                             </div>' +
        '                         </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">№ УПД</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.enumerate + '" text="' + element.enumerate + '" type="text" name="enumerate" class="form-control form-details" placeholder="№"  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Вид работ</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.workType + '" text="' + element.workType + '" type="text" name="workType" class="form-control form-details" placeholder="Вид работ"  disabled>' +
        '                                        </div>' +
        '                                    </div>' + '                                    ' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Стоимость</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.amount + '" text="' + element.amount + '" type="number" name="amount" class="form-control form-details" placeholder="Стоимость (руб.)"  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                       <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '                                       <div class="col-sm-9">' +
        '                                        <select id="formPay" name="formPay" class="form-control form-details formPay" disabled>' +
        '                                        </select>' +
        '                                      </div>' +
        '                                   </div>' +
        '                                   <div class="expenses-add"></div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Выставлено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.exposedDate + '" text="' + element.exposedDate + '" type="text" name="exposedDate" class="form-control form-details inpDate" placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Прибыль</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.signedDate + '" text="' + element.signedDate + '" type="number" name="signedDate" class="form-control form-details inpDate" placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Оплачено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.paidDate + '" text="' + element.paidDate + '" type="text" name="paidDate" class="form-control form-details inpDate " placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Комментарии</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.comment + '" text="' + element.comment + '" type="text" name="comment" class="form-control form-details" placeholder="Комментарии" disabled>' +
        '                                        </div>' +
        '                                    </div>' +


        '                                   <div class="form-group row buttons-save" style="display: none">' +
        '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>' +
        '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>' +
        '                                   </div>' +
        '                                </form>' +
        '                                <div class="form-group row buttons-edit">' +
        '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>' +
        '                                   <form action="/book/remove/' + element.id + '" method="post">' +
        '                                       <button type="submit" class="btn btn-danger waves-effect mr-5"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>' +
        '                                   </form>' +
        '                                               <div class="col-sm-6">' +
        '                                                 <div class="dropdown d-inline-block">\n' +
        '                                                   <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                                       <i class="mdi mdi-printer-check mr-1"></i>Печать<i class="mdi mdi-chevron-down ml-1"></i>\n' +
        '                                                   </a>\n' +
        '                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\n' +
        '                                        <form target="_blank" action="/print/book/' + element.id + '" method="get">' +
        '                                            <button type="submit" class="dropdown-item">Акт</button>\n' +
        '                                        </form>' +
        '                                   <form target="_blank"  action="/print/paymentBook/' + element.id + '" method="get">' +
        '                                       <button type="submit" class="dropdown-item">Счёт</button>\n' +
        '                                   </form>' +
        '                                   <form target="_blank" action="/print/invoiceBook/' + element.id + '" method="get">' +
        '                                       <button type="submit" class="dropdown-item">Счёт фактура</button>\n' +
        '                                   </form>' +
        '                                    </div>\n' +
        '                                                  </div>' +
        '                                                  </div>' +

        '                                </div>' +
        '                            </div>' +
        '                        </div>');
    innerDetails(element);
    applyMasked();
}

function iDetails(element, ourCompanies, customers, formPays) {

    let optionOurCompany = $('.ourCompany');
    let optionCustomers = $('.customer');
    let optionExpenses = $('.expenses-add');
    let optionFormPay = $('.formPay');


    optionOurCompany.append('<option value="' + element.ourCompany.id + '">' + element.ourCompany.name + '</option>')
    optionCustomers.append('<option value="' + element.customer.id + '">' + element.customer.name + '</option>')
    optionFormPay.append('<option value="' + element.paymentForm.id + '">' + element.paymentForm.name + '</option>')

    for (let i = 0; i < formPays.length; i++) {
        if (formPays[i].id !== element.paymentForm.id) {
            optionFormPay.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
        }
    }
    for (let i = 0; i < ourCompanies.length; i++) {
        if (ourCompanies[i].id !== element.ourCompany.id) {
            optionOurCompany.append('<option value="' + ourCompanies[i].id + '">' + ourCompanies[i].name + '</option>')
        }
    }

    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id !== element.customer.id) {
            optionCustomers.append('<option value="' + customers[i].id + '">' + customers[i].name + '</option>')
        }
    }
    for (let i = 0; i < element.expenses.length; i++) {
        optionExpenses.append(
            '<div class="form-group row">' +
            '     <label class="col-sm-3 col-form-label">Расходы</label>' +
            '     <div class="col-sm-3">' +
            '         <input value="' + element.expenses[i].expenditure + '" text="' + element.expenses[i].expenditure + '" type="number" name="expenditure[]" class="form-control form-details" placeholder="Расходы (руб.)"  disabled>' +
            '     </div>' +
            '     <label class="col-sm-3 col-form-label">Комментарий</label>' +
            '     <div class="col-sm-3">' +
            '         <input value="' + element.expenses[i].comment + '" text="' + element.expenses[i].comment + '" type="text" name="commentEx[]" class="form-control form-details" placeholder="Комментарий"  disabled>' +
            '     </div>' +
            '</div>'
        );
    }
}

function iNew(ourCompanies, customers, formPays) {
    let optionOurCompany = $('.ourCompany');
    let optionCustomers = $('.customer');
    let optionFormPay = $('.formPay');

    for (let i = 0; i < formPays.length; i++) {
        optionFormPay.append('<option value="' + formPays[i].id + '">' + formPays[i].name + '</option>')
    }

    for (let i = 0; i < ourCompanies.length; i++) {
        optionOurCompany.append('<option value="' + ourCompanies[i].id + '">' + ourCompanies[i].name + '</option>')
    }
    for (let i = 0; i < customers.length; i++) {
        optionCustomers.append('<option value="' + customers[i].id + '">' + customers[i].name + '</option>')
    }
}

function newUpd() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('                            ' +
        '<div class="card animate__animated animate__fadeIn animate__fast">' +
        '<div class="card-body">' +
        '    <h4 class="card-title">Новое УПД</h4>' +
        '    <p class="card-title-desc">Добавьте новое УПД.</p>' +
        '    <form id="form-input" action="/book" method="post">' +
        '        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '           <div class="col-sm-9">' +
        '                <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany" >' +
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
        '            <label class="col-sm-3 col-form-label">№ УПД</label>' +
        '            <div class="col-sm-9">' +
        '                <input modelAttribute="bookUpd" type="number" name="enumerate" class="form-control form-details" placeholder="№" >' +
        '            </div>' +
        '        </div>' +
        '        <div class="form-group row">' +
        '            <label class="col-sm-3 col-form-label">Вид работ</label>' +
        '            <div class="col-sm-9">' +
        '                <input modelAttribute="bookUpd" type="text" name="workType" class="form-control form-details" placeholder="Вид работ" >' +
        '            </div>' +
        '        </div>' + '                                    ' +
        '        <div class="form-group row">' +
        '             <label class="col-sm-3 col-form-label">Стоимость</label>' +
        '             <div class="col-sm-9">' +
        '                 <input modelAttribute="bookUpd" type="number" name="amount" class="form-control form-details" placeholder="Стоимость (руб.)" >' +
        '             </div>' +
        '         </div>' +

        '         <div class="form-group row">' +
        '             <label class="col-sm-3 col-form-label">Расходы</label>' +
        '             <div class="col-sm-3">' +
        '                 <input type="number" name="expenditure[]" class="form-control form-details" placeholder="Расходы (руб.)" >' +
        '             </div>' +
        '             <label class="col-sm-2 col-form-label">Комментарий</label>' +
        '             <div class="col-sm-4">' +
        '                 <input type="text" name="commentEx[]" class="form-control form-details" placeholder="Комментарий" >' +
        '             </div>' +
        '          </div>' +
        '          <div class="expense-add"></div>' +
        '          <div class="form-group row">' +
        '              <label class="col-sm-3 col-form-label"></label>' +
        '              <div class="col-sm-5">' +
        '                 <button type="button" class="btn btn-primary btn-sm btn-cargo-add" onclick="expenseAdd()"><i class="mdi mdi-plus-circle"></i></button>' +
        '              </div>' +
        '          </div>' +
        '          <div class="form-group row">' +
        '              <label class="col-sm-3 col-form-label">Форма оплаты</label>' +
        '              <div class="col-sm-9">' +
        '               <select id="formPay" name="formPay" class="form-control form-details formPay" required>' +
        '               </select>' +
        '             </div>' +
        '          </div>' +
        '           <div class="form-group row">' +
        '                <label class="col-sm-3 col-form-label">Выставлено</label>' +
        '                <div class="col-sm-9">' +
        '                    <input modelAttribute="bookUpd" type="text" name="exposedDate" class="form-control form-details inpDate" placeholder="" >' +
        '                </div>' +
        '            </div>' +
        '           <div class="form-group row">' +
        '                <label class="col-sm-3 col-form-label">Прибыль</label>' +
        '                <div class="col-sm-9">' +
        '                    <input modelAttribute="bookUpd" type="number" name="signedDate" class="form-control form-details inpDate" placeholder="" >' +
        '                </div>' +
        '            </div>' +
        '           <div class="form-group row">' +
        '                <label class="col-sm-3 col-form-label">Оплачено</label>' +
        '                <div class="col-sm-9">' +
        '                    <input modelAttribute="bookUpd" type="text" name="paidDate" class="form-control form-details inpDate" placeholder="" >' +
        '                </div>' +
        '            </div>' +
        '            <div class="row">' +
        '                <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '            </div>' +
        '        </form>' +
        '    </div>' +
        '</div>');
    innerNew();
    applyMasked();
}

function expenseAdd() {
    $('.expense-add').append(
        '<div class="form-group row">' +
        '    <label class="col-sm-3 col-form-label">Расходы</label>' +
        '    <div class="col-sm-3">' +
        '        <input type="number" name="expenditure[]" class="form-control form-details" placeholder="Расходы (руб.)" >' +
        '    </div>' +
        '    <label class="col-sm-2 col-form-label">Комментарий</label>' +
        '    <div class="col-sm-4">' +
        '        <input type="text" name="commentEx[]" class="form-control form-details" placeholder="Комментарий" >' +
        '    </div>' +
        '</div>')
}