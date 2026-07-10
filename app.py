from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Home Page
@app.route("/")
def home():
    return render_template("index.html")


# Download Resume
@app.route("/download-resume")
def download_resume():
    resume_folder = os.path.join(app.root_path, "static", "resume")
    return send_from_directory(
        resume_folder,
        "resume.pdf",
        as_attachment=True
    )


# Projects Page (Optional)
@app.route("/projects")
def projects():
    return render_template("index.html")


# Skills Page (Optional)
@app.route("/skills")
def skills():
    return render_template("index.html")


# Certifications Page (Optional)
@app.route("/certifications")
def certifications():
    return render_template("index.html")


# Contact Page (Optional)
@app.route("/contact")
def contact():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)