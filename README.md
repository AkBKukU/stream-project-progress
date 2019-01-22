Stream Project Progress
-----------------------

A vertical progress bar displaying progression through a list of set goals.
This is meant to be used in [OBS](https://obsproject.com/) with a web interface.

Usage
=====

Goals and progress amount are listed in a JSON file. Editing the JSON file
before launching OBS makes it easy to set what your goals are. To update the
progress meter, change the `progress` value. 0 is the starting value and it
is changed by adding an integer/whole number to it to move the progress bar to
that goal. You aren't meant to set it by percentage directly. That is calculated
automatically. You can change the progress value while OBS is running and it
will check for a new value once a second.

You will need to host the files on a web server, so that the AJAX calls for updating
the progress bar will work. You cannot load the files directly from OBS.
