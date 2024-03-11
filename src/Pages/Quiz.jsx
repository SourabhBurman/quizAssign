import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Quiz = () => {
    const {name,quizDate} = useSelector(st=>st)
   const [questions, setQuestions] = useState(quizDate);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  console.log(score);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

     const handleAnswer = (answer) => {
        if(currentQuestion==quizDate.length-1) {
            localStorage.setItem('scoreData',JSON.stringify({name,score}))
            navigate("/leaderboard")
        }
     const isCorrect = answer === questions[currentQuestion].correct_answer;
     if (isCorrect) {
       setScore(score + 1);
     }
     setCurrentQuestion(currentQuestion + 1)
   };

   const handleSubmitQuiz = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };
   if (questions.length === 0) {
     return <Text>No questions found.</Text>;
   }

   const currentQuestionData = questions[currentQuestion];
   const { question, correct_answer, incorrect_answers } = currentQuestionData;
   const totalQuestions = quizDate.length;
   const percentage = (score / totalQuestions) * 100;
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p="4" m={"auto"} mt={"100px"}>
      <Text fontSize="xl">Question : {question}</Text>
      {incorrect_answers.map((answer, index) => (
        <Button display={"block"} w={"100%"} mt={"10px"} key={index} variant="outline" colorScheme="blue" onClick={() => handleAnswer(answer)}>
          {answer}
        </Button>
      ))}
      <Button display={"block"} w={"100%"} mt={"10px"} variant="outline" colorScheme="blue" onClick={() => handleAnswer(correct_answer)}>
          {correct_answer}
        </Button>
      {currentQuestion === questions.length - 1 ? (
        <Button mt={4} colorScheme="blue" w={"100%"} onClick={handleSubmitQuiz}>
          Submit
        </Button>
      ) : (
        
          <Button mt={4} colorScheme="blue" w={"100%"} onClick={()=>setCurrentQuestion(currentQuestion+1)}>
            skip
          </Button>
      )}
</Box>
  )
}

export default Quiz
