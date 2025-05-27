const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  cpf:{type:Number, required: true, unique: true},
  password: { type: String, required: true },
  userType:{type:String, require:true, enum:['professor', 'aluno', 'admin']}

  
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);