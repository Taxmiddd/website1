import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    // Page content as JSON blocks
    blocks: [
      {
        id: String,
        type: String, // heading, paragraph, image, button, grid, flex, etc.
        content: mongoose.Schema.Types.Mixed,
        styles: {
          background: String,
          padding: String,
          margin: String,
          textAlign: String,
          fontSize: String,
          fontFamily: String,
          fontWeight: String,
          color: String,
          borderRadius: String,
          border: String,
          width: String,
          height: String,
          display: String,
          flexDirection: String,
          justifyContent: String,
          alignItems: String,
          gridColumns: String,
          gap: String,
        },
        children: [mongoose.Schema.Types.Mixed],
      },
    ],
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      ogImage: String,
    },
    isPublished: {
      type: Boolean,
      default: false,
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

export default mongoose.models.Page || mongoose.model("Page", PageSchema);
