🛡️ PhishGuard AI

PhishGuard AI is a machine-learning-powered web application that analyses a website URL and predicts whether it is legitimate or potentially phishing.

The application uses a trained LightGBM classifier with 87 URL, domain, webpage, DNS, and WHOIS-based features. A Flask backend connects the saved machine-learning model to a responsive web interface where users can submit URLs and view the prediction, confidence score, risk level, and detected warning signs.

Disclaimer: This project is intended for educational and research purposes. Its predictions should not be treated as a replacement for professional cybersecurity tools or manual verification.

✨ Features

Analyse a website URL through a simple web interface

Predict whether a website is legitimate or phishing

Display prediction confidence and phishing probability

Classify results into safe, suspicious, or dangerous risk levels

Show useful URL and domain details

Explain warning signals detected during analysis

Extract URL, HTML, DNS, and available WHOIS features

Prevent requests to localhost and private network addresses

Responsive cybersecurity-themed user interface

Flask-based backend with a saved LightGBM model

🧠 Machine-Learning Model

The application uses:

Algorithm: LightGBM Classifier

Saved model: phishing_model.pkl

Saved feature order: model_columns.pkl

Number of input features: 87

Output classes: Legitimate and Phishing

The feature values are arranged in the same order stored in model_columns.pkl before they are supplied to the model.

🛠️ Technology Stack

Component

Technology

Frontend

HTML, CSS and JavaScript

Backend

Python and Flask

Machine Learning

LightGBM and scikit-learn

Data handling

Pandas and NumPy

Feature extraction

Requests, Beautiful Soup, DNS and WHOIS

Production server

Gunicorn

📁 Project Structure

phishguard-ai/
├── app.py
├── feature_extractor.py
├── phishing_model.pkl
├── model_columns.pkl
├── requirements.txt
├── README.md
├── templates/
│   ├── index.html
│   └── about.html
└── static/
    ├── style.css
    └── script.js

⚙️ Installation and Local Setup

1. Clone the repository

git clone https://github.com/YOUR-USERNAME/phishguard-ai.git
cd phishguard-ai

Replace YOUR-USERNAME with your GitHub username.

2. Create a virtual environment

python -m venv .venv

Activate it on Windows PowerShell:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1

Or activate it without changing PowerShell policy by directly using the virtual-environment Python executable in later commands.

On macOS or Linux:

source .venv/bin/activate

3. Install dependencies

pip install -r requirements.txt

4. Run the Flask application

python app.py

Open the following address in your browser:

http://127.0.0.1:5000

🚀 How to Use

Start the Flask application.

Open the website in a browser.

Enter a complete URL, for example:

https://www.example.com/

Click the scan button.

Review the predicted class, confidence score, risk level, and detected indicators.

🌐 Share Temporarily Using ngrok

Start the Flask application in one terminal:

python app.py

In another terminal, create an ngrok tunnel:

ngrok http 5000

Ngrok will provide a public HTTPS address that can be opened on other devices. Both Flask and ngrok must remain running for the link to work.

Do not publish your ngrok authentication token in the repository.

☁️ Deployment on Render

The application can be deployed as a Render Web Service.

Use the following settings:

Build command

pip install -r requirements.txt

Start command

gunicorn app:app

After deployment, Render provides a public URL that works even when the local computer is turned off.

⚠️ Current Limitations

The trained model expects 87 features. Some original features, including web_traffic, google_index, and page_rank, depend on third-party services that may not provide stable, free, keyless APIs. The application therefore uses neutral values when these features cannot be obtained.

Some websites also block automated requests, use bot protection, redirect according to location, or restrict WHOIS information. This can cause webpage or domain features to be unavailable and may lead to false-positive or false-negative predictions.

Because the live feature-extraction process may differ from the process used to create the training dataset, well-known legitimate websites can occasionally be classified incorrectly. For a stronger real-time system, the model should be retrained using only features that the deployed application can calculate consistently.

🔐 Security Considerations

The application does not automatically open submitted URLs in the user's browser.

Localhost and private-network addresses should remain blocked to reduce server-side request forgery risks.

Add request limits, logging controls, input validation, and secure deployment settings before public production use.

Never commit secret tokens, passwords, API keys, or environment files to GitHub.

🔮 Future Improvements

Retrain the model using reliably extractable real-time features

Add SHAP-based prediction explanations

Store scan history in a database

Add user authentication

Integrate trusted threat-intelligence APIs

Add QR-code and shortened-link analysis

Create browser-extension support

Add recent phishing-domain monitoring

Improve deployment security and rate limiting

📊 Suggested Evaluation Metrics

When reporting model performance, include:

Accuracy

Precision

Recall

F1-score

Confusion matrix

Matthews correlation coefficient

Cohen's kappa

False-positive rate

Evaluate the complete deployed pipeline on a recent, unseen dataset rather than reporting only the original model's training or test performance.

👩‍💻 Project Purpose

This project was developed as part of a machine-learning and generative-AI internship project focused on applying feature engineering and machine-learning models to the real-world problem of phishing website detection.

🤝 Contributors

Add the names and GitHub profiles of all team members here.

Team Member 1 — Ananya171207 
Team Member 2 — Lakshsikri 
Team Member 3 — vedantmaan07 
Team Member 4 — Trishajha817

📄 License

This repository is intended for academic and educational use. Add a suitable open-source license, such as the MIT License, before allowing unrestricted reuse.
