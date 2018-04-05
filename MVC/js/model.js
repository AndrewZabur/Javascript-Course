export default class Model{
    constructor(){
        this.url = "https://gist.githubusercontent.com/AndrewZabur/4df10746a64fcf658df88723aefa0a84/raw/e4adc819ca7a54a2301b15ea6c231dfcfc5ea08a/CRUD.json";
        this.usersData = [];
    }

    get getUsersData(){
        return this.usersData;
    }

    getSpecificUser(id){
        return this.usersData[id];
    }

    getData(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, false);
        xhr.send();
        if (xhr.status === 200) {
            this.usersData = JSON.parse(xhr.responseText);
        } 
        return this.usersData;  
    }

    deleteUser(id){
        this.usersData.splice(id, 1);
    }   

    editUser(id, editedUser){
        this.usersData[id].first_name = editedUser.name;
        this.usersData[id].last_name = editedUser.surname;
        this.usersData[id].email = editedUser.email;
        this.usersData[id].city = editedUser.city;
        this.usersData[id].company = editedUser.company;
    }

    pushNewUser(createdUser){
        let id;
        if(this.usersData.length === 0){
            id = 0;
        } else{
            id = Number(this.usersData[this.usersData.length-1].id);
        }

        let newUser = {
            id: id + 1,
            first_name: createdUser.name,
            last_name: createdUser.surname,
            email: createdUser.email,
            city: createdUser.city,
            company: createdUser.company
        };
        this.usersData.push(newUser);
    }
}
