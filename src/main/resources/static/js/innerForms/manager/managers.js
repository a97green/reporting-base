function details(element) {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('<div class="card animate__animated animate__fadeIn animate__fast">\n' +
        '                            <div class="card-body">\n' +
        '                                <h4 class="card-title">Карточка менеджрера</h4>\n' +
        '                                <form action="/manager/save/' + element.id + '" method="post">\n' +
        '                                    <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
        '                                    <div class="form-group row">\n' +
        '                                        <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
        '                                        <div class="col-sm-9">\n' +
        '                                            <input modelAttribute="manager" value="' + element.lastName + '" text="' + element.lastName + '" type="text" name="lastName" class="form-control form-details" placeholder="Фамилия" required disabled>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="form-group row">\n' +
        '                                        <label class="col-sm-3 col-form-label">Имя</label>\n' +
        '                                        <div class="col-sm-9">\n' +
        '                                            <input modelAttribute="manager" value="' + element.firstName + '" text="' + element.firstName + '" type="text" name="firstName" class="form-control form-details" placeholder="Имя" required disabled>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' + '                                    <div class="form-group row">\n' +
        '                                        <label class="col-sm-3 col-form-label">Отчество</label>\n' +
        '                                        <div class="col-sm-9">\n' +
        '                                            <input modelAttribute="manager" value="' + element.patronymic + '" text="' + element.patronymic + '" type="text" name="patronymic" class="form-control form-details" placeholder="Отчество" required disabled>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                   <div class="form-group row buttons-save" style="display: none">\n' +
        '                                       <button type="submit" class="btn btn-primary waves-effect mr-1"><i class="mdi mdi-content-save-outline mr-1"></i>Сохранить</button>\n' +
        '                                       <button type="button" id="btn-cancel" class="btn btn-dark waves-effect" onclick="hideButtonsSave()"><i class="mdi mdi-cancel mr-1"></i>Отмена</button>\n' +
        '                                   </div>\n' +
        '                                </form>\n' +
        '                                <div class="form-group row buttons-edit">\n' +
        '                                   <button type="button" id="btn-edit" class="btn btn-primary waves-effect mr-1" onclick="showButtonsSave()"><i class="mdi mdi-file-document-edit-outline mr-1"></i>Редактировать</button>\n' +
        '                                   <form action="/manager/remove/' + element.id + '" method="post">\n' +
        '                                       <button type="submit" class="btn btn-danger waves-effect"><i class="mdi mdi mdi-delete-circle-outline mr-1"></i>Удалить</button>\n' +
        '                                   </form>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>');
}

function newManager() {
    let innerBlock = $('.inner-block');
    innerBlock.empty();
    innerBlock.append('                            <div class="card animate__animated animate__fadeIn animate__fast">\n' +
        '                                <div class="card-body">\n' +
        '                                    <h4 class="card-title">Новый менеджер</h4>\n' +
        '                                    <p class="card-title-desc">Добавьте нового менеджера.</p>\n' +
        '                                    <form id="form-input" action="/manager" method="post">\n' +
        '                                        <h5 class="card-title text-center border-top"><br>Основная информация<br></h5>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Фамилия</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input modelAttribute="manager" type="text" name="lastName" class="form-control" placeholder="Фамилия" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Имя</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input modelAttribute="manager" type="text" name="firstName" class="form-control" placeholder="Имя" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="form-group row">\n' +
        '                                            <label class="col-sm-3 col-form-label">Отчество</label>\n' +
        '                                            <div class="col-sm-9">\n' +
        '                                                <input modelAttribute="manager" type="text" name="patronymic" class="form-control" placeholder="Отчество" required="">\n' +
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
