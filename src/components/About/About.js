import React from 'react';
import Court from './court.jpg';

function About(){
    return (
        <div className="container">
           <h1>เกี่ยวกับเรา</h1>
           <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat nunc vel mauris faucibus maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam lacus purus, pulvinar venenatis nibh id, imperdiet tempor mi. Morbi non augue lobortis, pharetra lacus at, posuere risus. Nam tempus leo quam, a ultrices felis maximus sed. Ut massa augue, consequat sit amet odio interdum, lobortis mattis velit. Morbi ac fermentum dolor, vitae hendrerit lectus. Suspendisse vel laoreet turpis, et hendrerit nulla. Integer facilisis ipsum feugiat dignissim pharetra. Sed sed imperdiet est, a ultricies tortor. Integer in lectus neque. Maecenas consectetur, quam eu semper euismod, felis ipsum fermentum mauris, eu consectetur lacus eros eget sapien. Ut faucibus consectetur augue id fermentum. Suspendisse venenatis, nulla eu rutrum maximus, eros justo tempus massa, eget aliquam ipsum ligula quis dolor.</p> 
            <img src={Court}/>
        </div>
        
    );
}

export default About;