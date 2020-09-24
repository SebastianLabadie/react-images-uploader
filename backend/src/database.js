const mongoose = require("mongoose");

const URI = "mongodb://localhost/reactimgupload";

async function main() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is conected");
  } catch (error) {
    console.log(error);
  }
}

main()