import {observable} from 'mobx';
import menuStore from './menu-store';
import userStore from './users-store';

export default new class Stores {
    @observable menuStore = menuStore;
    @observable userStore = userStore;
}()