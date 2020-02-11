import React from 'react'


const CardVid = () => {
    return (

        <div className="card" style={{ backgroundImage: `url('https://d21950x0o1sh55.cloudfront.net/assets/home/game-0e307d71d9838e8fbe4927b551f119bcd9e4748f2c2b70c7b81846702996ef94.jpg')` }}>
            <div className="card__content">

                <a className="play-button">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M42.7,42.7L25,50L7.3,42.7L0,25L7.3,7.3L25,0l17.7,7.3L50,25L42.7,42.7z" className="polygon" />
                        <polygon points="32.5,25 21.5,31.4 21.5,18.6 " />
                    </svg>
                </a>

                <div className="card__content--description">
                    <h3 className="roll-up">
                        <span><span>P</span><span>P</span></span>
                        <span><span>l</span><span>l</span></span>
                        <span><span>a</span><span>a</span></span>
                        <span><span>y</span><span>y</span></span>
                    </h3>
                    <p className="text-reveal">
                        <span>
                            <span>And get a chance to</span>
                            <span>win tickets to the</span>
                            <span>premiere of the movie</span>
                        </span>
                        <span>
                            <span><span>And get a chance to</span></span>
                            <span><span>win tickets to the</span></span>
                            <span><span>premiere of the movie</span></span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardVid