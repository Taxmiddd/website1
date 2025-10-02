const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function seedAdmin() {
  try {
    console.log("\n🚀 IGACMUN Admin Setup\n");
    console.log("This will create your first admin account.\n");

    // Get MongoDB URI
    const mongoUri =
      process.env.MONGODB_URI ||
      (await question("Enter your MongoDB URI: "));

    if (!mongoUri) {
      console.error("❌ MongoDB URI is required!");
      process.exit(1);
    }

    // Connect to MongoDB
    console.log("\n📡 Connecting to MongoDB...");
    await mongoose.connect(mongoUri);
    console.log("✅ Connected to MongoDB\n");

    // Define Admin Schema (inline for script)
    const AdminSchema = new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, default: "superadmin" },
      isActive: { type: Boolean, default: true },
      lastLogin: Date,
    }, { timestamps: true });

    const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

    // Get admin details
    const username = await question("Enter admin username: ");
    const email = await question("Enter admin email: ");
    const password = await question("Enter admin password (min 8 characters): ");

    if (!username || !email || !password) {
      console.error("\n❌ All fields are required!");
      process.exit(1);
    }

    if (password.length < 8) {
      console.error("\n❌ Password must be at least 8 characters!");
      process.exit(1);
    }

    // Check if admin exists
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { email }],
    });

    if (existingAdmin) {
      console.error("\n❌ Admin with this username or email already exists!");
      process.exit(1);
    }

    // Hash password
    console.log("\n🔐 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    console.log("👤 Creating admin account...");
    const admin = await Admin.create({
      username,
      email,
      password: hashedPassword,
      role: "superadmin",
    });

    console.log("\n✅ Admin account created successfully!\n");
    console.log("📋 Admin Details:");
    console.log(`   Username: ${admin.username}`);
    console.log(`   Email: ${admin.email}`);
    console.log(`   Role: ${admin.role}`);
    console.log(`\n🎉 You can now login at: http://localhost:3000/admin/login\n`);

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

seedAdmin();
