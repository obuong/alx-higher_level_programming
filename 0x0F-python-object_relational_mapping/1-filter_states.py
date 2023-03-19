<<<<<<< HEAD
#!/usr/bin/python3
"""
Lists all states with a name starting with N (upper N) from the database
hbtn_0e_0_usa sorted in ascending order by states.id
"""
=======
#!/usr/bin/env python3
""" selecting with mysqldb """
>>>>>>> 451c38854812e82d3d5123af040aa18597dbc51c
import MySQLdb
import sys


if __name__ == "__main__":
<<<<<<< HEAD

    mysql_username = sys.argv[1]
    mysql_password = sys.argv[2]
    db_name = sys.argv[3]

    try:
        conn = MySQLdb.connect(
            host="localhost",
            port=3306,
            user=mysql_username,
            passwd=mysql_password,
            db=db_name,
            charset="utf8"
        )
    except MySQLdb.Error as e:
        print("Error connecting to database: {}".format(e))
        sys.exit(1)

    cur = conn.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE BINARY 'N%' \
                ORDER BY states.id ASC")
    rows = cur.fetchall()

    for row in rows:
        print(row)

    cur.close()
    conn.close()
=======
    try:
        connection = MySQLdb.connect(
            host="localhost",
            user=sys.argv[1],
            passwd=sys.argv[2],
            port=3306,
            db=sys.argv[3]
        )
    except MySQLdb.Error:
        print("error connecting")
    cur = connection.cursor()
    try:
        cur.execute("SELECT * FROM states WHERE name LIKE 'N%' ORDER BY states.id")
        rows = cur.fetchall()
        for row in rows:
            print(row)
    except MySQLdb.Error:
        print("execution failed")
    cur.close()
    connection.close()
>>>>>>> 451c38854812e82d3d5123af040aa18597dbc51c
