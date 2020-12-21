import { Document } from 'mongoose';

interface IResourceExample extends Document{
    title: { type: String, required: true }
}
export default IResourceExample;
