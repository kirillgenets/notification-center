import React from 'react';
import Notification from '../Notification/Notification';

const Notifications = () => {
  return (
    <tbody>
      <Notification
        readStatus="unread"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="read"
        category="info"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="unread"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="unread"
        category="warn"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="read"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="unread"
        category="success"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="read"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="unread"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
      <Notification
        readStatus="unread"
        category="critical"
        message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        date="Mar 8, 2019, 11:30"
      />
    </tbody>
  )
}

export default Notifications;