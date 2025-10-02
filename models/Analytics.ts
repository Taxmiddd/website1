import mongoose from "mongoose";

const AnalyticsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      index: true,
    },
    pageViews: {
      type: Number,
      default: 0,
    },
    uniqueVisitors: {
      type: Number,
      default: 0,
    },
    registrations: {
      type: Number,
      default: 0,
    },
    topPages: [
      {
        path: String,
        views: Number,
      },
    ],
    devices: {
      mobile: { type: Number, default: 0 },
      desktop: { type: Number, default: 0 },
      tablet: { type: Number, default: 0 },
    },
    referrers: [
      {
        source: String,
        count: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Index for faster date-based queries
AnalyticsSchema.index({ date: -1 });

export default mongoose.models.Analytics ||
  mongoose.model("Analytics", AnalyticsSchema);
