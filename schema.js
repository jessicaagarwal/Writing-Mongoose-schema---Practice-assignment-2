const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  }
});

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  },
  author: {
    type: String,
  },
  tags: {
    type: [String],
    default: []
  },
  category: {
    type: String,
    default: 'General'
  },
  likes: {
    type: [String],
    default: []
  },
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
