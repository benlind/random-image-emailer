/**
 * HOW TO USE THIS SCRIPT:
 * 0. Upload your images to Google Drive.
 * 1. Log into Google Drive, and click CREATE -> Script -> Blank Project.
 * 2. Delete all of the default code, and paste this code into your project.
 * 3. Customize the email parameters below to your liking (note that the quotes
 *    around each line are very important.)
 * 4. Test the script by selecting Run -> sendRandomImage. You should receive an
 *    email with a random image.
 * 5. Click Resources -> Current Project's Triggers, and set up the email to run
 *    as often as you would like.
 */

// Name of the folder that contains your photos
// (leave blank to search your top-level folder)
var folderName = "";

// Email parameters
var to      = "you@domain.com"  // comma-separated list of email addresses
var subject = "Honeymailer Daily"   // subject line
var body    = "<p>Your random image:</p>" +  // body of the email
    "<p><img src='cid:imageBlob' style='max-width: 100%;' /></p>" +
    "<p>Like this one? See it <a href='{picture-link}'>here</a>.</p>";

// Valid filetypes to search for
var fileTypes = [MimeType.JPEG, MimeType.GIF, MimeType.PNG];

/**
 * Emails a random image in a Google Drive folder to an email address.
 */
function sendRandomImage() {
    var folders = DriveApp.getFoldersByName(folderName);
    if (!folders.hasNext()) return;
    var folder = folders.next();
    var results = [];
    
    // Add all files with the correct filetypes to the results
    fileTypes.forEach(function(type) {
        var files = folder.getFilesByType(type);
        while (files.hasNext()) {
            results.push(files.next());
        }
    });

    if (results.length == 0) return;  // no results

    // Select a random image
    var file = results[Math.floor(Math.random() * results.length + 1)];

    // Send an email containing the image
    MailApp.sendEmail({
        to: to,
        subject: subject,
        htmlBody: body.replace("{picture-link}", file.getUrl()),
        inlineImages: {
            imageBlob: file.getBlob()
        }
    });
}
