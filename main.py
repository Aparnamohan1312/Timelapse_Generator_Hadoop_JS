from fastapi import FastAPI
import time
from fastapi.middleware.cors import CORSMiddleware
from date_filter import dateFilter
from hdfs_extract_data import hdfsExtractImages
from video_stitching import videoGeneration
app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/getTimelapse")
async def root():
    print("Called at "+ str(time.time()))
    return {"path": "/timelapseVideo.mp4"}

@app.get("/video/{fromdate}/{todate}")
async def root(fromdate:str, todate:str):
    print("video "+fromdate+todate+" request received"+ str(time.time()))
    
    #Filtering user-input date range
    dateFilter(fromdate, todate) 
    #dateFilter("2020-01-01", "2021-12-01")
    
    #retreive images based on date-range filter from Hadoop HDFS
    hdfsExtractImages() 
    
    #Generating video time-lapse from the processed Landsat 9 image TIFs
    videoGeneration() 
    

    return {"message": "Time-lapse Generation Completed"}
