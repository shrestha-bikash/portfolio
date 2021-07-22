import './intro.css'

export default function IntroSection() {
    return (
        <div className="intro" id="home">
            <div className="intro_img">    
                <img src="https://avatars.githubusercontent.com/u/10379970?v=4" alt=""/>
            </div>
            <div className="intro_data">
                <h1 className="home_title"> Hi,<br/>I am <span className="home_title-color">Bikash Shrestha</span><br/> Graduate Research Assistant, <br/>Software Engineer </h1>

                {/* <a href="#" className="button">Contact</a> */}
            </div>

            {/* <div className="home__social">
                <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
                <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
            </div> */}

        </div>
    )
}