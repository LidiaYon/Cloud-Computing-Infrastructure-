# Node.js Server on Google Cloud Platform: Setup Guide

This repository contains a step-by-step guide for setting up a Node.js server on Google Cloud Platform (GCP). The guide covers the following topics:

Setting up a GCP account for a free trial.
Deploying a Node.js server on Ubuntu hosted on GCP.
Creating an HTTP JSON API server in Node.js to retrieve the current time using JSON.
Table of Contents

# Setting Up a GCP Account for Free Trial
Deploying Node.js Server on GCP
Creating HTTP JSON API Server in Node.js
Enhancement Ideas
Conclusion
References
Setting Up a GCP Account for Free Trial

Follow the instructions provided in the Google Cloud Platform documentation to sign up for a free trial account.

# Deploying Node.js Server on GCP

# Create a new virtual machine on GCP with Ubuntu installed.
SSH into the virtual machine and navigate to the desired directory.
Create a new directory/folder using the command mkdir <CS571_Project>.
Change the directory to the newly created one using cd <CS571_Project>.
Create a Node.js file using a text editor (e.g., sudo nano current_time.js) and write the server code.
Save the file with Ctrl + O and exit the editor with Ctrl + X.
Execute the Node.js file with node current_time.js.
Creating HTTP JSON API Server in Node.js

# Write the code to display the current time.
Set up an HTTP server using the http module in Node.js.
Extract the current time and parse it into JSON format.
Set the response headers to indicate JSON content.
Send the JSON response to clients upon request.
Listen for incoming connections on a specified port (e.g., 3000).
Enhancement Ideas



# Implement error handling for graceful client request handling.
Add logging functionality to track server activities and debug issues.
Introduce authentication and authorization mechanisms for secure server access.
Implement rate limiting to prevent abuse or excessive resource usage.
Conclusion

This guide provides a comprehensive overview of setting up a Node.js server on Google Cloud Platform. By following the steps outlined here, users can deploy and manage their server applications effectively on GCP.

References
Google Cloud Platform Documentation: https://cloud.google.com/docs
Node.js Documentation: https://nodejs.org/en/docs/


### Project Google Slide Presentation Link : 
https://docs.google.com/presentation/d/1TMZulUhEC8l_riPEJsNEVN7sZKSc-kJlc_1_B9x-aQo/edit?usp=sharing
