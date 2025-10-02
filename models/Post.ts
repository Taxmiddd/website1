import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
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
    excerpt: {
      type: String,
    },
    content: {
      type: String, // Rich text HTML
    },
    featuredImage: {
      url: String,
      publicId: String,
      alt: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    category: {
      type: String,
      default: "Uncategorized",
    },
    tags: [String],
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
    },
    views: {
      type: Number,
      default: 0,
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      ogImage: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
