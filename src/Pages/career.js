import React from "react";
import { useParams } from "react-router-dom";

export default function Career() {
  const params = useParams();

  return (
    <div>
    <div style={{"display":"flex"}}>
  <div class="card">
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Business-Analyst-An-Insight-into-Their-Life.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Business Analyst – An Insight into Their Life</h5>
    <p class="card-text">Have you ever wondered how business tends to maintain everything in proper order despite having</p>
    <a href="#" className="link">READ MORE »</a>
  </div>
</div>
<div class="card">
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Business-Analyst-Interview-Questions-With-Answers-1.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Top 15 Business Analyst Interview Questions With Answers</h5>
    <p class="card-text">Business Analyst is a dream role for many but cracking the interview round is a</p>
    <a href="https://www.guvi.in/blog/business-analyst-interview-questions-with-answers/" className="link">READ MORE »</a>
  </div>
</div>
<div class="card">
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/06/UIUX_GD.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Graphic Designer vs. UI/UX Designer: Key Differences You Should Know</h5>
    <p class="card-text">It has always been confusing for people to understand the key differences between Graphic designers</p>
    <a href="#" className="link">READ MORE »</a>
  </div>
</div>
</div>
</div>
  );
}
