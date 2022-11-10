set session sql_mode = '';
load data infile '/static/fulldata_03_07_08_P.csv'
    into table Place
    fields terminated by ','
    lines terminated by '\n'
    ignore 1 lines ;