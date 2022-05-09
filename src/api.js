import axios from "axios";


const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";


export const getStudents = async() => {
try{
const response = await axios.get(RandomUser_Base_Url + '?results=9');
const student= response.data.results;
return student;
} catch(e){
   handleError;
}
};


  

const handleError=()=>{
    console.log('error',e);
}