import mongoose, { Model, Schema } from 'mongoose';
import { IResourceExample } from '../interfaces';

const ResourceExampleSchema: Schema<IResourceExample> = new Schema({
  property: { type: String, required: true },
});

const ResourceExample: Model<IResourceExample> = mongoose.model('ResourceExample', ResourceExampleSchema);
export default ResourceExample;
