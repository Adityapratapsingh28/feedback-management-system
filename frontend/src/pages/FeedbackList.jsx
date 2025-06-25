import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Redirect if not logged in
    if (!token) {
      navigate("/admin");
      return;
    }

    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/admin/feedback", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFeedbacks(res.data);
      } catch (err) {
        setError("❌ Failed to fetch feedbacks");
      }
    };

    fetchFeedbacks();
  }, [token, navigate]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/admin/feedback/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update list
      setFeedbacks(feedbacks.filter((f) => f._id !== id));
    } catch (err) {
      alert("❌ Failed to delete");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Feedbacks</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <ul>
          {feedbacks.map((f) => (
            <li key={f._id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
              <p><strong>Name:</strong> {f.name}</p>
              <p><strong>Email:</strong> {f.email}</p>
              <p><strong>Message:</strong> {f.message}</p>
              <p><strong>Rating:</strong> {f.rating}</p>
              <button onClick={() => navigate(`/admin/feedback/${f._id}`)}>View</button>
              &nbsp;
              <button onClick={() => handleDelete(f._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
