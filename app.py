from flask import Flask, render_template
import os
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

	
@app.route('/about')
def about():
    return render_template('about.html')
    
@app.route('/resume')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
    print("starting app")
    app.run(port=os.environ.get("PORT", 5050), debug=True)