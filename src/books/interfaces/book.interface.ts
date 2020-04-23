import { Document } from 'mongoose';

export interface Book extends Document {
  readonly blogpost: number;
  readonly title: string;
  readonly author: string;
  readonly published: {
    readonly publisher: string;
    readonly year: number;
  }
}