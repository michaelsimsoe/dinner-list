import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    recipe: String,
    price: Number,
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
);

// dishSchema.index({ list: 1, name: 1 }, { unique: true })

export const Dish = mongoose.model('dish', dishSchema);
