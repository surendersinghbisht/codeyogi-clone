import React from 'react';
import LectureList from './LectureList';
import AssignmentList from './AssignmentList'
import AssignmentDescription from './AssignmentDiscription';
import QuizPage from './QuizPage';
import {Navigate ,BrowserRouter ,Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import NotFound from './NotFound';
import Profile from './Profile'
import StudentList from './StudentList';

function App() {
  return (
    
<BrowserRouter>
    <div className='flex'>

    <Routes>
      <Route path="/" element={<Navigate to="lectures"/>} />
      <Route path="/" element={<MainLayout />}>
    <Route path="assignments" element={<AssignmentList/>}/>
    <Route path="assignments/:id/description" element={<AssignmentDescription /> } />
    <Route path="lectures" element={<LectureList/>}/>
    <Route path="profile" element={<Profile />}></Route>
    <Route path="students" element={<StudentList />}></Route>
    </Route>
<Route path="Quiz" element={<QuizPage/>}/>
<Route path="*"element={<NotFound />} />
    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;