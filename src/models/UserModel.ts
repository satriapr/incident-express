import { IUser } from '../types/UserType'
import { model, Schema } from 'mongoose'

const userSchema: Schema = new Schema<IUser>(
  {
    fullName: String,
    role: String,
    email: String,
    password: String,
    active: Number,
  },
  { collection: 'user', timestamps: true }
)

export default model<IUser>('User', userSchema)
