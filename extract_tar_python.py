import tarfile
import glob
import os
import numpy as np
from osgeo import gdal
import matplotlib.pyplot as plt


# Landsat contains a range of bands to capture images of different wavelength here we are
# intrested in visble spectrum of red, green and blue bands which are bands 2, 3 and 4 respectively
# to get a colour image we have to merge all the threee bands

def merge_bands(tarfilename):
    os.chdir(r'C:/Users/EndUser/Documents/test_landsat/final_folder')
    b2_file = glob.glob("*_B2.TIF") # blue band
    b3_file = glob.glob('*_B3.TIF') # green band
    b4_file = glob.glob('*_B4.TIF') # red band
    def norm(band):
        band_min, band_max = band.min(), band.max()
        return ((band - band_min)/(band_max - band_min))

    # retreive each band using geospatial abstraction library interface 
    b2_link = gdal.Open(b2_file[0])
    b3_link = gdal.Open(b3_file[0])
    b4_link = gdal.Open(b4_file[0])

    # normalising for int range 
    b2 = norm(b2_link.ReadAsArray().astype(np.float))
    b3 = norm(b3_link.ReadAsArray().astype(np.float))
    b4 = norm(b4_link.ReadAsArray().astype(np.float))

    # merging bands to create RGB image
    rgb = np.dstack((b4,b3,b2))
    del b2, b3, b4
    plt.figure(figsize=(3, 3))
    plt.imshow(rgb, interpolation='nearest')
    plt.axis('off')
    plt.savefig('C:/Users/EndUser/Documents/landsatPreprocessed/'+tarfilename[35:]+ "_final.jpeg", format='jpeg', dpi=1200, bbox_inches='tight', pad_inches = 0)
    plt.close()


#helper function to remove the contents of previously extracted tiff's        
def clean_dir():
    for f in glob.glob(os.path.join("C:/Users/EndUser/Documents/test_landsat/final_folder", "*")):
        print(f)
        os.remove(f)

#Extracting Landsat unprocessed tar files from specified local directory 
def extract_process():
    for tarfilename in glob.glob(os.path.join("C:/Users/EndUser/Documents/Landsat", "*.tar")):
        my_tar = tarfile.open(tarfilename)
        my_tar.extractall('C:/Users/EndUser/Documents/test_landsat/final_folder') # specify which folder to extract to
        my_tar.close()

        merge_bands(tarfilename)
        clean_dir()
        print("End")




if __name__ == "__main__":
    extract_process()
