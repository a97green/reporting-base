function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">' +
        '                            <div class="card-body">' +
        '                                <h4 class="card-title">Карточка УПД</h4>' +
        '                                <form action="/book" method="post">' +
        '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '                                            <input modelAttribute="bookUpd" value="' + element.id + '" type="text" name="id" class="form-control form-details" placeholder="" required disabled style="display:none;">' +
        '                         <div class="form-group row">' +
        '                             <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                             <div class="col-sm-9">' +
        '                                 <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany" required disabled>' +
        '                                 </select>' +
        '                             </div>' +
        '                         </div>' +
        '                         <div class="form-group row">' +
        '                             <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '                             <div class="col-sm-9">' +
        '                                 <select id="customer" name="customer" class="form-control form-details customer" required disabled>' +
        '                                 </select>' +
        '                             </div>' +
        '                         </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">№ УПД</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.enumerate + '" text="' + element.enumerate + '" type="text" name="enumerate" class="form-control form-details" placeholder="№" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Вид работ</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.workType + '" text="' + element.workType + '" type="text" name="workType" class="form-control form-details" placeholder="Вид работ" required disabled>' +
        '                                        </div>' +
        '                                    </div>' + '                                    ' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Стоимость без ндс</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.amount + '" text="' + element.amount + '" type="number" name="amount" class="form-control form-details" placeholder="Стоимость (руб.)" required disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Расходы</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.expenditure + '" text="' + element.expenditure + '" type="number" name="expenditure" class="form-control form-details" placeholder="Расходы (руб.)"  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Согласовано</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.agreedDate + '" text="' + element.agreedDate + '" type="date" name="agreedDate" class="form-control form-details" placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Выставлено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.exposedDate + '" text="' + element.exposedDate + '" type="date" name="exposedDate" class="form-control form-details" placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Подписано/Получено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.signedDate + '" text="' + element.signedDate + '" type="date" name="signedDate" class="form-control form-details" placeholder=""  disabled>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Оплачено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" value="' + element.paidDate + '" text="' + element.paidDate + '" type="date" name="paidDate" class="form-control form-details" placeholder=""  disabled>' +
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
        '                                        <form target="_blank" action="/print/book/' + element.id + '" method="get">' +
        '                                            <button type="submit" class="btn btn-secondary ml-5"> Печать Акта</button>\n' +
        '                                        </form>' +
        '                                </div>' +
        '                            </div>' +
        '                        </div>');
    innerDetails(element);

}

function iDetails(element, ourCompanies, customers) {

    let optionOurCompany = $('.ourCompany');
    let optionCustomers = $('.customer');

    optionOurCompany.append('<option value="' + element.ourCompany.id + '">' + element.ourCompany.name + '</option>')
    optionCustomers.append('<option value="' + element.customer.id + '">' + element.customer.name + '</option>')

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
}

function iNew(ourCompanies, customers) {
    let optionOurCompany = $('.ourCompany');
    let optionCustomers = $('.customer');


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
    innerBlock.append('                            <div class="card animate__animated animate__fadeIn animate__fast">' +
        '                                <div class="card-body">' +
        '                                    <h4 class="card-title">Новое УПД</h4>' +
        '                                    <p class="card-title-desc">Добавьте новое УПД.</p>' +
        '                                    <form id="form-input" action="/book" method="post">' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>' +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Наша компания</label>' +
        '                                                   <div class="col-sm-9">' +
        '                                                        <select id="ourCompany" name="ourCompany" class="form-control form-details ourCompany" required>' +
        '                                                           <option></option>' +
        '                                                        </select>' +
        '                                                   </div>' +
        '                                                </div>' +
        '                                                <div class="form-group row">' +
        '                                                    <label class="col-sm-3 col-form-label">Заказчик</label>' +
        '                                                    <div class="col-sm-9">' +
        '                                                        <select id="customer" name="customer" class="form-control form-details customer" required>' +
        '                                                           <option></option>' +
        '                                                        </select>' +
        '                                                    </div>' +
        '                                                </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">№ УПД</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="text" name="enumerate" class="form-control form-details" placeholder="№" required>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                    <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Вид работ</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="text" name="workType" class="form-control form-details" placeholder="Вид работ" required>' +
        '                                        </div>' +
        '                                    </div>' + '                                    ' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Стоимость без ндс</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="number" name="amount" class="form-control form-details" placeholder="Стоимость (руб.)" required>' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Расходы</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="number" name="expenditure" class="form-control form-details" placeholder="Расходы (руб.)" >' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Согласовано</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="date" name="agreedDate" class="form-control form-details" placeholder="" >' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Выставлено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="date" name="exposedDate" class="form-control form-details" placeholder="" >' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Подписано/Получено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="date" name="signedDate" class="form-control form-details" placeholder="" >' +
        '                                        </div>' +
        '                                    </div>' +
        '                                   <div class="form-group row">' +
        '                                        <label class="col-sm-3 col-form-label">Оплачено</label>' +
        '                                        <div class="col-sm-9">' +
        '                                            <input modelAttribute="bookUpd" type="date" name="paidDate" class="form-control form-details" placeholder="" >' +
        '                                        </div>' +
        '                                    </div>' +

        '                                        <div class="row">' +
        '                                            <button type="submit" th:id="btn-load" class="btn btn-primary waves-effect"><i class="mdi mdi-check mr-1"></i>Добавить</button>' +
        '                                        </div>' +
        '                                    </form>' +
        '                                </div>' +
        '                            </div>');
    innerNew();
}
