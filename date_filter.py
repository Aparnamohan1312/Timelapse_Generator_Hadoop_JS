from datetime import date, timedelta
from subprocess import Popen, PIPE
import pickle

#Filtering user-input date range
def dateFilter(fromdate, todate):
    startdate = fromdate.split("-")
    enddate = todate.split("-")
    d1 = date(int(startdate[0]),int(startdate[1]),int(startdate[2]))
    d2 = date(int(enddate[0]),int(enddate[1]),int(enddate[2]))
    
    # this will give you a list containing all of the dates
    dd = [d1 + timedelta(days=x) for x in range((d2-d1).days + 1)]

    # you can't join dates, so if you want to use join, you need to
    # cast to a string in the list comprehension:
    dates_series = [str(d1 + timedelta(days=x)) for x in range((d2-d1).days + 1)]

    # now you can join
    dateRange = (" ".join(dates_series)).replace('-', "").split(" ")
 
    hdfs_path = '/user/hduser'
    process = Popen(f'hdfs dfs -ls -h {hdfs_path}', shell=True, stdout=PIPE, stderr=PIPE)
    std_out, std_err = process.communicate()


    #get list of files stored in hdfs and filter on the user specified input to retrive relevent files
    list_of_file_names = [fn.split(' ')[-1].split('/')[-1][:-1] for fn in std_out.decode().split('\n')[1:]][:-1]


    matched = []
    for data in dateRange:
        for file in list_of_file_names:
            if str(file[17:25]) == str(data):
                matched.append(file)

    #storing relevent filenames for user input data range as pickle files
    with open('C:/Users/EndUser/python_coding/matchedDate.pkl', 'wb') as f:
        pickle.dump(matched, f)

