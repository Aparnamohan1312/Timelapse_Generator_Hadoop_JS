import subprocess
import glob
import os
#ingestion of raw files to Hadoop HDFS cluster
for tarfilename in glob.glob(os.path.join("C:/Users/EndUser/Documents/landsatPreprocessed", "*.jpeg")):
    print(tarfilename)
    tarfilename = tarfilename.replace("\\",'/')
    
    #put command to insert data
    cmd = 'hdfs dfs -put '+ tarfilename +' /user/hduser'
    subprocess.call(cmd, shell = True)
    


