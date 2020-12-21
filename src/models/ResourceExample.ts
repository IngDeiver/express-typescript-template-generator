import mongoose, { Model, Schema } from 'mongoose';
import { IResourceExample } from '../interfaces';

const TaskSchema: Schema<IResourceExample> = new Schema({
  title: { type: String, required: true },
});

const ResourceExample: Model<IResourceExample> = mongoose.model('Task', TaskSchema);
export default ResourceExample;
