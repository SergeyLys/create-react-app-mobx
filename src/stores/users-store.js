import {observable, action, autorun} from 'mobx';

class Users {
    @observable user = observable.map();

    constructor(userData = {}) {
        this.user.merge(userData);
    }
}

class UserStore {
    @observable users;

    constructor() {
        this.users = [];
        this.fetch();
    }

    fetch() {
        fetch('https://randomuser.me/api/?results=10', { method: 'GET' })
            .then(res => res.json())
            .then(json => this.putUsers(json));
    }

    putUsers(users) {
        let userArray = [];

        users.results.forEach(user => {
            userArray.push(user);
        });
        
        this.users = userArray;
    }

    getUsers() {
        return this.users;
    }
}

const userStore = new UserStore();

export default userStore;