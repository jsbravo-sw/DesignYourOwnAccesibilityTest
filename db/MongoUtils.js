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
    let url =
      "mongodb+srv://admin:M3hVhCjfL25Znr4@cluster0-v8tg7.mongodb.net/test?retryWrites=true&w=majority";
    if (user === undefined) {
      // url = process.env.MONGODB_URI;
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

  mu.getAllTests = () => {
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("test")
        .find()
        .skip(1)
        .limit(15)
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

  mu.newAnswer = (answer) => {
    return mu.connect().then((client) => {
      console.log(client);
      client
        .db(dbName)
        .collection("testans")
        .insertOne(answer)
        .catch((err) => console.log(err))
        .finally(() => client.close());
    });
  };

  mu.getAllTestsUser = (id) => {
    const query = { user: id };
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("test")
        .find(query)
        .limit(15)
        .toArray()
        .finally(() => client.close())
    );
  };

  mu.getAllAnswersTest = (id) => {
    const query = { test: id };
    return mu.connect().then((client) =>
      client
        .db(dbName)
        .collection("testans")
        .find(query)
        .limit(15)
        .toArray()
        .finally(() => client.close())
    );
  };

  return mu;
}
const mu = MongoUtils();
module.exports = mu;
