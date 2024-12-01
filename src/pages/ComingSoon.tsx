import "./ComingSoon.css";

const ComingSoon = () => {

  return (
    <div className="coming-soon-container">
      <div className="content">
        <h1 className="title">Coming Soon</h1>
        <p className="subtitle">We're working hard to bring you something amazing. Stay tuned!</p>
        <form className="email-form">
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email to stay updated"
            required
          />
          <button type="submit" className="notify-button">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
