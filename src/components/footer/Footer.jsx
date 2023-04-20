import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footer_title}>
        <h2>WAVES GYM</h2>

        <p>
          Our mission is to build a community that empowers our clients to
          become a better version of themselves with every session
        </p>

        <div>
          <ImFacebook2 className={style.icons} />
          <BsLinkedin className={style.icons} />
          <ImWhatsapp className={style.icons} />
          <ImYoutube className={style.icons} />
        </div>
      </div>

      <div className={style.footer_content}>
        <ul>
          <Link>Home</Link>
          <Link>About </Link>
          <Link>Program</Link>
          <Link>Training </Link>
          <Link>Pricing </Link>
        </ul>
        <ul>
          <Link>Our Team</Link>
          <Link>Careers</Link>
          <Link>Testimonials</Link>
          <Link>Work Culture</Link>
          <Link>Blogs</Link>
        </ul>
        <ul>
          <Link>Press Room</Link>
          <Link>Events</Link>
          <Link>Amazing Offers</Link>
          <Link>Group Program</Link>
          <Link>Gallery</Link>
        </ul>
      </div>
    </div>
  );
}
