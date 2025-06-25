import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FeedbackDetail = () => {
  const { id } = useParams(); // get feedbackId from URL
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    const fetchFeedback = async () => {
      try {
        const res = await axios.get(`https://feedback-backend-6gh5.onrender.com/api/admin/feedback/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFeedback(res.data);
      } catch (err) {
        setError("❌ Feedback not found or fetch failed");
      }
    };

    fetchFeedback();
  }, [id, token, navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Feedback Detail</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!feedback ? (
        <p>Loading...</p>
      ) : (
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <p><strong>Name:</strong> {feedback.name}</p>
          <p><strong>Email:</strong> {feedback.email}</p>
          <p><strong>Message:</strong> {feedback.message}</p>
          <p><strong>Rating:</strong> {feedback.rating} ⭐</p>
          <p><strong>Submitted At:</strong> {new Date(feedback.createdAt).toLocaleString()}</p>
          <br />
          <button onClick={() => navigate("/admin/feedbacks")}>🔙 Back to List</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackDetail;
