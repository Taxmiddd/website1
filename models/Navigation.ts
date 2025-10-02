import mongoose from "mongoose";

const NavigationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Main Menu",
    },
    items: [
      {
        id: String,
        label: String,
        url: String,
        icon: String,
        openInNewTab: {
          type: Boolean,
          default: false,
        },
        order: Number,
        children: [
          {
            id: String,
            label: String,
            url: String,
            icon: String,
            openInNewTab: Boolean,
          },
        ],
      },
    ],
    settings: {
      position: {
        type: String,
        enum: ["top", "left", "right"],
        default: "top",
      },
      sticky: {
        type: Boolean,
        default: true,
      },
      showLogo: {
        type: Boolean,
        default: true,
      },
      logoUrl: String,
      backgroundColor: String,
      textColor: String,
      hoverColor: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Navigation ||
  mongoose.model("Navigation", NavigationSchema);
