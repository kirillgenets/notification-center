import React from 'react';
import Notification from '../Notification/Notification';

const Notifications = () => {
    return (
        <tbody>
            <Notification
                readStatus="unread"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="read"
                category="info"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="unread"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="unread"
                category="warn"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="read"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="unread"
                category="success"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="read"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="unread"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
            <Notification
                readStatus="unread"
                category="critical"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="Mar 8, 2019, 11:30"
            />
        </tbody>
    );
};

export default Notifications;
