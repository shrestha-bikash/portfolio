import "./qualification.css"
import * as Unicons from '@iconscout/react-unicons';

export default function QualificationSection() {
    return (
        <div className="qualification-section section" id="qualification">
            <h2 class="section-title">Qualification</h2>

            <div className="qualification__container container">
                <div className="qualification_tabs">
                    <div className="qualification_button">
                        <i className="qualification_icon"><Unicons.UilGraduationCap/></i>
                        Education
                    </div>

                    <div className="qualification_button">
                        <i className="qualification_icon"><Unicons.UilBriefcase/></i>
                        Work
                    </div>

                </div>

                <div className="qualification_sections">

                    <div className="qualification_content" data-content id="education">
                        <div className="qualification_data">
                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Computer Engineer, Bachelor</h3>
                               <span className="qualification_subtitle">Institute of Engineering, Pulchowk</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2012 - 2016
                               </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Software Engineer</h3>
                               <span className="qualification_subtitle">InfiniaHub</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2016 - 2019
                               </div>
                            </div>

                        </div>

                    </div>

                    <div className="qualification_content" data-content id="work">
                
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Software Developer (Part time)</h3>
                               <span className="qualification_subtitle">Murcul</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2019 - 2019
                               </div>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Software Engineer</h3>
                               <span className="qualification_subtitle">Blackbox Technologies</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2019 - 2019
                               </div>
                            </div>

                        </div>

                        <div className="qualification_data">

                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Computer Science, Masters</h3>
                               <span className="qualification_subtitle">University of Saint Louis-Missouri</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2019 - Current
                               </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Graduate Teaching Assistant</h3>
                               <span className="qualification_subtitle">University of Saint Louis-Missouri</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2019 - 2020
                               </div>
                            </div>

                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div className="qualification-data-info">
                               <h3 className="qualification_title">Graduate Research Assistant</h3>
                               <span className="qualification_subtitle">University of Saint Louis-Missouri</span>
                               <div className="qualification_calendar">
                                   <i><Unicons.UilCalendarAlt/></i>
                                   2020 - Current
                               </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}