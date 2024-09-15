import React, { useEffect, useState } from 'react';
import './slider.css';
const Slider = () => {
    const [autoSlide, setAutoSlide] = useState(null);
    const [runTimeOut, setRunTimeOut] = useState(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    useEffect(() => {
        setAutoSlide(setTimeout(() => {
            document.getElementById('next').click();
        }, timeAutoNext));

        return () => {
            clearTimeout(autoSlide);
            clearTimeout(runTimeOut);
        };
    }, []);

    const showSlider = (type) => {
        const SliderDom = document.querySelector('.carousel .list');
        const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        const carouselDom = document.querySelector('.carousel');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        setRunTimeOut(setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning));

        clearTimeout(autoSlide);
        setAutoSlide(setTimeout(() => {
            document.getElementById('next').click();
        }, timeAutoNext));
    };

    return (
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src="../src/assets/image/img1.jpg" alt="Slide 1" />
                    <div className="content">
                        <div className="author">Dipen</div>
                        <div className="title">Code-Canvas</div>
                        <div className="topic">Snippet Distribution</div>
                        <div className="des">
                    </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img2.jpg" alt="Slide 2" />
                    <div className="content">
                        <div className="author">Dipen</div>
                        <div className="title">Code-Canvas</div>
                        <div className="topic">Snippet Distribution</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img3.jpg" alt="Slide 3" />
                    <div className="content">
                        <div className="author">Dipen</div>
                        <div className="title">Code-Canvas</div>
                        <div className="topic">Snippet Distribution</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img4.jpg" alt="Slide 4" />
                    <div className="content">
                        <div className="author">Dipen</div>
                        <div className="title">Code-Canvas</div>
                        <div className="topic">Snippet Distribution</div>
                        <div className="des">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thumbnail">
                <div className="item">
                    <img src="../src/assets/image/img1.jpg" alt="Thumbnail 1" />
                    <div className="content">
                        <div className="title">Name Slider 1</div>
                        <div className="description">Description 1</div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img2.jpg" alt="Thumbnail 2" />
                    <div className="content">
                        <div className="title">Name Slider 2</div>
                        <div className="description">Description 2</div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img3.jpg" alt="Thumbnail 3" />
                    <div className="content">
                        <div className="title">Name Slider 3</div>
                        <div className="description">Description 3</div>
                    </div>
                </div>
                <div className="item">
                    <img src="../src/assets/image/img4.jpg" alt="Thumbnail 4" />
                    <div className="content">
                        <div className="title">Name Slider 4</div>
                        <div className="description">Description 4</div>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <button id="prev" onClick={() => showSlider('prev')}>&lt;</button>
                <button id="next" onClick={() => showSlider('next')}>&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Slider;
