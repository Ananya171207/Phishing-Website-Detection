PhishGuard AI

PhishGuard AI is a machine-learning-powered web application that analyses a website URL and predicts whether it is legitimate or potentially phishing.

The application connects a trained LightGBM classifier to a Flask-based web interface. Users can enter a URL and view the predicted class, confidence score, risk level, URL details, and detected warning indicators.

Disclaimer: This project is intended for educational and research purposes. Its predictions should not be treated as a replacement for professional cybersecurity tools or manual verification.

✨ Features

Analyse a website URL through a simple web interface

Predict whether a website is legitimate or phishing

Display prediction confidence and phishing probability

Classify results into safe, suspicious, or dangerous risk levels

Show relevant URL and domain information

Explain warning indicators detected during analysis

Extract URL, HTML, DNS, and available WHOIS-based features

Block localhost and private-network addresses

Provide a responsive cybersecurity-themed interface

Use a saved LightGBM model for real-time predictions

Machine-Learning Model

Property

Details

Algorithm

LightGBM Classifier

Saved model

phishing_model.pkl

Saved feature order

model_columns.pkl

Number of input features

87

Output classes

Legitimate and Phishing

Before prediction, the extracted feature values are arranged in the same order stored in model_columns.pkl.

Technology Stack

Component

Technology

Frontend

HTML, CSS, JavaScript

Backend

Python, Flask

Machine learning

LightGBM, scikit-learn

Data handling

Pandas, NumPy

Feature extraction

Requests, Beautiful Soup, DNS, WHOIS

Production server

Gunicorn

Project Structure

Phishing-Website-Detection/
├── app.py
├── feature_extractor.py
├── phishing_model.pkl
├── model_columns.pkl
├── requirements.txt
├── README.md
├── .gitignore
├── templates/
│   ├── index.html
│   └── about.html
└── static/
    ├── style.css
    └── script.js

Installation and Local Setup

1. Clone the repository

git clone https://github.com/Ananya171207/Phishing-Website-Detection.git
cd Phishing-Website-Detection

2. Create a virtual environment

python -m venv .venv

3. Activate the virtual environment

Windows PowerShell

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1

You can also avoid activation and directly use the virtual-environment Python executable:

.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe app.py

macOS or Linux

source .venv/bin/activate

4. Install dependencies

pip install -r requirements.txt

5. Run the Flask application

python app.py

Open the following address in your browser:

http://127.0.0.1:5000

How to Use

Start the Flask application.

Open the website in a browser.

Enter a complete URL, such as https://www.example.com/.

Click the scan button.

Review the predicted class, confidence score, risk level, and detected indicators.

Share Temporarily Using ngrok

Start the Flask application in one terminal:

python app.py

In a second terminal, create an ngrok tunnel:

ngrok http 5000

Ngrok will provide a public HTTPS URL that can be opened on other devices. Both Flask and ngrok must remain running for the link to work.

Never publish your ngrok authentication token in the repository.

Deployment on Render

The application can be deployed as a Render Web Service.

Use the following settings:

Build command

pip install -r requirements.txt

Start command

gunicorn app:app

After deployment, Render provides a public URL that works even when the local computer is turned off.

Current Limitations

The trained model expects 87 features. Some original features, including web_traffic, google_index, and page_rank, depend on third-party services that may not offer stable, free, keyless APIs. The application therefore uses neutral values when these features cannot be obtained.

Some websites may also block automated requests, use bot protection, redirect according to location, or restrict WHOIS information. This can cause webpage or domain features to be unavailable and may lead to false-positive or false-negative predictions.

Because the live feature-extraction process may differ from the process used to create the training dataset, some well-known legitimate websites may occasionally be classified incorrectly. A stronger real-time system would retrain the model using only features that the deployed application can calculate consistently.

Security Considerations

The application does not automatically open submitted URLs in the user's browser.

Localhost and private-network addresses should remain blocked to reduce server-side request forgery risks.

Request limits, logging controls, input validation, and secure deployment settings should be added before public production use.

Secret tokens, passwords, API keys, and .env files should never be committed to GitHub.

Future Improvements

Retrain the model using reliably extractable real-time features

Add SHAP-based prediction explanations

Store scan history in a database

Add user authentication

Integrate trusted threat-intelligence APIs

Add QR-code and shortened-link analysis

Create browser-extension support

Improve deployment security and rate limiting

Evaluation Metrics

Model performance can be evaluated using:

Accuracy

Precision

Recall

F1-score

Confusion matrix

Matthews correlation coefficient

Cohen's kappa

False-positive rate

The complete deployed pipeline should be evaluated on a recent, unseen dataset rather than relying only on the original model's training or test performance.

Project Purpose

This project was developed as part of a six-week Machine Learning and Generative AI using Python internship. It applies feature engineering and machine-learning techniques to the real-world problem of phishing website detection.

Contributors

Ananya Kathpalia (https://github.com/Ananya171207)

Laksh Sikri (https://github.com/Laksh-Sikri)

Vedant Maan (

Trisha Jha

📄 License

This repository is currently intended for academic and educational use. Before allowing unrestricted reuse, add an appropriate open-source license after confirming that the dataset and trained model permit redistribution.
