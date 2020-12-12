import mongoose from 'mongoose';

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    description: String,
    startDate: Date,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'dish' }]
  },
  { timestamps: true }
);

listSchema.index({ user: 1, name: 1 }, { unique: true });

export const List = mongoose.model('list', listSchema);
