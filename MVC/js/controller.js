export default class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }

    init(){
        let userList = this.model.getData();
        this.view.renderTable(userList);
        this.initListeners();
    }

    initListeners(){
        this.view.table.addEventListener("click", this.getElement.bind(this));
        this.view.updateButton.addEventListener("click", this.updateClick.bind(this));
        this.view.createButton.addEventListener("click", this.createClick.bind(this));
    }

    updateClick(){
          let id = this.view.updateView.getAttribute("data-id");
          let editedObj = this.view.getNewUserInfo();
          this.model.editUser(id, editedObj);
          this.view.removeShowAddHide(this.view.updateView);
          this.view.renderTable(this.model.getUsersData);
          this.view.removeHideAddShow(this.view.usersListView); 
    }
    
    createClick(){
        this.view.removeShowAddHide(this.view.createView);
        let createdObj = this.view.createNewUserInfo();
        this.model.pushNewUser(createdObj);
        this.view.renderTable(this.model.getUsersData);
        this.view.removeHideAddShow(this.view.usersListView);
    }

    getElement(event){
        let target = event.target;
        let id = target.id;
        if(target.getAttribute("data-info") == "delete"){
            this.model.deleteUser(parseInt(id));
            this.view.renderTable(this.model.getUsersData);
        }
        if(target.getAttribute("data-info") == "update"){
            this.view.updateUserView.innerHTML = this.view.addingUpdateView(this.model.getSpecificUser(parseInt(id)));
            this.view.removeShowAddHide(this.view.usersListView);
            this.view.removeHideAddShow(this.view.updateView);
            this.view.updateView.setAttribute("data-id", parseInt(id));
        }
        if(id == "create"){
            this.view.createUserView.innerHTML = this.view.addingCreateView();
            this.view.removeShowAddHide(this.view.usersListView);
            this.view.removeHideAddShow(this.view.createView);
        }
    }

}
