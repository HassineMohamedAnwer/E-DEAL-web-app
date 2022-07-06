import React from "react";
import __me from '../screenimgs/me.jpg'
import __insta from '../screenimgs/insta.jpg'
import __git from '../screenimgs/git.png'
import __fb from '../screenimgs/Facebook.png'
import __gm from '../screenimgs/gmail.png'
import __link from '../screenimgs/link.png'
const AboutUsScreen = () => {
  return (
    <>
      
      <div class="row abimgs">
        <div class="containers col-lg-6 col-md-6">
          <div class="pic">
          <img class="uss" src = {__me}></img>
          </div>

          <div class="box1">
          <a href = "https://www.instagram.com/aziz_dali_1/" target="_blank"><img class="inst" src = {__insta}></img> </a>
          </div>
          <div class="box2">
          <a href = ''></a><img class="git" src = {__git}></img>
          </div>
          <div class="box3">
          <img class="fb" src = {__fb}></img>
          </div>
          <div class="box4">
          <img class="gm" src = {__gm}></img>
          </div>
          <div class="box5">
          <img class="link" src = {__link}></img>
          </div>


        </div>
        ------------------

      </div>
    </>
  );
};
export default AboutUsScreen;
