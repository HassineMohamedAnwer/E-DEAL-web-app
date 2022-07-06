import React from 'react';
import logo_ from '../screenimgs/logo.png'

const Footer = () => {
  return (
   <footer>
      <div class="footer-g" ><img class='logoimg' src={logo_}/>


<p class="footer-links">
  <a href="#" class="link-1">Home</a>

  <a href="#">Blog</a>

  <a href="#">Pricing</a>

  <a href="#">About</a>

  <a href="#">Faq</a>

  <a href="#">Contact</a>
</p>

<p class="footer-company-name">E-DEAL © 2022</p>
</div>

<div class="footer-c">

<div>
  <i class="fa fa-map-marker"></i>
  <p><span>Rue du Lac Biwa, Tunis</span></p>
</div>

<div>
  <i class="fa fa-phone"></i>
  <p>55716577</p>
  <p>25142433</p>
</div>

<div>
  <i class="fa fa-envelope"></i>
  <p><a href="mailto:support@company.com">Holberton School</a></p>
</div>

</div>

<div class="footer-d">

<p class="footer-company-about">
  <span>About the company</span>
  Lorem ipsum dolor sit amet, consectateur adispicing elit.
</p>

<div class="footer-icons">

  <a href="#"><i class="fa fa-facebook"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-github"></i></a>

</div>

</div>
   </footer>
  )
}

export default Footer