import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema(
  {
    blogpost: {
      type: Number,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      publisher: {
        type: String,
        trim: true,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
  },
)
