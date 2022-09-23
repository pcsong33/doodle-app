# doodle-app
![Page Demo](demo.png)
You can view the doodle prototype at this [link](https://pcsong33.github.io/doodle-app/).

The distinguishing feature of Doodle that we wanted to implement in this Minimum User-Testable Implementation is the ability to click on available time. This contrasts from When2Meet's "paint over" a selection of available times.

The primary reason why Doodle implements the "click on" functionality rather than the "paint over" functionality is because of how Doodle envisions users using the application. Specifically, a Doodle organizer will propose slots (one or multiple) that are available for "booking". A user who is then sent the Doodle can fill out their preferences for any of the slots which they would most like to book. This contrasts with When2Meet's implementation where after the organizer has set the intial constraints for the When2Meet (what days and what time ranges should be in consideration), the organizer and user are treated much the same where they will both put down their availabilities for the listed dates/times.

In that sense, it can be easy to envision Doodle being more useful for appointment booking and When2Meet being more useful to find possible meeting

### App Features
- View a list of availabilities defined by the event organizer
- View the availabilites of other attendees
- Mark your availibity as "yes", "if necessary", or "no"
- You're only able to submit the form if at least one availability has been selected

Note that in the official Doodle App, users are able to toggle between "yes", "if necessary", and "no" by clicking a checkbox. In the prototype, this is implemented using icons that change when clicked.
