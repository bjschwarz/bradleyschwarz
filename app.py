from flask import Flask, url_for, render_template, send_file, current_app
import os

app = Flask(__name__)

art_items = {
    'iguana': {
      'title': "The Iguana",
      'filename': 'The_Iguana.jpg',
      'description': '',
      'medium':'sharpies'
    },
    'faces': {
      'title': "The Faces",
      'filename': 'theFaces.jpg',
      'description': '',
      'medium':'watercolor and pen'
    },
    'lion': {
      'title': "Lion",
      'filename': 'Lion.jpg',
      'description': '',
      'medium':'acrylic'
    },
    'age': {
      'title': "Age",
      'filename': 'Age.jpg',
      'description': '',
      'medium':'duct tape'
    },
    'anatomy': {
      'title': "Anatomy",
      'filename': 'Anatomy.jpg',
      'description': '',
      'medium':'colored pencil'
    },
    'allaroundus': {
      'title': "All Around Us",
      'filename': 'AllAroundUs.jpg',
      'description': '',
      'medium':'water color and pen'
    },
    'chameleon': {
      'title': "Chameleon",
      'filename': 'Chameleon.jpg',
      'description': '',
      'medium':'mixed media'
    },
    'expression': {
      'title': "Expression",
      'filename': 'Expression.jpg',
      'description': '',
      'medium':'mixed media'
    },
    'snake': {
      'title': "Snake",
      'filename': 'snake.jpg',
      'description': '',
      'medium':'wood burning'
    },
    'flames': {
      'title': "Flames",
      'filename': 'Flame_girl.jpg',
      'description': '',
      'medium':'colored pencil'
    } 
  }

@app.route("/")
def home():
  '''
  return the home page
  '''
  return render_template('home.html')

@app.route("/art")
def art():
  '''
  return the art page
  '''
  
  return render_template('art.html', art=art_items)

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