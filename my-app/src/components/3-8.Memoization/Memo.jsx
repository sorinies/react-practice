import React, {useState, useEffect} from 'react'
import Comments from './Comments';

const CommentList = [
  {id: 0, title: "title1", content: "comment1", likes: 0},
  {id: 1, title: "title2", content: "comment2", likes: 1},
  {id: 2, title: "title3", content: "comment3", likes: 2},
  {id: 3, title: "title4", content: "comment4", likes: 3},
  {id: 4, title: "title5", content: "comment5", likes: 4}
]

export default function Memo() {
  const [comments, setComments] = useState(CommentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: `${prevComments.length + 1}`, 
          title: `title${prevComments.length + 1}`, 
          content: `comment${prevComments.length + 1}`, 
          likes: `${prevComments.length + 1}`
        }
      ])
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Comments commentList={comments} />
  )
}
