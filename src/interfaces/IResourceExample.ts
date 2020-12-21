import { Document } from 'mongoose';

interface IResourceExample extends Document{
    property: { type: String, required: true }
}
export default IResourceExample;
