import { action, computed, observable } from 'mobx'

class RootStore {
    @observable public user = {
        id: '1',
        name: 'TestUser_1'
    }
}
export default new RootStore()
