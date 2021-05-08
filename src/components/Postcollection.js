import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

const Postcollection = (props) => {
    return (
        <div role="listitem" className="postscollection-item">
            <Link href={"/mediareease/articles/" + props.article}>
                <div
                    style={{
                        backgroundImage: `url(${props.poster})`,
                    }}
                    href="/articles/gunda"
                    className={"postfeed-item " + props.category}
                >
                    <div className="postfeed-contents">
                        <div className="posttopper">
                            <div
                                className={"category " + props.category}
                            >
                                <div className="label14">{props.type}</div>
                            </div>
                        </div>
                        <div className="postinfo">
                            <h2 className="heading-2">{props.title}</h2>
                            <div className="subheading">{props.text}</div>
                            <div className="postmeta">
                                <div>{props.date}</div>
                                <FontAwesomeIcon icon={faDotCircle} className="dotseparator"/>
                                <div className="genres">{props.genre}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Postcollection;