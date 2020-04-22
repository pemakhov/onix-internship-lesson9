import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://dbUser:VEGw6D3wP642Zcum@cluster0-adcsk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

async function run() {
  try {
      await client.connect();
      console.log("Connected correctly to server");

  } catch (err) {
      console.log(err.stack);
  }
  finally {
      await client.close();
  }
}

run().catch(console.dir);