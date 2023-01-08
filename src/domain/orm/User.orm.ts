import { userEntity } from "../entities/User.entity";

import { LogError, LogSuccess } from '../../utils/logger'

export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity()
        return await userModel.find({isDelete: false})
    }
    catch(err) {
        LogError(`[ORM ERROR]: Getting All Users ${err}`)
        
    }
}

// TODO
// getUserById
// getUserByEmail
// deleteUserById
// createNewUser
// updateUserById