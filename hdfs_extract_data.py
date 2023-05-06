from pyhdfs import HdfsClient
from PIL import Image
import pickle

#Copying images based on date-range from Hadoop HDFS
def hdfsExtractImages():
        #load the revelent files to be fetche from precomputed pickle file list
        with open('C:/Users/EndUser/python_coding/matchedDate.pkl', 'rb') as f:
                queryhdfs= pickle.load(f)
        
        
        
        #HDFS connection estabishment
        client = HdfsClient(hosts="localhost:50070")

        #save the images fetched from hdfs for processing
        for images in queryhdfs:
                with client.open("/user/hduser/"+images) as f:
                        print(images)
                        imageHub = Image.open(f)
                        imageHub.save("C:/Users/EndUser/Desktop/prestitch/"+images)


