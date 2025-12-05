import mongoose, { Schema, Model } from 'mongoose';

export interface IGuestMessage {
  name: string;
  message: string;
  willAttend: string;
  attendWith: string;
  guestOf: string;
  createdAt: Date;
}

const GuestMessageSchema = new Schema<IGuestMessage>(
  {
    name: {
      type: String,
      required: [true, 'Vui lòng nhập tên của bạn'],
      trim: true,
      maxlength: [100, 'Tên không được vượt quá 100 ký tự'],
    },
    message: {
      type: String,
      required: [true, 'Vui lòng nhập lời nhắn'],
      trim: true,
      maxlength: [500, 'Lời nhắn không được vượt quá 500 ký tự'],
    },
    willAttend: {
      type: String,
      enum: ['', 'Mình chắc chắn sẽ đến', 'Xin lỗi mình bận rồi!'],
      default: '',
    },
    attendWith: {
      type: String,
      enum: ['', '1 người', '2 người', '3 người', '4 người'],
      default: '',
    },
    guestOf: {
      type: String,
      enum: ['', 'Khách mời cô dâu', 'Khách mời chú rể'],
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const GuestMessage: Model<IGuestMessage> =
  mongoose.models.GuestMessage || mongoose.model<IGuestMessage>('GuestMessage', GuestMessageSchema);

export default GuestMessage;

