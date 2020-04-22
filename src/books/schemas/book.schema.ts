import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    }
  },
)