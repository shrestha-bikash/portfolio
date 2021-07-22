import './about.css'
import * as Unicons from '@iconscout/react-unicons';

export default function AboutSection() {
    return (
        <div className="about section" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about__container">
                <div className="about__img">
                    <img src="https://avatars.githubusercontent.com/u/10379970?v=4" alt=""/>
                </div>
                
                <div className="about_description">
                    {/* <h2 class="about__subtitle">I am Bikash</h2> */}
                    <p className="about__text">Graduate Research Assistant with a history of working in the field of deep learning. Skilled in Python, Javascript, React, Web Development, Android Development, and Linux. Strong education professional with a Bachelor's degree focused in Computer Engineering and 3+ years of experience as a software engineer.</p>           
                    <div className="about_info">
                        <div className="about_info_box">
                            <span className="about_info_title">03+ </span>
                            <span className="about_info_name">Years <br/> Experience</span>
                        </div>
                        <div className="about_info_box">
                            <span className="about_info_title">10+ </span>
                            <span className="about_info_name">Projects <br/> Completed</span>
                        </div>
                        <div className="about_info_box">
                            <span className="about_info_title">03 </span>
                            <span className="about_info_name">Companies <br/> Worked</span>
                        </div>
                    </div>

                    <div className="about_btn">
                        <a href="assets/Resume.pdf" className="button button--flex" download="Resume.pdf">
                            Download Resume <i className='button_icon' ><Unicons.UilDownloadAlt/></i>
                        </a>
                    </div>
                </div>                                   
            </div>
        </div>
    )
}