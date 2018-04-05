export default class View{
    constructor(){
        this.usersList = document.getElementById("user-list");
        this.table = document.getElementById("info-table");
        this.updateView = document.getElementById("update-info");
        this.createView = document.getElementById("create-info");
        this.usersListView = document.getElementById("users-info");
        this.updateButton = document.getElementById("update-btn");
        this.createButton = document.getElementById("create-btn");
        this.updateUserView = document.getElementById("update-user-info");
        this.createUserView = document.getElementById("create-user-info");
    }

    getNewUserInfo(){
        let edit = {
            name: document.getElementById("firstName").value,
            surname: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            city: document.getElementById("city").value,
            company: document.getElementById("company").value
        }
        return edit;
    }

    createNewUserInfo(){
        let create = {
            name: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            email: document.getElementById("emailId").value,
            city: document.getElementById("town").value,
            company: document.getElementById("companyId").value
        }
        return create;
    }

    renderTable(data){
        let table = "";
        data.forEach((element, i) => {
            table += this.addRow(element, i);
        });
        this.usersList.innerHTML = table;
    }

    removeHideAddShow(element){
        element.classList.remove("hide");
        element.classList.add("show");
    }

    removeShowAddHide(element){
        element.classList.remove("show");
        element.classList.add("hide");
    }

    addRow(element, i){
        return `<tr>   
                    <td>${element.id}</td>
                    <td>${element.first_name}</td>
                    <td>${element.last_name}</td>
                    <td>${element.email}</td>
                    <td>${element.city}</td>
                    <td>${element.company}</td>
                    <td><button class="btn btn-primary" data-info="update" id="${i}update">Редактировать</button></td>
                    <td><button class="btn btn-danger" data-info="delete" id="${i}delete">Удалить</button></td>
                </tr>`;
    }

    addingUpdateView(element){
        return `<form>
                    <div class="form-group row">
                        <label for="firstName" class="col-md-2 col-form-label">Имя</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="firstName" value="${element.first_name}" name="firstName" placeholder="Имя" autocomplete="off">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastName" class="col-md-2 col-form-label">Фамилия</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="lastName" value="${element.last_name}" name="lastName"  placeholder="Фамилия">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-2 col-form-label">Електронний адрес</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="email" value="${element.email}" name="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="city" class="col-md-2 col-form-label">Город</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="city" value="${element.city}" name="city" placeholder="Город">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="company" class="col-md-2 col-form-label">Компания</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="company" value="${element.company}" name="company" placeholder="Компания">
                        </div>
                    </div>
                </form>`;
    }

    addingCreateView(){
        return `<form>
                    <div class="form-group row">
                        <label for="name" class="col-md-2 col-form-label">Имя</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Имя" autocomplete="off">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="surname" class="col-md-2 col-form-label">Фамилия</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="surname"  name="surname"  placeholder="Фамилия">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="emailId" class="col-md-2 col-form-label">Електронний адрес</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="emailId"  name="emailId" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="town" class="col-md-2 col-form-label">Город</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="town"  name="town" placeholder="Город">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="companyId" class="col-md-2 col-form-label">Компания</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control" id="companyId"  name="companyId" placeholder="Компания">
                        </div>
                    </div>
                </form>`;
    }
}