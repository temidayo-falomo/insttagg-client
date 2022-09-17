import React from "react";
import { Link } from "react-router-dom";
import { StyledLoginIssue } from "./LoginIssue.styled";

function LoginIssue() {
  return (
    <StyledLoginIssue>
      <div className="issue-nav row btw">
        <Link to="/login" className="logo">
          <img src="./assets/ig.svg" alt="" />
        </Link>

        <Link to="/anonymous">
          <button>Login Anonymously</button>
        </Link>
      </div>
      <article className="blog-container">
        <div className="rect">
          <div className="bar">
            <h3>Apologies.</h3>
          </div>

          <p>
            If you're having issues logging in to @Itnstagg, i'm truly sorry.
            Its wayyyy more dissapointing for me as the Developer, believe me.
          </p>
        </div>

        <div className="rect">
          <div className="bar">
            <h3>Alternatives.</h3>
          </div>

          <p>
            I have created an <Link to="/anonymous">Anonymous Login</Link>, so
            you too can experience the website, albeit at an anonymous level,{" "}
            <Link to="/anonymous">Here It Is . </Link>
            To make it work especially on IOS(Safari disables cookies by
            default). Go to settings, then Safari, then togggle off "Block all
            cookies". This site uses web Cookies to keep users logged in, and
            i'm too cheap to buy a domain name, FOR NOW 👀.
          </p>
        </div>

        <div className="rect">
          <div className="bar">
            <h3>Previous Work.</h3>
          </div>

          <p>
            Feel free to check out some of my previous work on my portfolio
            website @{" "}
            <a
              href="https://temidayo-falomo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              temidayo's porfolio
            </a>
          </p>
        </div>

        <div className="rect">
          <div className="bar">
            <h3>Next Project</h3>
          </div>
          <p>
            I'm building a whatsapp clone next, i'll make sure not to use cookie
            based login this time(Because IOS).
          </p>
        </div>
      </article>
    </StyledLoginIssue>
  );
}

export default LoginIssue;
