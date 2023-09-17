import { UserModel } from "../models/index.model";


interface UserInterface
{
    getAll(): Promise<Array<Object>>,

    getById( id: Object ): Promise<Object | null>,

    getByOne( data: Object ): Promise<Object | null>, 

    getByOneWithSelect(data: Object, selectData: Array<string>): Promise<Object | null>,

    getBy( data: Object ): Promise<Object | null>, 

}

/**
 * user's repository all method connect with db
 *
 * @class UserRepository
 * @implements {UserInterface}
 */
class UserRepository implements UserInterface
{
    constructor(){}
    
    /**
     * Get all users
     * 
     * @returns array 
     */
    public async getAll ()
    {
        return await UserModel.find();
    }


    /**
     * Get user by Id
     * 
     * @param id string
     * @returns Object | null
     */
    public async getById(id: Object)
    {
        return await UserModel.findById(id);
    }


    /**
     * Get by data
     * 
     * @param data Object
     * @returns Object | null
     */
    public async getBy(data: Object)
    {
        return await UserModel.find(data)
    }


    /**
     * Get by data
     * 
     * @param data Object
     * @returns Object | null
     */
    public async getByOne(data: Object)
    {
        return await UserModel.findOne(data)
    }


    /**
     * Get by data
     * 
     * @param data Object
     * @param selectData Array
     *
     * @returns Object | null
     */
    public async getByOneWithSelect(data: Object, selectData: Array<string>)
    {
        return await UserModel.findOne(data).select(selectData);
    }
 
}

export { UserRepository }