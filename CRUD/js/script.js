(function(){
  let info = [];
  let url = "https://gist.githubusercontent.com/AndrewZabur/4df10746a64fcf658df88723aefa0a84/raw/01049c44299c18ddc6df6995ca6abfb2164a4760/CRUD.json";
  let tableBody = document.getElementById("user-list");
  let tableInfo = document.getElementById("info-table");
  let updateInfo = document.getElementById("update-view");
  let mainInfo = document.getElementById("main-view");
  let backButton = document.getElementById("back-btn");
  let updateUserAdd = document.getElementById("details-items");
  let createInfo = document.getElementById("create-view");
  let createUserAdd = document.getElementById("create-items");
  let addButton = document.getElementById("add-btn");
function addToTheTable(element, i){
  return `<tr>   
            <td>${element.id}</td>
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element.email}</td>
            <td>${element.city}</td>
            <td>${element.company}</td>
            <td><button class="btn btn-primary" data-info="update" id="${i}">Редактировать</button></td>
            <td><button class="btn btn-primary" data-info="delete" id="${i}">Удалить</button></td>
          </tr>`;
}

function updateUser(element){
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

function createUser(){
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

function drawTable(data){
  let table = "";
  data.forEach(function(element, i){
    table += addToTheTable(element, i);
  });
  tableBody.innerHTML = table;
}

function initListeners(){
  tableInfo.addEventListener("click", getElement);
  backButton.addEventListener("click", backClick);
  addButton.addEventListener("click", addClick);
}

function backClick(){
  if(updateInfo.getAttribute("data-id") != undefined){
    let id = updateInfo.getAttribute("data-id");
    info[id].first_name = document.getElementById("firstName").value;
    info[id].last_name = document.getElementById("lastName").value;
    info[id].email = document.getElementById("email").value;
    info[id].city = document.getElementById("city").value;
    info[id].company = document.getElementById("company").value;
    updateInfo.classList.remove("show");
    updateInfo.classList.add("hide");
    drawTable(info);
    mainInfo.classList.remove("hide");
    mainInfo.classList.add("show");
  } 
}

function addClick(){
    createInfo.classList.remove("show");
    createInfo.classList.add("hide");
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("emailId").value;
    let city = document.getElementById("town").value;
    let company = document.getElementById("companyId").value;
    let id = Number(info[info.length-1].id);
    let newUser = {
      id: id + 1,
      first_name: name,
      last_name: surname,
      email: email,
      city: city,
      company: company
    };
    info.push(newUser);
    drawTable(info);
    mainInfo.classList.remove("hide");
    mainInfo.classList.add("show");
  
}

function getElement(event){
  let target = event.target;
  if(target.getAttribute("data-info") == "delete"){
    let id = target.id;
    info.splice(id, 1);
    drawTable(info);
  }
  if(target.getAttribute("data-info") == "update"){
    let id = target.id;
    updateUserAdd.innerHTML = updateUser(info[id]);
    mainInfo.classList.remove("show");
    mainInfo.classList.add("hide");
    updateInfo.classList.remove("hide");
    updateInfo.classList.add("show");
    updateInfo.setAttribute("data-id", id);
  }
  if(target.id == "create"){
    createUserAdd.innerHTML = createUser();
    mainInfo.classList.remove("show");
    mainInfo.classList.add("hide");
    createInfo.classList.remove("hide");
    createInfo.classList.add("show");
  }

}

  function initialisation(){
    fetch(url)
      .then(function(response) {
        if(response.status == 200){
          return response.json();
        }  
      })
      .then(function(data) {
        info = data.slice();
        drawTable(info);
        initListeners();
      })            
  }

  initialisation();  
}());

