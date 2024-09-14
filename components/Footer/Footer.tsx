import { FC } from "react";
import s from "./Footer.module.css";

const Footer: FC = () => (
  <footer className={s.footer}>
    <span className={s.footerItem}>Borhan Uddin</span>
    <span className={s.footerItem}>{new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
