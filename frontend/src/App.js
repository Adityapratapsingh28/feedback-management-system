import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import AdminLogin from './pages/AdminLogin';
import FeedbackList from './pages/FeedbackList';
import FeedbackDetail from './pages/FeedbackDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/feedbacks" element={<FeedbackList />} />
        <Route path="/admin/feedback/:id" element={<FeedbackDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
