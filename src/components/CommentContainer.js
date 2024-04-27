import React from "react";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { OpenComment } from "../utils/appSlice";

const commentsData = [
  {
    name: "shree1",
    text: "lorem 123654",
    replies: [
      {
        name: "shree1",
        text: "lorem 123654",
        replies: [
          {
            name: "shree1",
            text: "lorem 123654",
            replies: [
              {
                name: "shree1",
                text: "lorem 123654",
                replies: [
                  {
                    name: "shree1",
                    text: "lorem 123654",
                    replies: [
                      {
                        name: "shree1",
                        text: "lorem 123654",
                        replies: [
                          {
                            name: "shree1",
                            text: "lorem 123654",
                            replies: [
                              {
                                name: "shree1",
                                text: "lorem 123654",
                                replies: [],
                              },
                              {
                                name: "shree2",
                                text: "lorem 123654",
                                replies: [],
                              },
                              {
                                name: "shree3",
                                text: "lorem 123654",
                                replies: [],
                              },
                            ],
                          },
                          {
                            name: "shree2",
                            text: "lorem 123654",
                            replies: [],
                          },
                          {
                            name: "shree3",
                            text: "lorem 123654",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "shree2",
                        text: "lorem 123654",
                        replies: [],
                      },
                      {
                        name: "shree3",
                        text: "lorem 123654",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "shree2",
                    text: "lorem 123654",
                    replies: [],
                  },
                  {
                    name: "shree3",
                    text: "lorem 123654",
                    replies: [],
                  },
                ],
              },
              {
                name: "shree2",
                text: "lorem 123654",
                replies: [],
              },
              {
                name: "shree3",
                text: "lorem 123654",
                replies: [],
              },
            ],
          },
          {
            name: "shree2",
            text: "lorem 123654",
            replies: [],
          },
          {
            name: "shree3",
            text: "lorem 123654",
            replies: [],
          },
        ],
      },
      {
        name: "shree2",
        text: "lorem 123654",
        replies: [],
      },
      {
        name: "shree3",
        text: "lorem 123654",
        replies: [],
      },
      {
        name: "shree4",
        text: "lorem 123654",
        replies: [],
      },
    ],
  },
  {
    name: "shree2",
    text: "lorem 123654",
    replies: [
      {
        name: "shree1",
        text: "lorem 123654",
        replies: [],
      },
      {
        name: "shree2",
        text: "lorem 123654",
        replies: [],
      },
      {
        name: "shree3",
        text: "lorem 123654",
        replies: [],
      },
      {
        name: "shree4",
        text: "lorem 123654",
        replies: [],
      },
    ],
  },
  {
    name: "shree3",
    text: "lorem 123654",
    replies: [],
  },
  {
    name: "shree4",
    text: "lorem 123654",
    replies: [],
  },
  {
    name: "shree1",
    text: "lorem 123654",
    replies: [],
  },
  {
    name: "shree2",
    text: "lorem 123654",
    replies: [],
  },
  {
    name: "shree3",
    text: "lorem 123654",
    replies: [],
  },
  {
    name: "shree4",
    text: "lorem 123654",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  const dispatch = useDispatch();

  const commentOpen = () => {
    dispatch(OpenComment());
  };

  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-2 border border-l-black md:ml-3">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="md:m-5 md:p-2 cursor-pointer sm:w-full">
      <h1 className="text-2xl font-bold " onClick={() =>OpenComment()}>
        Comments:
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
