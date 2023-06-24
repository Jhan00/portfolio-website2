import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target='__blank' href='https://www.linkedin.com/in/jhan-diaz-abad-026008210/'>
              <BsLinkedin />
            </a>
        </div>
        <div>
          <a href='https://github.com/JhanInDev' target='__blank'>
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia