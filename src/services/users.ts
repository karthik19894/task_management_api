import User from "../models/User";

class UserService {
    static async isUserExists(id: string) {
        const isUserExist = await User
            .findOne({ id })
            .then(res => { console.log(res); return Boolean(res); })
            .catch(() => console.log("Error in isUserExists"))
        return isUserExist;
    }

    static create(name: string, id: string) {
        const user = new User({ name, id });
        return user.save();
    }
}

export default UserService;
