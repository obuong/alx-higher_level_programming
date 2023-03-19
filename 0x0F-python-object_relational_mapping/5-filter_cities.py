#!/usr/bin/python3

'''
lists all states in the database hbtn_0e_0_usa
'''
import sys
import MySQLdb


if __name__ == "__main__":
    try:
        connection = MySQLdb.connect(
            host="localhost",
            user=sys.argv[1],
            passwd=sys.argv[2],
            port=3306,
            db=sys.argv[3]
        )
    except MySQLdb.Error:
        print("connection error")
    try:
        cur = connection.cursor()
        cur.execute("SELECT cities.name FROM cities\
        INNER JOIN states\
        ON cities.state_id = states.id\
        WHERE states.name = %s\
        ORDER BY cities.id", (sys.argv[4],))
        rows = cur.fetchall()
        cities = []
        for row in rows:
            cities.append(row[0])
        print(", ".join(cities))
    except MySQLdb.Error:
        print("Failed")
    cur.close()
    connection.close()
