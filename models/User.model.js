const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
     username: {
       type: String,
       required: [true, 'Please enter username']
     }, 
     email: {
      type: String,
      required: [true, 'Please enter email']
    },
     passwordHash: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
userSchema.index({ 'email': 1}, {unique: true});
userSchema.index({ 'username': 1}, {unique: true});
 module.exports = model('User', userSchema);
