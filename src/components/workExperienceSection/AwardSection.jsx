import './awards.css'
import * as Unicons from '@iconscout/react-unicons';

export default function AwardSection() {
    return (
        <div className="awards-section section" id="awards">
            <h2 class="section-title">Awards/Publications</h2>

            <div className="awards_container">
                <div className="publication_data">
                    <div className="publication">
                        <h3 className="publication_title">Deep Learning-Based Advances in Protein Structure Prediction</h3>
                        <span className="publication_subtitle">International Journal of Molecular Sciences (IJMS)</span>
                        <div className="publication_footer">
                            <div className="publication_calendar">
                                <i><Unicons.UilCalendarAlt/></i>
                                May 24, 2021
                            </div>
                            <div className="publication_link">
                                <i><Unicons.UilBookOpen/></i>
                                <a target="_blank" href="https://www.mdpi.com/1422-0067/22/11/5553?fbclid=IwAR3AO2esv0qGHScQ_CSJOkwVDOF1Lt1eyOGBDWfRNGp7HvYpeWjK2rQQSak">See publication</a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="publication">
                        <h3 className="publication_title">DISTEVAL: a web server for evaluating predicted protein distances</h3>
                        <span className="publication_subtitle">BMC Bioinformatics</span>
                        <div className="publication_footer">
                            <div className="publication_calendar">
                                <i><Unicons.UilCalendarAlt/></i>
                                Jan 26, 2021
                            </div>
                            <div className="publication_link">
                                <i><Unicons.UilBookOpen/></i>
                                <a target="_blank" href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-020-03938-z">See publication</a>
                            </div>
                        </div>
                    </div>

                    <div className="publication">
                        <h3 className="publication_title">Personality Traits Analysis From Facebook Data</h3>
                        <span className="publication_subtitle">IEEE Xplore</span>
                        <div className="publication_footer">
                            <div className="publication_calendar">
                                <i><Unicons.UilCalendarAlt/></i>
                                Aug 01, 2018
                            </div>
                            <div className="publication_link">
                                <i><Unicons.UilBookOpen/></i>
                                <a target="_blank" href="http://ieeexplore.ieee.org/document/8443932">See publication</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}