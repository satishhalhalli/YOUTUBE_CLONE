import React from 'react'


const dummycomment = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  }
]

const Comment=({data})=>{
  const{name, text} = data;
  return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-md my-2'>
      <img className="w-12 h-12" src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user'/>
      <div className='px-3'>
       <p className='font-bold'>{name}</p>
       <p>{text}</p>
      </div>
    </div>
  )
}


const CommentList=({ comments }) => {
  return comments.map((comment, index) => (
    <div>
    <Comment key={index} data={comment}/>
    <div className="pl-5 border border-l-black ml-5">
       <CommentList comments={comment.replies}/>
      </div>
      </div>
  ))
}
const Comments = () => {

 
  return (
    <div className='m-5 p-2 w-900'>
     <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={dummycomment} />
    </div>
  )
}

export default Comments
