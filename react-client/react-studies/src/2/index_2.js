// Import the React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 6:00PM" content="Nice blog post" avatar={faker.image.image()} />
            </ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Today at 3:00PM" content="I like the subject" avatar={faker.image.image()} />
            <CommentDetail author="Jane" timeAgo="Yesterday at 6:00PM" content="I like the writing" avatar={faker.image.image()} />
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);