
from flask import Flask, render_template, url_for, redirect , render_template, request, flash, jsonify
import json
import pandas as pd
import time

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')



@app.route('/api1', methods=['GET'])
def ap1():
    dataList = [["Alvertos",7,"male","10","blue","21/02/1993"]]*50
    columns=["Name","Progress","Gender","Rating","FavouriteColor","DateOfBirth"]
    df = pd.DataFrame(dataList,columns=columns)
    print("App 1")
    finalData =df.to_json(orient='records')
    response = jsonify(
        data=finalData
    )
    time.sleep(1) # Sleep for 1 seconds
    return response

@app.route('/api2', methods=['GET'])
def ap2():
    dataList = [["Test 1","Test 1","Test 1","Test 1","Test 1","Test 1"]]*50
    columns=["Name","Progress","Gender","Rating","FavouriteColor","DateOfBirth"]
    df = pd.DataFrame(dataList,columns=columns)
    print("App 2")
    finalData =df.to_json(orient='records')
    response = jsonify(
        data=finalData
    )
    time.sleep(1) # Sleep for 1 seconds
    return response


@app.route('/api3', methods=['GET'])
def ap3():
    dataList = [["Test 3","Test 3","Test 3","Test 3","Test 3","Test 3"]]*50
    columns=["Name","Progress","Gender","Rating","FavouriteColor","DateOfBirth"]
    df = pd.DataFrame(dataList,columns=columns)
    print("App 3")
    finalData =df.to_json(orient='records')
    response = jsonify(
        data=finalData
    )
    time.sleep(1) # Sleep for 1 seconds
    return response


@app.route('/error', methods=['GET'])
def errorrequest():
    
    return "Record not found", 400


if __name__ == "__main__":
    #app.run(debug=True)
    app.run(threaded=False,processes=3)

#Comands to create the project

#python3 -m venv venv
#    . venv/bin/activate
#pip install Flask
#pip install pandas
# pip install gunicorn

#python3 app.py


#prepei na diagrapso to venv folder giat einai san to node moddule exei ena skamso paragmat opote kalo tha itan na eixa ena requrement txt na eftiaksaxa ean 
#kainorugio env otan thelo na trekso to app vazo to venv kai kano install apo to requreimetn txt oal ta files


#gia na trekso to guicorn server
#https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-app-using-gunicorn-to-app-platform

#https://dev.to/brandonwallace/deploy-flask-the-easy-way-with-gunicorn-and-nginx-jgc



# gia na trekso to guicorn server 

#gunicorn --workers 4 --bind 0.0.0.0:5000 app:app
#gunicorn --workers 4 app:app



#gia to restfull api

#pip install flask-restful 

#pip install Flask-Cors 

#gunicorn -bind 0.0.0.0:5000 --workers 4 app_rest:app

#gunicorn --workers 4 app_rest:app

#### with guicorn kai flask restfull exo parralel execution me promiseall