# PhishGuard AI

A Flask web interface for the supplied LightGBM phishing classifier and its 87 saved feature columns.

## Run locally

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000`.

## Files
- `app.py`: Flask routes and prediction logic
- `feature_extractor.py`: URL, HTML, DNS and WHOIS feature extraction
- `phishing_model.pkl`: supplied trained model
- `model_columns.pkl`: supplied feature order
- `templates/` and `static/`: interface

## Important model limitation
The model expects 87 features. A few original features (`web_traffic`, `google_index`, and `page_rank`) depend on external services that do not have stable, free, keyless APIs. This app sets those to neutral values. WHOIS and webpage features can also be unavailable for some domains. Evaluate the deployed pipeline on a separate, recent test set before reporting real-world accuracy or using it as a security control.

## Deployment
The project contains `gunicorn` and can run with:

```bash
gunicorn app:app
```

For Render, use `pip install -r requirements.txt` as the build command and `gunicorn app:app` as the start command.
