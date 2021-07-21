import './skills.css'
import * as Unicons from '@iconscout/react-unicons';

export default function SkillSection() {
    return (
        <div className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                    
            <div className="skills__container">
                <div className="skills-left">
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilHtml5 className="skills_icon"/></i>
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div className="skills__bar">

                        </div>
                        {/* <div>
                            <span className="skills__percentage">95%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilCss3Simple className="skills_icon"/></i>
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">85%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilJavaScript className="skills_icon"/></i>
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">65%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilReact className="skills_icon"/></i>
                            <span className="skills__name">React</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">85%</span>
                        </div> */}
                    </div>
                </div>
                <div className="skills-right">
                <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilHtml5 className="skills_icon"/></i>
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div className="skills__bar">

                        </div>
                        {/* <div>
                            <span className="skills__percentage">95%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilCss3Simple className="skills_icon"/></i>
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">85%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilJavaScript className="skills_icon"/></i>
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">65%</span>
                        </div> */}
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='skills__icon' ><Unicons.UilReact className="skills_icon"/></i>
                            <span className="skills__name">React</span>
                        </div>
                        <div className="skills__bar">
                            
                        </div>
                        {/* <div>
                            <span className="skills__percentage">85%</span>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}