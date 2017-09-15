import csv
with open('318370848_T_ONTIME final.csv') as f:
    reader = csv.reader(f)
    for num in range(1, 26):
        row1 = next(reader)
        print('{"id":"'+str(num)+'", "CRS_DEP_TIME": "Sun, 1 Jan 2017 '+row1[0]+' GMT", "DEP_TIME": "Sun, 1 Jan 2017 '
              +row1[1]+' GMT", "ARR_TIME": "Sun, 1 Jan 2017 '+row1[2]+' GMT"},')