import { observable, computed, action } from 'mobx'

class RootStore {
    @observable user = {
		id: "1",
        name: "TestUser_1"
	};
}
export default new RootStore();