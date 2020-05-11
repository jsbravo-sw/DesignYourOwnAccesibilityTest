const MongoClient = require("mongodb").MongoClient;

//Connect to mongo
function MongoUtils() {
  const mu = {};

  let hostname = "localhost",
    port = 27017,
    dbName = "testing";
  const user = process.env.MONGO_USER,
    pwd = process.env.MONGO_PWD;

  mu.connect = () => {
    console.log("Trying to connect to mongoutils");
    let url = `mongodb://${hostname}:${port}`;
    if (user === undefined) {
      url = process.env.MONGODB_URI;
    } else {
      url = `mongodb://${user}:${pwd}@${hostname}:${port}`;
    }
    console.log(url);
    const cliente = new MongoClient(
      url,
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    );
    console.log("Connected");
    return cliente.connect();
  };

  mu.newFavor = (favor) => {
    console.log(favor);
    return mu.connect().then((client) => {
      console.log(client);
      client
        .db(dbName)
        .collection("favors")
        .insertOne(favor)
        .catch((err) => console.log(err))
        .finally(() => client.close());
    });
  };

  mu.getAllTests = () => {
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("test")
        .find()
        .skip(1)
        .limit(10)
        .toArray()
        .finally(() => client.close())
    );
  };

  mu.getBaseTest = () => {
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("test")
        .find()
        .limit(1)
        .toArray()
        .finally(() => client.close())
    );
  };

  mu.newTest = (test) => {
    console.log(test);
    return mu.connect().then((client) => {
      console.log(client);
      client
        .db(dbName)
        .collection("test")
        .insertOne(test)
        .catch((err) => console.log(err))
        .finally(() => client.close());
    });
  };

  return mu;
}
const mu = MongoUtils();
module.exports = mu;
