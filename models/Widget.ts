import mongoose from "mongoose";

const WidgetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "contact-form",
        "newsletter",
        "social-media",
        "recent-posts",
        "gallery",
        "testimonials",
        "countdown",
        "stats",
        "map",
        "custom-html",
      ],
    },
    settings: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
    },
    position: {
      type: String,
      enum: ["header", "footer", "sidebar", "content"],
      default: "content",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Widget ||
  mongoose.model("Widget", WidgetSchema);
