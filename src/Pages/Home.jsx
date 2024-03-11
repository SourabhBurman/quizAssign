import { Button, FormControl, FormHelperText, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
// import { fetchQuiz } from '../Redux/action';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quiz,setQuiz] = useState({name:"",category:"",difficulty:"",amount:""});
    async function quizData() {
        try{
            let res = await axios.get(`https://opentdb.com/api.php?amount=${quiz.amount}&category=${quiz.category}&difficulty=${quiz.difficulty}&type=multiple`)
            console.log(res.data.results);
            dispatch({type:"Data_FETCH",payload:{data:res.data.results,name:quiz.name}})
            navigate('/quiz')
        } catch(err) {
        console.log(err)
        }
    }
  
    return (
        <><Heading>Quiz App</Heading>   
            <FormControl w="50%" m={"auto"} mt={"20px"} border={"solid 1px"} p={"2%"} borderRadius={"10px"}>
                <FormLabel>Username</FormLabel>
                <Input type='email' placeholder={"Enter your name"} onChange={(e)=>setQuiz({...quiz,name:e.target.value})}/>
                <FormLabel mt={"20px"}>Category</FormLabel>
                <Select placeholder='Select category' onChange={(e)=>setQuiz({...quiz,category:e.target.value})}>
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                </Select>
                <FormLabel mt={"20px"}>Difficulty</FormLabel>
                <Select placeholder='Select Difficulty Level' onChange={(e)=>setQuiz({...quiz,difficulty:e.target.value})}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </Select>
                <FormLabel mt={"20px"}>Number of question</FormLabel>
                <Input type='text' placeholder={"Enter Number of question"}  onChange={(e)=>setQuiz({...quiz,amount:e.target.value})}/>
                <Button colorScheme='blue' onClick={quizData} mt={"40px"}>Button</Button>
            </FormControl>
            </>
    )
}

export default Home