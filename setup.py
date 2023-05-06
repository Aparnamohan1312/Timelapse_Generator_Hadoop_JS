import glob
from setuptools import setup, find_packages

setup(
    name='geospatial timelapse generation',
    description='geospatial timelapse generation',
    author='Team Blitzkrieg',
    author_email='rgamp003@ucr.edu,nkulk009@ucr.edu ,amoha121@ucr.edu ,dkann001@ucr.edu , nraja024@ucr.edu, rgana001@ucr.edu',
    version='1.0.0',
    packages=find_packages(),
    package_data={'': ['*.py']},
    data_files=[('config', glob.glob('config/*', recursive=True))],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        "fastapi==0.88.0"          
        "GDAL==3.4.3"            
        "image==1.5.33"             
        "matplotlib==3.6.2"       
        "matplotlib-inline==0.1.6"  
        "numpy==1.23.5"         
        "opencv-python==4.6.0.66"     
        "pickleshare==0.7.5"    
        "pip==22.2.2"         
        "PyHDFS==0.3.1"         
        "python-dateutil==2.8.2"   
        "uvicorn==0.20.0" 
    ],
)


 
  
