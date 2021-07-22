import './intro.css'

export default function IntroSection() {
    return (
        <div className="intro" id="home">
            <div className="intro_img">    
                <img src="https://lh3.googleusercontent.com/pw/AM-JKLWtjKB6dKDdRmhKRP8HJu51_GPeb47MYeNC_dNXeJhWfOukrnlNBWa73hhzI7ew1V5dgUmtI6t5bZqzh7EWxwHK3RJJCEtAExzw53Ptkqc1CKZsrT4ubTfKmq0yZo35xBRUCi6pSpEIk5cW0NvMak-pXQ=s1296-no?authuser=0" alt=""/>
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