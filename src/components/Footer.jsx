import React from "react";
import "../css/footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container row flex justify-evenly">
          <div class="footer-col">
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/prakhar-singh-51591a228"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
            <h4><a
                href="https://www.linkedin.com/in/prakhar-singh-51591a228"
                target="_blank"
              >LinkedIn</a></h4>
          </div>
          <div class="footer-col">
            <div class="social-links">
              <a href="https://twitter.com/Prakhar07732001" target="_blank">
                <GitHubIcon />
              </a>
            </div>
            <h4><a href="https://twitter.com/Prakhar07732001" target="_blank">Github</a></h4>
          </div>
          <div className="footer-col">
            <div class="social-links">
              <a
                href="https://www.instagram.com/prakhardeoria.2004/"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
            <h4><a
                href="https://www.instagram.com/prakhardeoria.2004/"
                target="_blank"
              >Instagram</a></h4>
          </div>

          <div class="footer-col">
            <div class="social-links">
              <a href="https://twitter.com/Prakhar07732001" target="_blank">
                <XIcon />
              </a>
            </div>
            <h4> <a href="https://twitter.com/Prakhar07732001" target="_blank">Twitter</a></h4>
          </div>
        </div>
        <div className="text-white flex justify-center mt-6">
          Copyright &copy; 2024, All right reserverd
          <p className="text-yellow-400 ml-2 font-bold">Prakhar</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
