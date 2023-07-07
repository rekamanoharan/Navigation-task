import React from "react";
import { useParams } from "react-router-dom";

export default function Cyber() {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div class="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png"
       referrerPolicy="no-referrer"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              Cybersecurity Vs Ethical Hacking: Top 10 Differences
            </h5>
            <p class="card-text">
              Cybersecurity & Ethical hacking and have been key in making sure
              that your data online
            </p>
            <a href="#" className="link">
              READ MORE »
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
              referrerPolicy="no-referrer"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              What is Cybersecurity? Importance and its uses & the growing
              challenges in 2023!
            </h5>
            <p class="card-text">
              Look around today, you will witness that we are more reliant on
              technology and devices
            </p>
            <a href="#" className="link">
              READ MORE »
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png"
            referrerPolicy="no-referrer"
              class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              Top 10 Ethical Hacking Books for Beginner to Advanced
            </h5>
            <p class="card-text">
              Did you know that according to the University of Maryland hackers
              attack every 39 seconds
            </p>
            <a href="#" className="link">
              READ MORE »
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
