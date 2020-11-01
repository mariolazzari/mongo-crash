//gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

// Select the database to use.
https: use("acme");

db.posts.insert({
  title: "Post One",
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

// update (remove othr fileds)
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

// update fields (no remove)
db.posts.update(
  {
    title: "Post Two",
  },
  {
    $set: {
      category: "Technology",
      likes: 1,
    },
  }
);

// increment
db.posts.update(
  { title: "Post Two" },
  {
    $inc: {
      likes: 5,
    },
  }
);

// rename
db.posts.update(
  { title: "Post Two" },
  {
    $rename: {
      likes: "views",
    },
  }
);

// delete documant
db.posts.remove({ title: "Post Four" });

// sub documents
db.posts.update(
  { title: "Post One" },
  {
    $set: {
      comments: [
        {
          body: "Comment One",
          user: "Mary Williams",
          date: Date(),
        },
        {
          body: "Comment Two",
          user: "Harry White",
          date: Date(),
        },
      ],
    },
  }
);

// find element in array
db.posts.find({
  comments: {
    $elemMatch: {
      user: "Mary Williams",
    },
  },
});

// create index
db.posts.createIndex({ title: "text" });

// text search
db.posts.find({
  $text: {
    $search: '"Post O"',
  },
});

// range
db.posts.find({ views: { $gt: 2 } });
db.posts.find({ views: { $gte: 7 } });
db.posts.find({ views: { $lt: 7 } });
db.posts.find({ views: { $lte: 7 } });
