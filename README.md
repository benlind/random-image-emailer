# Random Image Emailer

This script emails you a random image from a Google Drive folder at a set interval.

**NOTE:** this script is based off of [dfkoz's gist](https://gist.github.com/dfkoz/5860786). I updated it to work with the most recent version of the Google Apps Script API.

# Usage

0. Upload your images to Google Drive.
1. Log into Google Drive, and click CREATE -> Script -> Blank Project.
2. Delete all of the default code, and paste the code in `random-image-emailer.gs` into your project.
3. Customize the email and folder parameters in `random-image-emailer.gs` to your liking (note that the quotes around each line are very important).
4. Test the script by selecting Run -> sendRandomImage. You should receive an email with a random image.
5. Click Resources -> Current Project's Triggers, and set up the email to run as often as you would like.
