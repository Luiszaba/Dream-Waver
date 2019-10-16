import React from 'react';

const genreArray = [  
        "Did you happen to have a steamy romance with your favorite musician? ",
        "Maybe you were running a farm?",
        "Did you rock Madison Square Garden?",
        "Was it a nightmare? Oh, no!",
        "Go ahead, tell us what you dreamt about!"
    ]

    const  randArray = genreArray[Math.floor(Math.random() * genreArray.length)]

class Home extends React.Component {


    render() {
        return(
            <div className="todays_topic">
                <p>"Why dont you talk about... {randArray}?" </p>
            </div>
        )}
        }
        
export default Home; 