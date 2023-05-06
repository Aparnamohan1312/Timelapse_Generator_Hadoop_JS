import cv2
import os
import glob

#Generating video time-lapse from the processed Landsat 9 image TIFs
def videoGeneration():
    img_array = []
    for filename in glob.glob(os.path.join("C:/Users/EndUser/Desktop/prestitch/", "*.jpeg")):
        print('------------'+filename+'------------')
        img = cv2.imread(filename)
        height, width, layers = img.shape
        size = (width,height)
        img_array.append(img)
        

    #opencv video writer to generate timelapse
    out = cv2.VideoWriter('C:/Users/EndUser/frontend/spatialClient/public/timelapseVideo.mp4',cv2.VideoWriter_fourcc(*'avc1'), 1, size)
    #out = cv2.VideoWriter('C:/Users/EndUser/Desktop/timelapseVideo.mp4',cv2.VideoWriter_fourcc(*'MP4V'), 15, size)
    
    for i in range(len(img_array)):
        out.write(img_array[i])
    out.release()

    for f in glob.glob(os.path.join("C:/Users/EndUser/Desktop/prestitch/", "*")):
        print(f)
        os.remove(f)




        


    