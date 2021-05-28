import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import profilePic from '../static/profile-pic.JPG'

function Home() {


    return (
        <div class="body-content">
           <div>
                <img
                    width={200}
                    height={200}
                    src={profilePic}
                    alt="profile pic" 
                />
            </div>
            

            <p style={{marginTop: '25px'}}>
                Hi, I'm Steve. I love writing code.
            </p>
            <p style={{marginTop: '25px'}}>
                Check out my Github and Linkedin below.
            </p>

            <div>
                <a href="https://github.com/DataDeveloper7865" >
                    <GithubOutlined style={{marginRight: '50px', fontSize: '200%', color: 'black'}}/>
                </a>
                <a href="https://www.linkedin.com/in/stephen-whelan-gne/">
                    <LinkedinOutlined style={{ fontSize: '200%', color: 'black'}}/>
                </a>

            </div>
        </div>
    ) 
}

export default Home;