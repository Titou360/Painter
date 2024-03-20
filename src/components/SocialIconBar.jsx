import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './Icon';

const SocialIconBar = () => {
  return (
    <div className="flex flex-row">
      <motion.a
        tabIndex="0"
        aria-label="Join us on Twitter"
        href="#"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 mx-3 fill-white dark:fill-painterDark hover:fill-painterOrange dark:hover:fill-painterOrange"
      >
        <TwitterIcon />
      </motion.a>
      <motion.a
        tabIndex="0"
        aria-label="Join us on Facebook"
        href="#"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 mx-3 fill-white dark:fill-painterDark hover:fill-painterOrange dark:hover:fill-painterOrange"
      >
        <FacebookIcon />
      </motion.a>{' '}
      <motion.a
        tabIndex="0"
        aria-label="Join us on Instagram"
        href="#"
        target="_blank"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-8 mx-3 fill-white dark:fill-painterDark hover:fill-painterOrange dark:hover:fill-painterOrange"
      >
        <InstagramIcon />
      </motion.a>
    </div>
  );
};

export default SocialIconBar;
