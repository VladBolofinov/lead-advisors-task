import React, { useState } from 'react';
import './Accordion.scss';
import bg1 from '../../img/items/accordionItems/item1.svg';
import bg2 from '../../img/items/accordionItems/item2.svg';
import bg3 from '../../img/items/accordionItems/item3.svg';
import bg4 from '../../img/items/accordionItems/item4.svg';
import bg5 from '../../img/items/accordionItems/item5.svg';
import bg6 from '../../img/items/accordionItems/item6.svg';
import bg7 from '../../img/items/accordionItems/item7.svg';

export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Set initial state to 0

    const toggleState = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const accordionData = [
        { title: 'Meeting', bg: bg1, number: '01' },
        { title: 'Mafia Party', bg: bg1, number: '02' },
        { title: 'Party', bg: bg2, number: '03' },
        { title: 'Party on the beach', bg: bg3, number: '04' },
        { title: 'Home Security', bg: bg4, number: '05' },
        { title: 'Network Design & Implementation', bg: bg5, number: '06' },
        { title: 'System Design & Engineering', bg: bg6, number: '07' },
        { title: 'Client Care Plans', bg: bg7, number: '08' },
    ];

    return (
        <div className="accordion"
             id="targetElement">
            {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <button
                        style={{ backgroundImage: `url(${item.bg})` }}
                        className={`accordion-visible ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleState(index)}
                    >
                        <span>{`${item.number} ${item.title}`}</span>
                        <img className={activeIndex === index ? 'active' : ''} />
                    </button>
                    <div
                        className={`accordion-toggle ${
                            activeIndex === index ? 'animated' : ''
                        }`}
                        style={{ height: activeIndex === index ? 460 : 0 }}
                    >
                        <div className="item-descr">
                            <p className="title">{item.title}</p>
                            <p className="title-date">13.02.2023</p>
                            <a href="https://leadadvisors.org/" target="_blank" rel="noreferrer">
                                <button className="title-btn">More information</button>
                            </a>
                            <p className="item-number">{item.number}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};







