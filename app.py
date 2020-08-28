from flask import Flask, url_for, render_template, send_file, current_app
import os

app = Flask(__name__)

@app.route("/")
def home():
  '''
  return the home page
  '''
  return render_template('home.html')

@app.route("/download_resume")
def download_resume():
  '''
  download resume
  '''
  current_path = os.path.join(current_app.static_folder, 'img')
  path = os.path.join(current_path, 'resume.pdf')
  return send_file(path, as_attachment=True)


if __name__ == '__main__':
  app.run(port=5000)