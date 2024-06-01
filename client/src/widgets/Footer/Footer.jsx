import cls from './Footer.module.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Tooltip} from "@mui/material";

const Footer = () => {
    return (
        <div className={`${cls.Footer} container`}>
            <h4 className={cls.title}>© 2024 Copyright, All Right Reserved, Made by Ilya Yugai with
                <FavoriteIcon/>
            </h4>
            <div className={cls.LinksSocial}>
                <Tooltip title="Twiter" placement="top">
                    <a href="https://x.com/"><TwitterIcon/></a>
                </Tooltip>
                <Tooltip title="Facebook" placement="top">
                    <a href="https://www.facebook.com/"><FacebookIcon/></a>
                </Tooltip>
                <Tooltip title="Instagram" placement="top">
                    <a href="https://www.instagram.com/"><InstagramIcon/></a>
                </Tooltip>
                <Tooltip title="LinkedIn" placement="top">
                    <a href="https://www.linkedin.com"><LinkedInIcon/></a>
                </Tooltip>
            </div>
        </div>
    );
};

export default Footer;