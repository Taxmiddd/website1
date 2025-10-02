import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      enum: ["about", "features", "faq", "custom"],
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    icon: {
      type: String,
    },
    image: {
      type: String,
    },
    imagePublicId: {
      type: String,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    metadata: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Content ||
  mongoose.model("Content", ContentSchema);
