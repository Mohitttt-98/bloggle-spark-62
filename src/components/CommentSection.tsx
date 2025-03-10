
import React, { useState } from "react";
import { MessageCircle, Send, User, ThumbsUp, ThumbsDown, Reply, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "../hooks/use-toast";

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
  replies: Reply[];
}

export interface Reply {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
  dislikes: number;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name and comment",
        variant: "destructive",
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName.trim(),
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      replies: [],
    };

    setComments([...comments, comment]);
    setNewComment("");
    toast({
      title: "Comment added",
      description: "Your comment has been added successfully",
    });
  };

  const handleAddReply = (commentId: string) => {
    if (!replyContent.trim() || !authorName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name and reply",
        variant: "destructive",
      });
      return;
    }

    const reply: Reply = {
      id: Date.now().toString(),
      author: authorName.trim(),
      content: replyContent.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
    };

    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, reply],
          };
        }
        return comment;
      })
    );

    setReplyingTo(null);
    setReplyContent("");
    toast({
      title: "Reply added",
      description: "Your reply has been added successfully",
    });
  };

  const handleLike = (id: string, isReply = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === id) {
                  return { ...reply, likes: reply.likes + 1 };
                }
                return reply;
              }),
            };
          }
          return comment;
        })
      );
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === id) {
            return { ...comment, likes: comment.likes + 1 };
          }
          return comment;
        })
      );
    }
  };

  const handleDislike = (id: string, isReply = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === id) {
                  return { ...reply, dislikes: reply.dislikes + 1 };
                }
                return reply;
              }),
            };
          }
          return comment;
        })
      );
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === id) {
            return { ...comment, dislikes: comment.dislikes + 1 };
          }
          return comment;
        })
      );
    }
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
    toast({
      title: "Comment deleted",
      description: "Your comment has been deleted",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="mt-16 py-8 border-t border-border">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <MessageCircle className="h-6 w-6" />
        Comments {comments.length > 0 && `(${comments.length})`}
      </h2>

      {/* New Comment Form */}
      <div className="mb-8 bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-4">Leave a comment</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="author-name">Your Name</Label>
            <Input
              id="author-name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="comment-content">Comment</Label>
            <Textarea
              id="comment-content"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="mt-1 min-h-[100px]"
            />
          </div>
          <Button 
            onClick={handleAddComment}
            className="flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            Post Comment
          </Button>
        </div>
      </div>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border border-border rounded-lg overflow-hidden">
              <div className="p-4 bg-muted/30">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{comment.author}</h4>
                      <p className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-2">
                  <p className="text-foreground">{comment.content}</p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <button 
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {comment.likes}
                  </button>
                  <button 
                    onClick={() => handleDislike(comment.id)}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    {comment.dislikes}
                  </button>
                  <button 
                    onClick={() => setReplyingTo(comment.id)}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    Reply
                  </button>
                </div>
              </div>

              {/* Reply Form */}
              {replyingTo === comment.id && (
                <div className="p-4 bg-card border-t border-border">
                  <h5 className="font-medium text-sm mb-2">Replying to {comment.author}</h5>
                  <div className="space-y-3">
                    <Textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write your reply..."
                      className="min-h-[80px]"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleAddReply(comment.id)}>
                        Reply
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="bg-background border-t border-border">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="p-4 border-b border-border last:border-b-0 pl-8">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="bg-secondary/20 p-1.5 rounded-full">
                            <User className="h-4 w-4 text-foreground" />
                          </div>
                          <div>
                            <h5 className="font-medium text-sm">{reply.author}</h5>
                            <p className="text-xs text-muted-foreground">{formatDate(reply.createdAt)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-foreground">{reply.content}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-4">
                        <button 
                          onClick={() => handleLike(reply.id, true, comment.id)}
                          className="flex items-center text-xs text-muted-foreground hover:text-primary"
                        >
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {reply.likes}
                        </button>
                        <button 
                          onClick={() => handleDislike(reply.id, true, comment.id)}
                          className="flex items-center text-xs text-muted-foreground hover:text-primary"
                        >
                          <ThumbsDown className="h-3 w-3 mr-1" />
                          {reply.dislikes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-muted/20 rounded-lg border border-dashed border-border">
          <MessageCircle className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <h3 className="text-lg font-medium text-foreground">No comments yet</h3>
          <p className="text-muted-foreground mt-1">Be the first to share your thoughts on this post</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
