//gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

// Select the database to use.
https: use("acme");

db.posts.insert({
  title: "Post one",
  body: "Post one body text",
  category: "News",
  lkes: 123,
  tags: ["News", "Events"],
  user: {
    name: "Mario",
    status: "Active",
  },
  date: Date(),
});

db.posts.insertMany([
  {
    title: "Post Two",
    body: "Body of post two",
    category: "Technology",
    date: Date(),
  },
  {
    title: "Post Three",
    body: "Body of post three",
    category: "News",
    date: Date(),
  },
  {
    title: "Post Four",
    body: "Body of post three",
    category: "Entertainment",
    date: Date(),
  },
]);

// find
db.posts.find({ category: "News" });

// sort asc
db.posts.find().sort({ title: 1 }).pretty();
// sort desc
db.posts.find().sort({ title: -1 }).pretty();

// count
db.posts.find().count();
db.posts.find({ category: "news" }).count();

// limit
db.posts.find().limit(2).pretty();

// chaning
db.posts.find().limit(2).sort({ title: 1 }).pretty();

// forEach
db.posts.find().forEach(doc => print("Blog Post: " + doc.title));

// findOne
db.posts.findOne({ category: "News" });

// find
db.posts.find(
  { title: "Post One" },
  {
    title: 1,
    author: 1,
  }
);

// update
db.posts.update(
  { title: "Post Two" },
  {
    title: "Post Two",
    body: "New body for post 2",
    date: Date(),
  },
  {
    upsert: true,
  }
);
