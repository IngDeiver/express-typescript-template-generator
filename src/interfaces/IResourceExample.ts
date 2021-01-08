import { Document } from 'mongoose';

/**
 * Define a interface of resource to managament with mongoose
 * @category Interfaces
 * @interface IResourceExample
 * @extends {Document}
 */
interface IResourceExample extends Document{
    property: { type: String, required: true }
}
export default IResourceExample;
