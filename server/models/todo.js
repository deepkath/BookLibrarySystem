import mongoose from 'mongoose';

const TODOSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    priority: Number
});

const TODOModel = mongoose.model('Todo', TODOSchema);

export default TODOModel;